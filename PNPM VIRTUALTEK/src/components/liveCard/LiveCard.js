import { Link } from "react-router-dom";
import { Skeleton } from 'antd';
import { useNotifyMe } from "../../services/LiveService";


export default function LiveCard({
  image,
  title,
  price,
  discounted_price,
  status,
  id
}) {

  const { mutate, isLoading } = useNotifyMe()

  if (isLoading) {
    return (
      <Skeleton />
    )
  }



  return (
    <div className="mr-6 rounded-md overflow-hidden shadow-md border border-[#0000001A] group">
      <div className="h-56 overflow-hidden relative">
        <img src={image} alt="" className="h-full w-full object-cover group-hover:scale-125 transition-all duration-500" />
        <div className="absolute inset-0 bg-[#0000004D]" />

        {status !== "Not Started" ?
          <span className="px-2 absolute left-2 bottom-2 text-xl font-medium text-[#FF2020] border bg-white border-[#FF2020]">LIVE NOW</span>
          :
          <span className="px-2 absolute left-2 bottom-2 text-xl font-medium text-[#1890ff] border bg-white border-[#FF2020]">NOT STARTED</span>
        }

      </div>
      <div className="px-2 py-4">
        <p className="text-[#314651] text-xl font-bold">{title}</p>
        <div className="flex space-x-2 justify-between items-end">
          <div>
            <p className="text-xl text-[#707070] line-through">${price}</p>
            <p className="text-2xl sm:text-3xl font-extrabold text-[#0C64A2]">${discounted_price}</p>
          </div>
          {
            status === "Not Started"
              ?
              <a href="#!" className="px-4 sm:px-8 py-2 rounded-md bg-[#0A97D9] text-white hover:text-white text-lg font-medium" onClick={() => { mutate(id) }}>Notify Me</a>
              :
              <div className="px-4 sm:px-8 py-2 rounded-md bg-[#0A97D9] text-white hover:text-white text-lg font-medium"><Link to={`/live/${id}`} className="text-white hover:text-green">Join Live </Link></div>
          }

        </div>
      </div>
    </div>
  );
}
