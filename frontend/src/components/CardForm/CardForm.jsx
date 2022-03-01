import React from "react";
import Card from "../Card/Card";
import FormConvert from "../FormConvert/FormConvert";
import './CardForm.css'

function CardForm() {

  return (
    <>
      <section className=" mt-100 mb-card cardNuwy" id="seccionTransferir" >

          <div className="text-white text-center mx-14 " id="card-section">
              <h3 className="mb-19 roboto-bold title-size">Envía dinero de forma rápida y eficiente</h3>
              <p className="text-nuwy text-nuwy-size ">Sigue los pasos y envía dinero de forma segura</p>
          </div>
   
        
          <Card className="bg-card-nuwy text-white shadow-card-nuwy position-relative ">
        <div className="position-absolute top-0 start-100  puntosStyle" >
            <img src="/svg/puntos.svg" alt="puntos" className="puntosImage" />
          </div>
            <FormConvert/>

        </Card>
      </section>
    </>
  );
}

export default CardForm;
