import React, { useState } from "react";
import { Modal, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import SimpleBarReact from "simplebar-react";
import "simplebar/src/simplebar.css";
import Navbars from "../Navbars/Navbars";
import "./ConfirmNuwy.css";
import TerminosCondiciones from "./TerminosCondiciones";
function MyVerticallyCenteredModal(props) {
  const [fullScreen, setFullScreen] = useState(false);


  function handleScreen(){
setFullScreen(true)

  }

  return (
    <>
      <Modal
        {...props}
        
        aria-labelledby="contained-modal-title-vcenter"
        centered
        fullscreen={fullScreen}
        contentClassName={fullScreen?'':"modalNuwyConfirm"}
        backdropClassName="modalNuwyBackdrop"
      >
        <Modal.Body className="text-center overflow-hidden">
          {
            fullScreen?<>
            <Navbars/>
        <div className="h-100  container">

<div style={{marginTop:'4rem'}}>

            <div className="d-flex justify-content-between  justify-content-lg-start align-items-end mt-2 mb-3" style={{height:'15%'}}>
              <button className=" text-white  fs-5 btnReset btn-terminos d-flex align-items-center  " onClick={()=>setFullScreen(false)} >
     <img src="/svg/rowColor.svg" alt="rowLeft" className="me-2"/>
    Volver
    </button>
</div>
    
            </div>
            <SimpleBarReact
                  style={{ maxHeight: "80%",padding:'0 0.5rem',width:'100%'  }}
                  scrollbarMaxSize="87"
                  forceVisible="y"
                  autoHide={true}
                  overflow-x="hidden"
                  
                  >
                  
            <div className="text-condition container mx-auto ">
            <h5 className="fs-10 text-center my-4 text-condition-title">Términos y condiciones de uso de sitio web</h5>
      
            <TerminosCondiciones></TerminosCondiciones>
            </div>
            </SimpleBarReact>
                  </div>
            </>
            
            :<>
              <h1 className="fs-10 text-center my-4">Nuwy</h1>
          <div className="text-center container body-modal-text">
            <p className="text-modal">
              Al continuar estás aceptando todos nuestros términos y condiciones
            </p>
          </div>
            <button className="btn btn-modal" onClick={handleScreen}>
            <a href="/#2" className="link-modal-terminos">
              {" "}
              Terminos & Condiciones
            </a>
            <img src="/svg/rowRigth.svg" alt="row" className="icon-modal" />
          </button>
            </>
          }
          
        </Modal.Body>
        <Modal.Footer className="d-flex flex-nowrap justify-content-center ">
          <Link to="/sendMoney" className="btn btn-nuwy-modal "   state={ {data:props.datasend}}>

            Aceptar y continuar

          </Link>
    
          <button className="btn-cancel " onClick={()=>{
            props.onHide()
          setFullScreen(false)
          }}>
            Cancelar
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function ConfirmNuwy(props) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <button
        type="button"
        className="btn btn-send-nuwy "
        disabled={props.buttonDisabled?true:!props.res?true:false}
        onClick={() => setModalShow(true)}
      >
          { !props.res?<Spinner animation="border" variant="dark"  />:'Enviar Dinero'}
        
      </button>

      <MyVerticallyCenteredModal
      datasend={props.datasend}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default ConfirmNuwy;
