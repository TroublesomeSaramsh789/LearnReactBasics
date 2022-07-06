import './Testomonial.scss'
import { Avatar } from 'antd'
import { getImageAbsoluteURL } from '../../../utils/string'
export default function Testomonial({text,name,post,image}){
    return (
        <div className='testomonialMainDiv'>
            <div className='testomonialMainText'>
                <p>{text}</p>
            </div>
            <div className='avatartestomonial'>
                <Avatar size={60} icon ={<img src={getImageAbsoluteURL(image)}></img>}/>
            </div>
            <div className='nametestomonial'>
                <p>{name}</p>
            </div>
            <div className='posttestomonial'>
                <p>{post}</p>
            </div>
            <div className='linetestomonialDiv'>
                <div className='linetestomonial'></div>
            </div>
        </div>
    )
}