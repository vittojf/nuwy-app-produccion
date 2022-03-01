import axios from 'axios';
import React,{useState} from 'react';
import { Spinner } from 'react-bootstrap';
import TopNambedInput from '../TopNambedInput/TopNambedInput'
import {toast, Toaster } from "react-hot-toast"; 
function FormContact() {

  const [data, setData] = useState({
    name:'',
    email:'',
    message:''
  });
  const [res, setRes] = useState(false);
    const inputGroup = [
        {
          label: "Nombre y Apellido",
          labelClass: "text-white ",
          inputClass: " mt-1 form-step-1 form-none ",
          id: "name",
          name:"name",
          value:data.name,
          onChange: handleOnChange,
          required:true
        },
        {
          label: "Correo electronico",
          labelClass: "text-white",
          inputClass: "mt-1 form-step-1 form-none  ",
          id: "correo",
         type:'email',
         name:"email",
         value:data.email,
          boxClass: "my-4",
          onChange: handleOnChange,
          required:true
        },
      ];

function  handleOnChange(e,name){
  setData({ ...data,  [name]: e}) 
        }


async function sendMessageContact(){
setRes(true)
  axios
        .post("https://nuwy.io/send-mail-contact", data)
        .then((res) => {
          setRes(false) 
          toast.success("Correo Enviado", {
            position: "top-right",
            reverseOrder: true,
            style: {
              marginTop: "10px",
            },
          })
      
          
        }).catch(res=>{
         
          setRes(false)
          toast.error("Ocurrio un Error", {
            position: "top-right",
            reverseOrder: true,
            style: {
              marginTop: "10px",
            },
          })

        })
}        
     

    return ( <section className="my-5  text-start sectionContact " id="contacto">

        <h6 className="text-title-nuwy text-center mb-4">¿No encuentras tu respuesta? escríbenos</h6>
       

     {inputGroup.map((el) => {
       return (
                <div className={` text-start ${el.boxClass}`} key={el.id}>
                  <TopNambedInput
                label={el.label}
                labelClassName={el.labelClass}
                inputClassName={el.inputClass}
                id={el.id}
                spanClassName={el.spanClass}
                spanText={el.textSpan}
                type={el.type}
                name={el.name}
                value={el.value}
                preview={el.preview}
                onChange={el.onChange}
                required={el.required}
                fileName={el.fileName}
                styleClassInputLabel={el.styleClassInputLabel}
                textInputLabelStyle={el.textInputLabelStyle}
                imageLabel={el.imageLabel}
                    />
                </div>
              );
            })}

            <label htmlFor="message" className="text-white label-text">Mensaje</label>
            <textarea name="message" id="message" cols="30" rows="10" className="textarea-mensaje"  onChange={(e)=>handleOnChange(e.target.value,e.target.name)}></textarea>
          
<button className="btn btn-nuwy-modal w-100 mt-4" onClick={sendMessageContact} disabled={data.email===''||data.name===''||data.message===''}>

{res?<Spinner animation="border" variant="dark" />:'Enviar'}


</button>
<Toaster
              gutter={2}
              containerClassName="mt-5"
              toastOptions={{
                // Define default options
                className: "",

                duration: 1200,
              }}
            />
    </section> );
}

export default FormContact;