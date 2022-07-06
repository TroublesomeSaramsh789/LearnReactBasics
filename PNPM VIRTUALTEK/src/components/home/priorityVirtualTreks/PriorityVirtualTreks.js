import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import VTImage from "./virtualTrekImageComponent/VTImage";
import PRIORITY_VIRTUAL_TREK from "../../../assets/priority_virtual_trek.webp";


export default function PriorityVirtualTreks({latestNormalTrek}) {
  
  return (
    <div className="container mt-20">
      <h2 className=" text-[#314651] text-3xl font-bold">
        <span className="inline-block border-b-[3px] border-b-[#FD578D]">
          Normal&nbsp;
        </span>
        Trek
      </h2>
      {/* <div
        className="mt-8 p-6 flex justify-center items-center relative before:absolute before:inset-0 before:bg-[#00000040]"
        style={{
          backgroundImage: `url("${PRIORITY_VIRTUAL_TREK}")`,
          backgroundPosition: "100% 100%"
        }}
      >
        <div className="rounded-3xl overflow-hidden bg-[#DADBDDCC]">
          <div>
            <img src={PRIORITY_VIRTUAL_TREK} alt="" />
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center space-x-4">
              <div className="flex items-center text-[#0A97D9]">
                <FaMapMarkerAlt size={18} className="mr-2 inline-block" />
                <span className="text-lg">Nepal</span>
              </div>
              <div className="flex space-x-2 text-[#FD578D]">
                <FaStar size={16} />
                <FaStar size={16} />
                <FaStar size={16} />
                <FaStar size={16} />
                <FaStar size={16} />
                
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div>
        <VTImage latestNormalTrek = {latestNormalTrek}/>
      </div>
    </div>
  );
}
