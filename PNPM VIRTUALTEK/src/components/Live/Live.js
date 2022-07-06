import { useEffect, useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AgoraRTC from "agora-rtc-sdk-ng";
import { useParams } from "react-router-dom";
import { useGetLive } from "../../services/LiveService";
import LoaderComp from "../LoaderComp/LoaderComp";
import { BiVideo, BiVideoOff, BiPhoneOff } from 'react-icons/bi';
import { AiOutlineAudio, AiOutlineAudioMuted } from 'react-icons/ai';
import { MdOutlineCameraswitch } from 'react-icons/md';
import { AuthContext } from "../../context/AuthContext";
import { getImageAbsoluteURL } from "../../utils/string";

export default function GoLive() {
    const { profile } = useContext(AuthContext)
    const [isJoined, setIsJoined] = useState(false);
    const [mikeOn, setMikeOn] = useState(true);
    const [videoOn, setVideoOn] = useState(true);
    const [client, setClient] = useState(null);
    const [localAudioTrack, setLocalAudioTrack] = useState(null);
    const [localVideoTrack, setLocalVideoTrack] = useState(null);
    const [camera, setCamera] = useState(0)
    const navigate = useNavigate();

    const param = useParams()

    let rtc = {
        localAudioTrack: null,
        localVideoTrack: null,
        client: null,
    };

    const { isLoading, data } = useGetLive(param.id)

    useEffect(() => {
        if (!isJoined && data?.data.role === "host") {
            hostJoin();
        }
        if (!isJoined && data?.data.role === "audience") {
            clientJoin();
        }
    }, [data]);

    rtc.client = AgoraRTC.createClient({ mode: "live", codec: "vp8" });


    if (isLoading) {

        return <LoaderComp />
    }

    const options = data?.data


    const hostJoin = async function () {
        rtc.client.setClientRole("host");
        await rtc.client.join(options.appId, options.channel, options.token, options.uid);
        setClient(rtc.client)
        rtc.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
        rtc.localVideoTrack = await AgoraRTC.createCameraVideoTrack();

        setLocalAudioTrack(rtc.localAudioTrack);
        setLocalVideoTrack(rtc.localVideoTrack);

        await rtc.client.publish([rtc.localAudioTrack, rtc.localVideoTrack]);
        rtc.localVideoTrack.play("hostScreen");
        console.log("Publish Success")
        setIsJoined(true);
    }

    const toggleMikeOn = async function () {
        if (mikeOn) {
            await client.unpublish(localAudioTrack)
        } else {
            await client.publish(localAudioTrack)
        }
        setMikeOn(!mikeOn)
    }

    const toggleVideo = async function () {


        if (videoOn) {
            await client.unpublish(localVideoTrack)
        } else {
            await client.publish(localVideoTrack)
        }
        setVideoOn(!videoOn)
        console.log("From the end ",)
    }

    const clientJoin = async function () {

        rtc.client.setClientRole("audience");

        await rtc.client.join(options.appId, options.channel, options.token, options.uid);

        rtc.client.on("user-published", async (user, mediaType) => {

            await rtc.client.subscribe(user, mediaType);

            if (mediaType === "video") {
                const remoteVideoTrack = user.videoTrack;
                console.log("remoteVideoTrack is", remoteVideoTrack)
                remoteVideoTrack.play("audienceScreen");
            }

            if (mediaType === "audio") {
                const remoteAudioTrack = user.audioTrack;
                remoteAudioTrack.play();
            }
        })

        rtc.client.on("user-unpublished", user => {
            const remotePlayerContainer = document.getElementById(user.uid);
            remotePlayerContainer.remove();
        });
        setIsJoined(true);
    }
    const leaveLive = async function () {
        localAudioTrack.close();
        localVideoTrack.close();
        client.remoteUsers.forEach(user => {

            const playerContainer = document.getElementById(user.uid);
            playerContainer && playerContainer.remove();
        });

        await client.leave();
        navigate("/dashboard/my-lives")
    }

    const toggleCamera = async function () {
        AgoraRTC.getDevices()
            .then(devices => {

                const videoDevices = devices.filter(function (device) {
                    return device.kind === "videoinput";
                });
                if(camera === 0){
                    setCamera(1)
                }
                else{
                    setCamera(0)
                }
                
                localVideoTrack.setDevice(videoDevices[camera].deviceId)
            })
    }

    return (

        <div className="flex flex-col m-0">
            {
                data?.data?.role === "host"
                &&
                <>
                    {
                        videoOn ?

                            null
                            :
                            <div className="bg-black h-screen w-full z-10  absolute">
                                <img src={getImageAbsoluteURL(profile.profileImageUrl)} className="absolute z-20 w-40 h-40 top-[30%] left-[48%]  object-cover rounded-full" />
                            </div>

                    }
                    <div className="videoPlayerDiv h-screen w-full" id="hostScreen"></div>
                    <div className="absolute bottom-9 right-[40%] flex z-20 ">
                        <div className="rounded-full text-white p-3 m-1 bg-red-600" onClick={() => { leaveLive() }} ><BiPhoneOff size={20} /></div>
                        {
                            videoOn ?
                                <div className="bg-white  text-[#5E5959] rounded-full p-3 m-1" onClick={() => { toggleVideo() }}>{<BiVideo size={20} />}</div>
                                :
                                <div className="bg-[#5E5959] text-white rounded-full p-3 m-1" onClick={() => { toggleVideo() }}>{<BiVideoOff size={20} />}</div>
                        }
                        {
                            mikeOn ?
                                <div className="bg-white text-[#5E5959] rounded-full p-3 m-1" onClick={() => { toggleMikeOn() }}>{<AiOutlineAudio size={20} />}</div>
                                :
                                <div className="bg-[#5E5959] text-white rounded-full p-3 m-1" onClick={() => { toggleMikeOn() }}><AiOutlineAudioMuted size={20} /> </div>
                        }
                        {
                            <div>
                                <div className="bg-white text-[#5E5959] rounded-full p-3 m-1" onClick={() => { toggleCamera() }}>
                                    {<MdOutlineCameraswitch size={20} />}
                                </div>
                            </div>
                        }

                    </div>
                </>


            }
            {
                data?.data?.role === "audience"
                &&
                <div id="audienceScreen" className="h-screen w-full">
                    <div className="absolute z-0">
                        Waiting for host
                    </div>
                    <div className="rounded-full text-white p-3 m-1 bg-red-600 z-50 absolute top-2 right-2" onClick={() => { navigate("/userdashboard/live-listing") }} ><BiPhoneOff size={20} /></div>
                </div>


            }




        </div>
    )

}
