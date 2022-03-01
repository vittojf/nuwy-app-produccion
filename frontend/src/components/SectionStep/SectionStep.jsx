import React, { useEffect } from "react";
import "./SectionStep.css";
import Aos from "aos";
import "aos/dist/aos.css";

const SectionStep = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section className=" bg-section-step section-step" id="stepsSection">
      <article className=" mb-5 mx-3 px-2 section-body-step position-relative " >
        <div className=" mb-5 mt-1 mx-auto textTitleNuwySteps" data-aos="fade">
          <h3 className=" title-size text-center roboto-bold">
            Envia dinero a quien quieras en{" "}
            <span className="bg-text-mark-section-step ">3 simples pasos</span>
          </h3>
         
          
        </div>
        <div className="position-absolute  puntosStyleStep mt-1"  data-aos="fade">
              <img
                src="/img/puntosStep.png"
                alt="puntos"
                className="puntosImageStepStart"
              />
        </div>
        <section className="row row-cols-1 row-cols-lg-3 stepsNuwy">
          
          <div className="col">
            <div className="d-flex  mt-4 forAnimation" data-aos="fade-right">
              <div className="list-circle rounded-circle position-relative flex-shrink-0">
                <span className="position-absolute top-50 start-50 translate-middle title-size">
                  1
                </span>
              </div>
              <div className="body flex-grow-1 ms-12px ">
                <h3 className="title-size bg-step-list roboto-bold">
                  Elije la moneda del receptor
                </h3>

                <div className="me-4">
                  <p className="fs-13px text-height font-size-nuwy-step">
                    Elije la moneda según el pais de tu receptor y escribe el
                    monto que quieras transferir
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="d-flex  mt-4 " data-aos="fade-right">
              <div className="">
                <div className="list-circle rounded-circle position-relative flex-shrink-0">
                  <span className="position-absolute top-50 start-50 translate-middle title-size">
                    2
                  </span>
                </div>
              </div>
              <div className="body flex-grow-1 ms-12px ">
                <h3 className="title-size bg-step-list roboto-bold">
                  Registra los datos de tu receptor
                </h3>

                <div className="me-4">
                  <p className="fs-13px text-height font-size-nuwy-step">
                    Ingresa los datos de la persona que recibirá el dinero que
                    quieres enviar
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col ">
            <div className="d-flex  mt-4 " data-aos="fade-right">
              <div className="list-circle rounded-circle position-relative flex-shrink-0">
                <span className="position-absolute top-50 start-50 translate-middle title-size">
                  3
                </span>
              </div>
              <div className="body flex-grow-1 ms-12px ">
                <h3 className="title-size bg-step-list roboto-bold">
                  Espera la validación y listo
                </h3>

                <div className="me-4">
                  <p className="fs-13px text-height font-size-nuwy-step ">
                    Sube el capture de la transferencia a Nuwy y espera a que
                    nuestros agentes validen la información que se te enviará a
                    tu correo electrónico
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </section>
        <div className="position-absolute  end-0 puntosStyleStepEnd" data-aos="fade">
              <img
                src="/img/puntosStepEnd.png"
                alt="puntos"
                className="imgPuntos"
              />
            </div>
      </article>
    </section>
  );
};

export default SectionStep;
