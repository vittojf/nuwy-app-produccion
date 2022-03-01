import React, { useState } from "react";
import { Accordion, Card, useAccordionButton } from "react-bootstrap";
import "./AcordionAnswer.css";

function CustomToggle({ children, eventKey, refClick, setRefClick }) {
  const decoratedOnClick = useAccordionButton(eventKey, () => {
    setRefClick((prevData) => {
      let copyRow = prevData;
      let obj = copyRow.filter((el) => el.eventKey === eventKey);

      obj[0]["animation"] = !obj[0]["animation"];
      
      if(obj[0]["animation"] ===true){
        prevData.map(e=>e.animation=false)
        obj[0]["animation"] =true;
      }
      return prevData;
    });
  });

  return (
    <button
      type="button"
      className="accordion-button-nuwy  d-flex justify-content-between align-items-center text-start"
      onClick={decoratedOnClick}
    >
      <p className="m-0 me-5"> {children}</p>
      <span className="me-2">
        <img
          src={`/svg/${
            !refClick[Number(eventKey)].animation ? "add.svg" : "Line.svg"
          }`}
          className={`${
            refClick[Number(eventKey)].animation ? "me-2 icon-line" : "icon-add"
          } animate `}
          alt=""
        />
      </span>
    </button>
  );
}

function AcordionAnswer() {
  const [refClick, setRefClick] = useState([
    {
      eventKey: "0",
      animation: false,
    },
    {
      eventKey: "1",
      animation: false,
    },
    {
      eventKey: "2",
      animation: false,
    },
    {
      eventKey: "3",
      animation: false,
    },
  ]);
  return (
    <>
      <Accordion>
        <Card className="nuwy-card-acordion"  id="preguntas-frecuentes">
          <Card.Header className="header-nuwy-card">
            <CustomToggle
              eventKey="0"
              refClick={refClick}
              setRefClick={setRefClick}
            >
              ¿Preguntas frecuentes numero uno?
            </CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body className="text-start">
              <h6 className="mb-3 text-body-answer">
                ¿Preguntas frecuentes numero uno?
              </h6>
              <div className="text-body-answer me-4">
                <p>
                  {" "}
                  et non est Quidam alii sunt, et non est in nostra potestate.
                  Quae omnia inpotestat Quidam alii sunt, et non est in nostra
                  potestate alii sunt, et non est in nostra potestate. Quae
                  omnia
                </p>
                <p>
                  et non est Quidam alii sunt, et non est in nostra potestate.
                  Quae omnia inpotestat Quidam alii sunt, et non est in nostra
                  potestate alii sunt, et non est in nostra potestate. Quae
                  omnia
                </p>
                <p>
                  et non est Quidam alii sunt, et non est in nostra potestate.
                  Quae omn
                </p>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card className="nuwy-card-acordion">
          <Card.Header className="header-nuwy-card">
            <CustomToggle
              eventKey="1"
              refClick={refClick}
              setRefClick={setRefClick}
            >
              ¿Preguntas frecuentes numero dos?!
            </CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body className="text-start">
              <h6 className="mb-3 text-body-answer">
                ¿Preguntas frecuentes numero dos?
              </h6>
              <div className="text-body-answer me-4">
                <p>
                  {" "}
                  et non est Quidam alii sunt, et non est in nostra potestate.
                  Quae omnia inpotestat Quidam alii sunt, et non est in nostra
                  potestate alii sunt, et non est in nostra potestate. Quae
                  omnia
                </p>
                <p>
                  et non est Quidam alii sunt, et non est in nostra potestate.
                  Quae omnia inpotestat Quidam alii sunt, et non est in nostra
                  potestate alii sunt, et non est in nostra potestate. Quae
                  omnia
                </p>
                <p>
                  et non est Quidam alii sunt, et non est in nostra potestate.
                  Quae omn
                </p>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card className="nuwy-card-acordion">
          <Card.Header className="header-nuwy-card">
            <CustomToggle
              eventKey="2"
              refClick={refClick}
              setRefClick={setRefClick}
            >
              ¿Preguntas frecuentes numero tres?
            </CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body className="text-start">
              <h6 className="mb-3 text-body-answer">
                ¿Preguntas frecuentes numero tres?
              </h6>
              <div className="text-body-answer me-4">
                <p>
                  {" "}
                  et non est Quidam alii sunt, et non est in nostra potestate.
                  Quae omnia inpotestat Quidam alii sunt, et non est in nostra
                  potestate alii sunt, et non est in nostra potestate. Quae
                  omnia
                </p>
                <p>
                  et non est Quidam alii sunt, et non est in nostra potestate.
                  Quae omnia inpotestat Quidam alii sunt, et non est in nostra
                  potestate alii sunt, et non est in nostra potestate. Quae
                  omnia
                </p>
                <p>
                  et non est Quidam alii sunt, et non est in nostra potestate.
                  Quae omn
                </p>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card className="nuwy-card-acordion">
          <Card.Header className="header-nuwy-card">
            <CustomToggle
              eventKey="3"
              refClick={refClick}
              setRefClick={setRefClick}
            >
              ¿Preguntas frecuentes numero cuatro?
            </CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body className="text-start">
              <h6 className="mb-3 text-body-answer">
                ¿Preguntas frecuentes numero cuatro?
              </h6>
              <div className="text-body-answer me-4">
                <p>
                  {" "}
                  et non est Quidam alii sunt, et non est in nostra potestate.
                  Quae omnia inpotestat Quidam alii sunt, et non est in nostra
                  potestate alii sunt, et non est in nostra potestate. Quae
                  omnia
                </p>
                <p>
                  et non est Quidam alii sunt, et non est in nostra potestate.
                  Quae omnia inpotestat Quidam alii sunt, et non est in nostra
                  potestate alii sunt, et non est in nostra potestate. Quae
                  omnia
                </p>
                <p>
                  et non est Quidam alii sunt, et non est in nostra potestate.
                  Quae omn
                </p>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  );
}

export default AcordionAnswer;
