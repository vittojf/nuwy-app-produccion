import React, { useState } from "react";
//import { ButtonGroup, ToggleButton } from "react-bootstrap";
import TopNambedInput from "../TopNambedInput/TopNambedInput";
import FormStep from "./FormSteps";
import bancosData from "./dataBancos.json"

import "simplebar/src/simplebar.css";
import "./styles/FormStep1.css";

function Step2({ children, steps, setSteps, dataBody, setDataBody }) {
  //const [checked, setChecked] = useState(false);

  const [valRadio, setValRadio] = useState({
    val1: { value: 1, checked: false },
    val2: { value: 2, checked: false },
    val3: { value: 3, checked: false }, 
  });
  const [selectValue, setSelectValue] = useState("default");
  /*
  label={el.label}
  LabelClassName={el.LabelClass}
  inputClassName={el.inputClass}
  id={el.id}
  spanClassName={el.textSpan}*/
  const inputGroup = [
    {
      label: "Nombre y Apellido",
      labelClass: "text-white fontTextSteps",
      inputClass: " mt-1 form-step-1",
      id: "name",
      type: "text",
      required: true,
      value: dataBody.DatosReceptor.name ?? "",

      name: "name",
      onChange: handleOnChange,
    },
    {
      label: "Numero de identificación",
      labelClass: "text-white fontTextSteps",
      inputClass: "mt-1 form-step-1",
      id: "dni",
      textSpan: "DNI - CÉDULA - RUT",
      spanClass: "ms-2 spanText",
      boxClass: "my-lg-0 my-4 ",
      onChange: handleOnChange,
      value: dataBody.DatosReceptor.dni ?? "",
      name: "dni",
      type: "text",
      required: true,
    },
    {
      label: "Correo Electronico",
      labelClass: "text-white fontTextSteps",
      inputClass: " mt-1 form-step-1",
      name: "email",
      value: dataBody.DatosReceptor.email ?? "",

      onChange: handleOnChange,
      id: "email",
      type: "email",
      required: true,
    },
  ];

  function handleOnChange(e, name) {
    setDataBody({
      ...dataBody,
      DatosReceptor: {
        ...dataBody.DatosReceptor,
        [name]: e,
      },
    });
  }


  return (
    <>
      {children}
      <FormStep
        inputGroup={inputGroup}
        numberStep={2}
        classButton={"mt-2  mb-5 mb-lg-0"}
        steps={steps}
        setSteps={setSteps}
        textStep=" Ingresa los datos personales y bancarios de la persona que recibirá el dinero, asegurate que no hayan errores"
        titleStep="Ingresa los datos del receptor"
        ubicationChildren="inside-form"
      >
        <div className="col">
          <div className="my-4">
            <label htmlFor="select" className="text-white">
              Banco
            </label>
            

            <select
              id="select"
              value={selectValue}
              name="select"
              className="mt-1"
              onChange={(e) => {
                handleOnChange(e.target.value, "banco");
                setSelectValue(e.target.value);
              }}
            >
            

              <option value="default" hidden>
                Elige un Banco
              </option>{
                bancosData.map((el,key)=>(
                  <option value={el.value} key={key}>{el.value}</option>
                  ))
                }
         
       
            
            </select>

             
          </div>
        </div>

        <div className="row rows-cols-1 rows-cols-lg-2 checkbox-nuwy justify-content-between mx-auto mt-0 mt-lg-5  ">
          
          <label
            htmlFor="ahorro"
            className={`btn btn-nuwy-step btn-radio-nuwy col me-3 ${
              dataBody.DatosReceptor.tipoCuenta === "Ahorro" && "actives"
            }`}
          >
            Ahorro
          </label>
          <input
            type="radio"
            id="ahorro"
            value={valRadio.val1.value}
            name="ahorro"
            checked={dataBody.DatosReceptor.tipoCuenta === "Ahorro"}
            onChange={(e) => {
            
              handleOnChange("Ahorro", "tipoCuenta");
              setValRadio({
                ...valRadio,
                val1: { value: e.currentTarget.value },
              });
            }}
          />

          <label
            htmlFor="corriente"
            className={`btn btn-nuwy-step btn-radio-nuwy  col ${
              dataBody.DatosReceptor.tipoCuenta === "Corriente" && "actives"
            }`}
          >
            Corriente
          </label>
          <input
            type="radio"
            id="corriente"
            value={valRadio.val2.value}
            name="corriente"
            checked={dataBody.DatosReceptor.tipoCuenta === "Corriente"}
            onChange={(e) => {
              
              handleOnChange("Corriente", "tipoCuenta");
            }}
          />

  
        </div>

        <div className="col">
          <TopNambedInput
            label="Numero de Cuenta"
            labelClassName="text-white mt-4 fontTextSteps"
            inputClassName=" form-step-1"
            id="nCuenta"
            type="number"
            required={true}
            name="nCuenta"
            onChange={handleOnChange}
          />
        </div>
        
      </FormStep>
    </>
  );
}

export default Step2;

/*
//============================================================================================================================================================================================================================================================================================================================
//                                                                                                                                                                                                                                                                                                                            
//  ##   ####    ##     ##   #####   #####      ###    #####                                                                                                                                                                                                                                                                
//  ##  ##       ####   ##  ##   ##  ##  ##    ## ##   ##  ##                                                                                                                                                                                                                                                               
//  ##  ##  ###  ##  ## ##  ##   ##  #####    ##   ##  #####                                                                                                                                                                                                                                                                
//  ##  ##   ##  ##    ###  ##   ##  ##  ##   #######  ##  ##                                                                                                                                                                                                                                                               
//  ##   ####    ##     ##   #####   ##   ##  ##   ##  ##   ##                                                                                                                                                                                                                                                              
//                                                                                                                                                                                                                                                                                                                            
//============================================================================================================================================================================================================================================================================================================================



<div className="mx-4 text-center span-nuwy-step float mt-4-5">
          <span className="text-white ">
            Asegurate que los datos sean correctos de lo contrario puede ser
            rechazado tu envío
          </span>
        </div>
                <label
            htmlFor="especial"
            className={`btn btn-nuwy-step btn-radio-nuwy ${
              dataBody.DatosReceptor.tipoCuenta === "Especial" && "actives"
            }`}
          >
            Especial
          </label>
          <input
            type="radio"
            id="especial"
            value={valRadio.val3.value}
            name="especial"
            checked={dataBody.DatosReceptor.tipoCuenta === "Especial"}
            onChange={(e) => {
              setRadioValue(e.currentTarget.value);
              handleOnChange("Especial", "tipoCuenta");
            }}
          />
        
        */
