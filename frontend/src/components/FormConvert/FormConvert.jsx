import React, { useEffect, useState, useRef, useContext } from "react";

import "./FormContent.css";
import ConfirmNuwy from "../ConfirmNuwy/ConfirmNuwy";
import FormContext from "../../Context/dataContext";
import ListCountry from "./ListCountry/ListCountry";
import { useOutsideAlerter } from "../../hooks/useOutsideAlerter";
import ApiConvertRepository from "../../repository/apiConvert.repository";
import NumberFormat from "react-number-format";
import { useLocation } from "react-router-dom";
//import ApiConvertRepository from '../../repository/apiConvert.repository'
const repo = new ApiConvertRepository()
function FormConvert() {
  const [dropwdown, setDropwdown] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [value, setValue] = useState(new Date());
  const [valueInput1, setValueInput1] = useState(1);
const location = useLocation()
const maxVal=500000;
  // const [c1, setC1] = useState();
  const [c2, setC2] = useState("COP");

  const {
    dataSendMoney,
    setDataSendMoney,
    res,
    setRes,
    data,
    setData,
    setRate,
    rate,
    formatData
  } = useContext(FormContext);

  const handleClassChange = (e) => {
    return setDropwdown(!dropwdown);
  };


  function selectIcon() {
    const peru = "peruSelect.svg",
      ven = "veneSelect.svg",
      arg = "argSelect.svg";

    switch (c2) {
      case "COL":
        return "bandera-col.svg";
      case "PEN":
        return peru;
      case "VES":
        return ven;
      case "ARS":
        return arg;

      default:
        return "bandera-col.svg";
    }
  }

  function handleChangeCountry(v,name) {
    let amount = parseFloat(
      (valueInput1 * data.rates[v].toFixed(3)).toFixed(3)
    );
    setC2(v);
    setRate(parseFloat(data.rates[v].toFixed(3)));
    if (amount === 0) {
    } else {
      setDataSendMoney({
        ...dataSendMoney,
        receptor: { value: amount, country: v,countryName:name },
      });
    }
  }

  function handleChangeVal(event, input) {
    let amount;
    if (input === "receptor") {
      let { value } = event;
      if (value === 0 || value === "") {
        setValueInput1("");

        setDataSendMoney({
          ...dataSendMoney,
          emisor: {
            value: "",
          },
          receptor: {
            value: "",
          },
        });
      } else {
        value = Math.max(Math.min(Number(      res
          ? parseFloat(
            (maxVal * data.rates[c2].toFixed(3)).toFixed(3)
            )
            : maxVal), Number(value)));

        setValueInput1(
          parseFloat((value / data.rates[c2].toFixed(3)).toFixed(3))
        );
        amount = parseFloat(
          (value / data.rates[c2].toFixed(3)).toFixed(3)
        );

        setDataSendMoney({
          ...dataSendMoney,
          emisor: { ...dataSendMoney.emisor, value: amount, country: "CLP" },
          receptor: { ...dataSendMoney.receptor, value: value },
        });
      }
    } else if (input === "emisor") {
      let { value } = event;
      if (value === 0 || value === "") {
        setValueInput1("");

        setDataSendMoney({
          ...dataSendMoney,
          emisor: {
            value: "",
          },
          receptor: {
            value: "",
          },
        });
      } else {
        value = Math.max(Math.min(Number(maxVal), Number(value)));
        setValueInput1(value);

        amount = parseFloat(
          (value * data.rates[c2].toFixed(3)).toFixed(3)
        );
        setDataSendMoney({
          ...dataSendMoney,
          emisor: {...dataSendMoney.emisor, value: value, country: "CLP" },
          receptor: {...dataSendMoney.receptor, value: amount },
        });
      }
    }
  }

  useEffect(() => {
    if (res) {
      return;
    } else {
      repo.getData()
        .then((res) => {
          setData(res);
          setRate(parseFloat(res.rates["COP"].toFixed(3)));
          setRes(true);

          setDataSendMoney({
            emisor: {
              country: "CLP",
              value: 1,
              countryName:'Chile',


            },
            receptor: {
              country: "COP",
              countryName:'Colombia',

              value: parseFloat(
                (1 * res.rates["COP"].toFixed(3)).toFixed(3)
              ),
            },
          });
          setRes(true);
        });
    }
  }, [res, setData, setDataSendMoney, setRate, setRes]);
//console.log(location)


useEffect(() => {
  const interval = setInterval(
    () => setValue(new Date()),
    1000
  );

  return () => {
    clearInterval(interval);
  }
}, []);

useEffect(() => {
if(value.toLocaleTimeString("es-CL",{
  timeZone: "America/Santiago",
  hour12: true, // false
  hour: "numeric", // 2-digit
  minute: "2-digit", // numeric
  second: "2-digit" // numeric
})>='9:00:00 a. m.')
{
  
  setButtonDisabled(false)
}
if(value.toLocaleTimeString("es-CL",{
  timeZone: "America/Santiago",
  hour12: true, // false
  hour: "numeric", // 2-digit
  minute: "2-digit", // numeric
  second: "2-digit" // numeric
})>='6:00:00 p. m.'){
  
  setButtonDisabled(false)

}

}, [value]);



  useEffect(() => {
    if(location.state!==null){

      if(location.state?.formatData===true){
        formatData()
      }else{
        return
      }
    }else{

      return
    }
  }, [location]);// eslint-disable-line react-hooks/exhaustive-deps


  /*
  const formatoNumber = (number) => {
    const exp = /(\d)(?=(\d{80})+(?!\d))/g;
    const rep = "$1,";
    return number.toString().replace(exp, rep);
  };
*/

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setDropwdown);
  return (
    <div className="mt-2 formConvert">

        <div className="row  row-cols-1 row-cols-lg-3 row-cols-xl-3 row-cols-md-1 justify-content-center ">


        <article className="mb-3 col">
          <label className="labelForm" htmlFor="sendMoney">
            Tú envías
          </label>
          <div className="input-group  mb-2 position-relative">
            <div className="position-absolute top-50 start-0 translate-middle-y ms-3 spanMoneyIcon">
              <span className=" icon-money">$</span>
            </div>
             <NumberFormat
                 value={dataSendMoney.emisor.value ?? ""}
              thousandSeparator="."
              decimalSeparator=","
              prefix=""
              className="form-control form-control-nuwy-number  "
              id="sendMoney"
              displayType="input"
              onValueChange={(e) => handleChangeVal(e, "emisor")}
          />
           {/* <input
              id="sendMoney"
              type="number"
              value={dataSendMoney.emisor.value ?? ""}
              className="form-control form-control-nuwy-number  "
              max={500000}
              min={0}
              aria-label="Text input with dropdown button"
              onChange={(e) => handleChangeVal(e, "emisor")}
            />
           */}
            <button className=" dropdown-nuwy " disabled type="button">
              <img src="/svg/bandera-chile.svg" alt="banderaChile" />
            </button>
          </div>
          <div className="row row-cols-1">
            <span className="span-nuwy font-size-nuwy">
              Te damos:{" "}
              <b>
                {" "}
                {rate} {c2}
              </b>{" "}
              por <b>CLP</b>
            </span>
            <span className="span-nuwy font-size-nuwy" >
              Monto máximo a transferir: <b>$500.000 CLP</b>{" "}
            </span>
          </div>
        </article>

        <article className="mb-3 col ">
          <label className="labelForm" htmlFor="getMoney">
            El receptor recibe
          </label>
          <div className="input-group mb-2  position-relative">
            <div className="position-absolute top-50 start-0 translate-middle-y ms-3 spanMoneyIcon">
              <span className=" icon-money">$</span>
            </div>
            <NumberFormat
                 value={dataSendMoney.receptor.value ?? ""}
              thousandSeparator="."
              decimalSeparator=","
              prefix=""
              id="getMoney"
              className="form-control form-control-nuwy-number  "
              displayType="input"
              onValueChange={(e) => handleChangeVal(e, "receptor")}
          />
            <ListCountry
              handleClassChange={handleClassChange}
              wrapperRef={wrapperRef}
              selectIcon={selectIcon}
              dropwdown={dropwdown}
              handleChangeCountry={handleChangeCountry}
            />
          </div>
          <span className="span-nuwy font-size-nuwy">
            Tu envío llegará a mas tardar en 24 horas
          </span>
        </article>
        <article className="col ">
    
          <div className="mt-4">

        <ConfirmNuwy datasend={dataSendMoney.emisor.value&&dataSendMoney.receptor.value?"true":"false"} buttonDisabled={buttonDisabled} res={res} />
          </div>
        <div className="d-flex w-100 justify-content-center align-items-center spanSegurity ">
          <span>
            <img src="/svg/lock.svg" alt="banderaChile" className="me-1" />
          </span>

          <span className="fs-8 ms-2 mt-1 font-size-nuwy" >Esta es una plataforma segura</span>
        </div>
        </article>
              </div>
<section className="d-flex flex-wrap ">

      </section>
    </div>
  );
}

export default FormConvert;
