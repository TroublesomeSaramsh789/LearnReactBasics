import {BsFileEarmarkPdf} from "react-icons/bs"
import "./PDFCard.scss"
export default function PDFCard(){
    return (
        <div className="pdfCard mt-10">
            <h3 className="heading">Want to know about trip later?</h3>
            <p className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida cum sociis natoque penatibu</p>
            <p className="downloadLink mt-3"><BsFileEarmarkPdf size={40} className="inline-block mr-5 "/>Download PDF</p>
        </div>
    )
}