import VlogSlider from '../../home/VlogSlider/VlogSlider'
import './PhotoVideoCardComponent.scss'
import { BiPhotoAlbum } from 'react-icons/bi'
import { BsCameraVideoFill } from 'react-icons/bs'
import { useState } from 'react'




export default function PhotoVideoCardComponent({data}) {
    
    
    const photoArray = data?.images || []
    const videoArray = data?.videos || []
    const [activeMenu, setActiveMenu] = useState("photo")
    const menu = ["photo", "video"]
    function changeMenu(e) {

        setActiveMenu(e.target.id)
    }

    return (
        <div className="photoVideoCWrap">
            <div className="photoVideoMenu">
                {
                    activeMenu === "photo"
                        ?
                        <>
                            <p className="active" id="photo" onClick={(e) => { changeMenu(e) }}>
                                <BiPhotoAlbum className='inline-block' /> Photo
                            </p>
                            <p onClick={(e) => { changeMenu(e) }} id="video">
                                <BsCameraVideoFill className='inline-block' /> Video
                            </p>
                        </>
                        :
                        <>
                            <p onClick={(e) => { changeMenu(e) }} id="photo">
                                <BiPhotoAlbum className='inline-block' /> Photo
                            </p>
                            <p className='active' onClick={(e) => { changeMenu(e) }} id="video">
                                <BsCameraVideoFill className='inline-block' /> Video
                            </p>
                        </>
                }

            </div>
            {activeMenu === "photo"
                ?
                <VlogSlider fromPhotoVideo={true}  content={photoArray}/>
                :
                <VlogSlider fromPhotoVideo={true} videoArray={videoArray}/>
            }


        </div>
    )
}