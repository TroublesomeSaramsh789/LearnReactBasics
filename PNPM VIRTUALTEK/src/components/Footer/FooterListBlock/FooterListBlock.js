import { Link } from "react-router-dom"
import "./FooterListBlock.scss"


export default function FooterListBlocks({lists}) {
    return (
        <div className="mainListBlockWrap">
         
            <ul>
                {lists.map((listItem, index) => {
                    if(index === 0){
                        return <li key={index} className="titleFooterListBlock">{listItem}</li>
                    }else{
                        return (
                          <Link key={index}
                            className="text-white no-underline "
                            to={listItem.link}
                          >
                            <li className="hover:text-gray-700">
                              {listItem.title}
                            </li>
                          </Link>
                        );
                    }
                    
                })}
            </ul>
        </div>
    )
}