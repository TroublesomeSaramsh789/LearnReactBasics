import { RiPhoneFill } from "react-icons/ri";
import { HiMail } from "react-icons/hi";
import { FaUser, FaUserPlus } from "react-icons/fa";
import { BsFillFileTextFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import {Link} from 'react-router-dom'

import "./Header.scss"
import { useWebsiteSettings } from "../../../services/WebsiteApisService";
import LoaderComp from '../../LoaderComp/LoaderComp'

export default function Header() {
  const {isLoading, data} = useWebsiteSettings()
  if(isLoading){
    return <LoaderComp/>
  }

  return (
    <div className="hidden headerMainWrap lg:flex lg:flex-row lg:justify-between">
      <div className="lg:flex lg:flex-row">
        <a
          href="tel:9845238410"
          className="px-4 lg:px-8 py-2 lg:py-1.5 text-[#0A97D9]  flex justify-center items-center"
        >
          <RiPhoneFill size={14} className="inline-block mr-1.5 text-[#ffffff]" />
          <span>{data?.data?.contactNumber}</span>
        </a>
        <a
          href="mailto:virtualtrek@gmail.com"
          className="px-4 lg:px-8 py-2 lg:py-1.5 flex justify-center items-center"
        >
          <HiMail size={14} className="inline-block mr-1.5" />
          <span>{data?.data?.email}</span>
        </a>
      </div>
      <div className="lg:flex lg:flex-row">
        <Link
          to="/login"
          className="px-4 lg:px-8 py-2 lg:py-1.5 flex justify-center items-center"
        >
          <FaUser size={14} className="inline-block mr-1.5" />
          <span>Login</span>
        </Link>
        <Link
          to="/signup"
          className="px-4 lg:px-8 py-2 lg:py-1.5 flex justify-center items-center"
        >
          <FaUserPlus size={14} className="inline-block mr-1.5" />
          <span>Signup</span>
        </Link>
        <a
          href="#!"
          className="px-4 lg:px-8 py-2 lg:py-1.5  flex justify-center items-center"
        >
          <BsFillFileTextFill size={14} className="inline-block mr-1.5" />
          <span><Link to="/dashboard">Dash</Link></span>
        </a>
        <div className="px-4 lg:px-6 py-2 lg:py-1.5  text-[#0A97D9] flex justify-center items-center">
          <button className="px-4 py-1 lg:py-0.5 font-medium  rounded-[4px]">
            <Link to="/becomeGuide">Become a Guide</Link>
          </button>
        </div>
        <div className="px-4 lg:px-8 py-2 lg:py-1.5  flex justify-center items-center">
          <button>
            <FiSearch size={20} className="inline-block text-[#ffffff]" />
          </button>
        </div>
      </div>
    </div>
  );
}
