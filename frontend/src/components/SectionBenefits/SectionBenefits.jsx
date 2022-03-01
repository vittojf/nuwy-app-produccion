import React, { useEffect } from "react";
import Card from "../Card/Card";
import "./SectionBenefits.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function SectionBenefits() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section className="container mt-100 mb-50 benefitsSection" >
      <div className="row row-cols-1 row-cols-lg-3 mx-1-5">
        <div className="col my-5">
          <Card
            className="text-benefits position-relative h-card mt-3 "
            routeImg="svg/shield.svg"
            alt="Shield"
            animation="fade-up"
          >
            <div className="mt-1 d-flex flex-wrap align-items-center justify-content-center">
              <div className=" mb-2 mx-4">
                <h3 className=" title-size text-center roboto-bold">
                  Pensamos primero en tu seguridad
                </h3>
              </div>
              <div className="text-size-benefits-card text-center mx-2 ">
                <p>
                  Todas nuestras transferencias son seguras, confiables y
                  rápidas, evita estafas y transfiere con nosotros{" "}
                </p>
              </div>
            </div>
          </Card>
        </div>
        <div className="col my-5">
          <Card
            className="text-benefits position-relative h-card mt-3  "
            routeImg="img/Pig.png"
            alt="Shield"
            animation="fade-up"
          >
            <div className="mt-3 d-flex flex-wrap align-items-center justify-content-center">
              <div className=" mb-2 mx-4">
                <h3 className=" title-size text-center roboto-bold">
                  Pensamos en tu economía
                </h3>
              </div>
              <div className="text-size-benefits-card mx-4-5 text-center ">
                <p>
                  No cobramos comisión, nuestras tasas son más bajos que el
                  común del mercado
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="col my-5">
          <Card
            className="text-benefits position-relative h-card mt-3"
            routeImg="svg/clock.svg"
            alt="Shield"
            animation="fade-up"
          >
            <div className="mt-3 d-flex flex-wrap align-items-center justify-content-center">
              <div className=" mb-2 mx-5">
                <h3 className=" title-size text-center roboto-bold">
                  Pensamos en tu tiempo
                </h3>
              </div>
              <div className="text-size-benefits-card  text-center mx-3">
                <p>
                  Las transferencias se realizan en un máximo de 24 horas una
                  vez que se verifiquen los datos
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
<div className="text-center text-light-nuwy container" data-aos="fade-up">
<div className="container my-4">
      <h2 className="text-weight-normal">Envía sin comisiones, rápido y sin atados</h2>

</div>
      <Link to="/" className="btn btn-send-nuwy sendMoneyHome">Enviar Dinero</Link>

</div>

    </section>
  );
}

export default SectionBenefits;
