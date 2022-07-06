import "./InputElement.scss"
export default function InputElement({label, placeholder, type, name}) {
    return (
        <div className="inputElement">


            <label for={name}>{label}</label>
            <input type={type} className="form-control" name={name}  placeholder={placeholder}/>

        </div>
   
    )
}