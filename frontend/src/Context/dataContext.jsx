import React, { createContext, useState } from "react";
import { validate } from "rut.js";
const FormContext = createContext();
function DataContext({ children }) {
  const [dataBody, setDataBody] = useState({
    DatosUsuario: {
      email: "",
      rut: "",
      name: "",
    },
    DatosReceptor: {
      tipoCuenta: "Ahorro",
      name: "",
      dni: "",
      email: "",
      banco: "",
      nCuenta: "",
    },
    DatosCaptura: {},
    FechaTransaccion:""
  });
  const [dataSendMoney, setDataSendMoney] = useState({
    emisor: {
      country: "CLP",
      value: 1,
      countryName: "",

    },
    receptor: {
      country: "COP",
      countryName:'Colombia',

      value: "",
    },
  
  });

  const [data, setData] = useState([]);
  const [rate, setRate] = useState();
  const [res, setRes] = useState(false);
 

  function formatData(){
    setDataBody({
      DatosUsuario: {
        email: "",
        rut: "",
        name: "",
      },
      DatosReceptor: {
        tipoCuenta: "Ahorro",
        name: "",
        dni: "",
        email: "",
        banco: "",
        nCuenta: "",
      },
      DatosCaptura: {},
      FechaTransaccion:""
    })
    setRate(null)

    setRes(false)
  }






  const validateRut = () => {
    return validate(dataBody["DatosUsuario"]["rut"]);
  };
  const datas = {
    dataBody,
    setDataBody,
    dataSendMoney,
    setDataSendMoney,
    setRes,
    res,
    data,
    setData,

    rate,
    setRate,
    validateRut,
    formatData
  };
  return <FormContext.Provider value={datas}>{children}</FormContext.Provider>;
}

export { DataContext };

export default FormContext;
