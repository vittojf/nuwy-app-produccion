import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FormContext from "../../Context/dataContext";
import NumberFormat from "react-number-format";
import TopNambedInput from "../TopNambedInput/TopNambedInput";
import { toast, Toaster } from "react-hot-toast";
import "./styles/FormStep1.css";
import axios from "axios";
import { Spinner } from "react-bootstrap";
function FormStep({
  children,
  inputGroup,
  numberStep,
  titleStep,
  textStep,
  setSteps,
  steps,
  format,
  classButton,
  stepClass,
  ubicationChildren,
  bodyFormClass,
  resImage,
  file,
  trigger,
}) {
  const { dataBody, rate, dataSendMoney, setRes, validateRut, setDataBody } =
    useContext(FormContext);

  //https://nuwy-api-app.herokuapp.com/send-mail
  //http://localhost:4000/
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });
  const sendMail = async (datos, datoEnvio, rates) => {
    let rate = { rate: rates };
    let body = { ...datos, ...datoEnvio, ...rate };
    const formData = new FormData();
    formData.append("avatar", file);
    await axiosInstance
      .post("/imageupload", formData)
      .then((res) => {
        if (res.status === 200) {
        }
      })
      .catch((err) => {
        //log(err)
      })
      .finally(() => {
        axiosInstance
          .post("/send-mail", body)
          .then((res) => {
            //      console.log(res);
          })
          .catch((err) => {
            // console.log(err);
          });
      });
  };

  return (
    <>
      <section className=" sectionStepsContainer ">
        <div className="d-lg-flex sectionStepsBody  ">
          <div className="flex-wrap flex-shrink-0 me-5 me-lg-4 d-none  d-lg-block">
            <div className="d-flex justify-content-center justify-content-sm-start ">
              <div
                className={`d-flex align-items-center  text-white ${stepClass} `}
              >
                <div className="   list-circle rounded-circle position-relative flex-shrink-0 bg-step-form ">
                  <span className="position-absolute top-50 start-50 translate-middle title-size-form">
                    {numberStep}
                  </span>
                </div>
              </div>
            </div>
            <div className={`ms-3 mb-0 ${numberStep === 3 && "d-none"}`}>
              <img
                src="/svg/liness.svg"
                alt="verticalLine"
                height={numberStep === 2 ? 240 : ""}
              />
            </div>
            <div
              className={`d-flex justify-content-center justify-content-sm-start ${
                numberStep === 3 && "d-none"
              }`}
            >
              <div
                className={`d-flex align-items-center   text-white ${stepClass} `}
              >
                <div className="   list-circle rounded-circle position-relative flex-shrink-0 bg-step-form bg-nuwy-number">
                  <span className="position-absolute top-50 start-50 translate-middle title-size-form">
                    {numberStep + 1}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-grow-1 mx-auto">
            <div className={`formStep1  ${bodyFormClass} `}>
              <div className="flex-wrap flex-shrink-0  mx-1 ">
                <div className="d-flex justify-content-center justify-content-lg-start  align-items-center ">
                  <div
                    className={`d-flex align-items-center  text-white ${stepClass} d-lg-none `}
                  >
                    <div className="   list-circle rounded-circle position-relative flex-shrink-0 bg-step-form ">
                      <span className="position-absolute top-50 start-50 translate-middle title-size-form">
                        {numberStep}
                      </span>
                    </div>
                  </div>
                  <div
                    className={
                      numberStep === 3
                        ? "body ms-12px ms-lg-0   text-white text-center text-lg-start "
                        : "body ms-12px ms-lg-0   text-white text-start text-lg-start "
                    }
                  >
                    <h6 className=" roboto-bold fontTitleSteps">{titleStep}</h6>
                    {textStep ? (
                      <div className="">
                        <p className="text-body-form text-height fontTextSteps">
                          {textStep}
                        </p>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                {numberStep === 3 && (
                  <div
                    className="mx-auto mx-lg-0 mt-3 mt-lg-0"
                    style={{ width: "100%" }}
                  >
                    <h3 className="text-white text-center text-lg-start">
                      ${" "}
                      <NumberFormat
                        value={dataSendMoney.emisor.value}
                        style={{ fontSize: "22pt" }}
                        displayType="text"
                        thousandSeparator="."
                        decimalSeparator=","
                      />{" "}
                      {dataSendMoney.emisor.country}
                    </h3>
                  </div>
                )}
              </div>
              {numberStep === 3 && (
                <p
                  className="text-white mx-auto mx-lg-0 text-center text-lg-start "
                  style={{ fontSize: "15px" }}
                >
                  Transfiere desde cualquier cuenta bancaria a la cuenta
                  bancaria de Nuwy
                </p>
              )}

              {
                //ubicationChildren === "outside-form" && children
              }
              <div
                className={
                  numberStep === 3
                    ? "row row-cols-1 row-cols-lg-2"
                    : "row row-cols-1 row-cols-lg-1"
                }
              >
                <div className="col order-lg-last">
                  {ubicationChildren === "outside-form" && children}
                </div>

                <div
                  className={`${
                    numberStep === 3
                      ? "row row-cols-1  mx-auto"
                      : "row row-cols-1 row-cols-lg-3 justify-content-center mx-auto justify-content-lg-start"
                  }`}
                >
                  {inputGroup.map((el) => {
                    return (
                      <div className={` ${el.boxClass}`} key={el.id}>
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

                  {ubicationChildren === "inside-form" && children}

                  {(() => {
                    switch (steps) {
                      case 1:
                        return (
                          <div className=" col ">
                            <button
                              className={`btn btn-nuwy-steps  ${classButton}`}
                              type="submit"
                              disabled={
                                !(
                                  dataBody["DatosUsuario"]["name"] !== "" &&
                                  dataBody["DatosUsuario"]["rut"] !== "" &&
                                  dataBody["DatosUsuario"]["email"] !== ""
                                )
                              }
                              onClick={() => {
                                let res = validateRut();

                                if (res) {
                                  setSteps(steps + 1);
                                } else {
                                  toast.error("RUT Incorrecto", {
                                    position: "top-right",
                                    reverseOrder: true,
                                    style: {
                                      marginTop: "10px",
                                    },
                                  });
                                }
                              }}
                            >
                              Continuar
                            </button>
                          </div>
                        );
                      case 2:
                        return (
                          <>
                            <div className="d-flex text-white col mt-3 justify-content-center d-block d-lg-none">
                              <div className="body flex-grow-1 ms-2 text-center ">
                                <p className="text-body-form  text-height text-step-3">
                                  Asegurate que los datos sean correctos de lo
                                  contrario puede ser rechazado tu envío
                                </p>
                              </div>
                            </div>
                            <div className=" col  ">
                              <button
                                className={`btn btn-nuwy-steps  ${classButton}`}
                                type="submit"
                                disabled={
                                  !(
                                    dataBody["DatosReceptor"]["tipoCuenta"] !==
                                      "" &&
                                    dataBody["DatosReceptor"]["dni"] !== "" &&
                                    dataBody["DatosReceptor"]["name"] !== "" &&
                                    dataBody["DatosReceptor"]["email"] !== "" &&
                                    dataBody["DatosReceptor"]["banco"] !== "" &&
                                    dataBody["DatosReceptor"]["nCuenta"] !== ""
                                  )
                                }
                                onClick={() => setSteps(steps + 1)}
                              >
                                Continuar
                              </button>
                            </div>
                            <div className="col d-none d-lg-block">
                              <div className="d-flex text-white  mt-3 justify-content-center ">
                                <div className="   list-circle rounded-circle position-relative  flex-shrink-0 bg-step-3-form d-none d-lg-block">
                                  <span className="position-absolute  start-50  translate-middle step-3-span ">
                                    ¡
                                  </span>
                                </div>
                                <div className="body flex-grow-1 ms-2 d-none d-lg-block">
                                  <p className="text-body-form text-start text-height text-step-3">
                                    Asegurate que los datos sean correctos de lo
                                    contrario puede ser rechazado tu envío
                                  </p>
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      case 3:
                        return (
                          <>
                            {resImage ? (
                              <Link
                                className={`btn btn-nuwy-steps  ${classButton}`}
                                to={`/successfullTransacction/${new Date().valueOf()}`}
                                disabled={true}
                                onClick={() => {
                                  setDataBody({
                                    ...dataBody,
                                    FechaTransaccion: new Date(),
                                  });
                                  sendMail(dataBody, dataSendMoney, rate);
                                }}
                              >
                                Continuar
                              </Link>
                            ) : (
                              <button
                                className={`btn btn-nuwy-steps  ${classButton}`}
                                type="submit"
                                disabled={true}
                              >
                                {trigger ? (
                                  <Spinner animation="border" variant="dark" />
                                ) : (
                                  " Continuar"
                                )}
                              </button>
                            )}
                          </>
                        );
                      default:
                        return <></>;
                    }
                  })()}

                  {steps === 3 && (
                    <>
                      <Link
                        to={{
                          pathname: "/",
                        }}
                        className="text-white btn btn-cancel-step mt-3 "
                        onClick={() => {
                          format();
                          setRes(false);
                        }}
                      >
                        Cancelar y volver
                      </Link>
                      <div className="d-flex w-100  mt-4 justify-content-center align-items-center mb-5 ">
                        <span>
                          <img
                            src="/svg/lock.svg"
                            alt="banderaChile"
                            className="me-1"
                          />
                        </span>

                        <span className="fs-8 ms-2  text-white">
                          Esta es una plataforma segura
                        </span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
            <Toaster
              gutter={2}
              containerClassName="mt-5"
              toastOptions={{
                // Define default options
                className: "",

                duration: 1200,
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default FormStep;
