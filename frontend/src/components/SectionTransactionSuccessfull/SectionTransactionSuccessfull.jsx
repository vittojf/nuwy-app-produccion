import { PDFDownloadLink } from "@react-pdf/renderer";
import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import FormContext from "../../Context/dataContext";
import Navbars from "../Navbars/Navbars";
import NumberFormat from "react-number-format";
import SectionsNuwy from "../Sections/Sections";
import FacturaPDF from "./PlantillaPDFSuccessFull";

import "./sectionSuccessfull.css";
function SectionTransactionSuccessfull() {
  const { dataBody, rate, dataSendMoney,formatData } = useContext(FormContext);



  function getDateTime(date){
if(date!==''){

  let hours = date.getHours();
  let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    let strTime = hours + ':' + minutes + ' ' + ampm;
    return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear() + " " + strTime;
  }else{
    return
  }
  }

  return (
    dataBody.FechaTransaccion!==""?
    <>
      <Navbars />
      <SectionsNuwy
        className="mt-80 mx-auto containerNuwySuccessFull mb-5 pt-3"
        title="Nuwy"
        titleClassName="mt-3 text-white text-center mb-4 "
        titleClassNameText="fs-1"
      >
        <div className="d-flex justify-content-center ">
          <div className="list-circle rounded-circle position-relative flex-shrink-0 checkSection">
            <span className="position-absolute top-50 start-50 translate-middle ">
              <img src="/svg/check.svg" alt="" />
            </span>
          </div>
        </div>
        <h4 className="text-center text-white my-4">Transacción exitosa</h4>
        <div className="">
          <div className="d-flex text-white justify-content-center">
            <div className="text-center mount-nuwy ">
              <p className=" m-0">Monto transferido</p>
              <h3>$<NumberFormat
              value= {dataSendMoney?.emisor.value}
              style={{fontSize:'20px'}}
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
            
              /> CLP</h3>
            </div>
            <img src="/svg/rowRightCheck.svg" className="mx-3" alt="" />
            <div className="text-center mount-nuwy">
              <p className=" m-0">Receptor recibirá</p>
              <h3>
                $<NumberFormat
              value= {dataSendMoney?.receptor.value}
              style={{fontSize:'20px'}}
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
            
              />{" "}{dataSendMoney?.receptor.country}
              </h3>
            </div>
          </div>
        </div>
        <div className="mx-lg-5 mx-4">

        <div className="d-flex justify-content-center my-4 text-white mx-auto" style={{maxWidth:'388px'}}>
          <div className="   list-circle rounded-circle position-relative  flex-shrink-0 bg-step-3-form ">
            <span className="position-absolute  start-50  translate-middle step-3-span">
              ¡
            </span>
          </div>
          <div className="body flex-grow-1 ms-2 ">
            <p className="text-body-contact-alert text-height text-step-3">
              <b>Luego de verificar la información</b> nos tomará un tiempo
              realizar la transferencia, al momento de realizarla te
              notificaremos a tu correo
            </p>
          </div>
        </div>
        <Card className="card-resume-sucessfull  text-center mx-auto">
          <div className="mx-3">
            <h6 className="mt-3">Detalles de la transacción</h6>
          </div>
          <div className="  body-list-data mx-auto ">
            <div className="row row-cols-1 row-cols-lg-2  mx-4 mx-lg-1">
              <div className="col d-flex justify-content-between mb-2 mt-0">
                <b>Enviaste</b>
                <span>
                   $<NumberFormat
              value= {dataSendMoney?.emisor.value}
      
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
              
              /> CLP
              </span> 
              </div>
              <div className="col d-flex justify-content-between mb-2 mt-lg-0 mt-2">
                <b>Recibirá</b>
              
                 <span>
                   $<NumberFormat
              value={dataSendMoney?.receptor.value}
      
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
              
              /> {dataSendMoney?.receptor.country}
              </span> 
           
              </div>
              <div className="col d-flex justify-content-between my-2">
                <b>Tipo de Cambio</b>
               <NumberFormat
              value= {rate}
              displayType="text"
              thousandSeparator="."
              decimalSeparator="," 
            
              />
              </div>
              <div className="col d-flex justify-content-between my-2 ">
                <b>Banco</b>
                <span >{dataBody?.DatosReceptor.banco}</span>
              </div>
              <div className="col d-flex justify-content-between my-2">
                <b>Tipo de Cuenta</b>
                <span>{dataBody?.DatosReceptor.tipoCuenta}</span>
              </div>
              <div className="col d-flex justify-content-between mt-2 mb-3">
                <b>N° de cuenta</b>
                <span>{dataBody?.DatosReceptor.nCuenta}</span>
              </div>
              <div className="col w-100 d-flex justify-content-center mt-2 mb-3">
                <b>Fecha transacción:</b>
                <span className="ms-2">{getDateTime(dataBody?.FechaTransaccion)}</span>
              </div>
            </div>
     
          </div>
        </Card>
            </div>
        <div className="row row-cols-1 row-cols-lg-2 pb-4" style={{ margin: "0 2rem" }}>
          <div className="col">
            <Link
              to={{
                pathname: "/",
              }}
              state={{formatData:true}}
              onClick={()=>formatData()}
              className="text-white btn btn btn-nuwy-steps mt-3 "
              >
              volver a inicio
            </Link>
          </div>
          <div className="col">
          <PDFDownloadLink  document={<FacturaPDF dataConvert={dataSendMoney} dataUser={dataBody} rate={rate} dateTransaccion={getDateTime(dataBody?.FechaTransaccion)}/> } fileName="ComprobanteNuwy.pdf">
          <button className="text-white btn btn-cancel-step mt-3 font-text-nwy">
              Descargar Comprobante
            </button>
    </PDFDownloadLink>
         
          </div>
        </div>
      </SectionsNuwy>
  
    </>:<Navigate to="/"/>
  );
}

export default SectionTransactionSuccessfull;
/* <ul className="bd-highlight">
              <li>
                <b>Enviaste</b>
              </li>
              <li>
                <b>Recibirá</b>
              </li>
              <li>
                <b>Tipo de Cambio</b>
              </li>
              <li>
                <b>Banco</b>
              </li>
              <li>
                <b>Tipo de Cuenta</b>
              </li>
              <li>
                <b>N° de cuenta</b>
              </li>
            </ul>
            <ul className=" bd-highlight">
              <li>${dataSendMoney?.emisor.value} CLP</li>
              <li>${dataSendMoney?.receptor.value} {dataSendMoney?.receptor.country}</li>
              <li>{rate}</li>
              <li>{dataBody?.DatosReceptor.banco}</li>
              <li>{dataBody?.DatosReceptor.tipoCuenta}</li>
              <li>{dataBody?.DatosReceptor.nCuenta}</li>
            </ul> */
