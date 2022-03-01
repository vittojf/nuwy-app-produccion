import React from "react";
import { Dropdown } from "react-bootstrap";
import SimpleBarReact from "simplebar-react";
import "simplebar/src/simplebar.css";
function ListCountry({handleClassChange,wrapperRef,selectIcon,dropwdown,handleChangeCountry}) {
    const popperConfig = {
        placement: "bottom-end",
        modifiers: [
          {
            name: "flip",
            enabled: false,
          },
        ],
      };
  return (
    <Dropdown onClick={handleClassChange} ref={wrapperRef}>
      <Dropdown.Toggle
        className={` dropdown-nuwy  bg-btn-nuwy  ${
          dropwdown ? "dropdown-nuwy-active" : ""
        }`}
        id="dropdown-basic"
      >
        <div className="">
          <img
            src={`/svg/${dropwdown ? "lineVertical.svg" : selectIcon()}`}
            alt="banderaChile"
            className={`  ${dropwdown ? "me-15" : "me-3"}`}
          />

          <span
            className="position-absolute end-0 "
            style={{ marginRight: 11 }}
          >
            <img
              src={`/svg/${dropwdown ? "rowUp.svg" : "rowDown.svg"}`}
              alt="banderaChile"
              className="animate"
            />
          </span>
        </div>
      </Dropdown.Toggle>

      <Dropdown.Menu
        popperConfig={popperConfig}
        align="end"
        className=" animate slideIn dropdown-nuwy-menu  "
      >
        <SimpleBarReact
          style={{ maxHeight: "160px" }}
          scrollbarMaxSize="49"
          forceVisible="y"
          autoHide={true}
          overflow-x="hidden"
        >
          <Dropdown.Item
            href="#/action-2"
            className="textIconScroll"
            onClick={() => handleChangeCountry("COP","Colombia")}
          >
            <span className="spanIconScroll ">
              <img
                src={`/svg/colombia.svg`}
                alt="banderaChile"
                className="me-1"
              />
              COP
            </span>
            <span className="ms-1">Colombia</span>
          </Dropdown.Item>
          
        </SimpleBarReact>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ListCountry;


/*
//==========================================================================================================================================================================================================================================================================================================================================================
//                                                                                                                                                                                                                                                                                                                                                          
//   #####   ######  #####     #####    ####        #####     ###    ##   ####  #####   ####                                                                                                                                                                                                                                                              
//  ##   ##    ##    ##  ##   ##   ##  ##           ##  ##   ## ##   ##  ##     ##     ##                                                                                                                                                                                                                                                                 
//  ##   ##    ##    #####    ##   ##   ###         #####   ##   ##  ##   ###   #####   ###                                                                                                                                                                                                                                                               
//  ##   ##    ##    ##  ##   ##   ##     ##        ##      #######  ##     ##  ##        ##                                                                                                                                                                                                                                                              
//   #####     ##    ##   ##   #####   ####         ##      ##   ##  ##  ####   #####  ####                                                                                                                                                                                                                                                               
//                                                                                                                                                                                                                                                                                                                                                          
//==========================================================================================================================================================================================================================================================================================================================================================
//============================================================================================================================================================================================================================================================================================================================
//                                                                                                                                                                                                                                                                                                                            
//  ##   ####    ##     ##   #####   #####      ###    #####                                                                                                                                                                                                                                                                
//  ##  ##       ####   ##  ##   ##  ##  ##    ## ##   ##  ##                                                                                                                                                                                                                                                               
//  ##  ##  ###  ##  ## ##  ##   ##  #####    ##   ##  #####                                                                                                                                                                                                                                                                
//  ##  ##   ##  ##    ###  ##   ##  ##  ##   #######  ##  ##                                                                                                                                                                                                                                                               
//  ##   ####    ##     ##   #####   ##   ##  ##   ##  ##   ##                                                                                                                                                                                                                                                              
//                                                                                                                                                                                                                                                                                                                            
//============================================================================================================================================================================================================================================================================================================================
<Dropdown.Item
            href="#/action-2"
            className="textIconScroll"
            onClick={() => handleChangeCountry("ARS","Argentina")}
          >
            <span className="spanIconScroll ">
              <img
                src={`/svg/argentina.svg`}
                width={16}
                height={16}
                alt="banderaChile"
                className="me-1"
              />
              ARS
            </span>
            <span className="ms-1">Argentina</span>
          </Dropdown.Item>
          <Dropdown.Item
            href="#/action-2"
            className="textIconScroll"
            onClick={() => handleChangeCountry("PEN","Peru")}
          >
            <span className="spanIconScroll ">
              <img
                src={`/svg/peru.svg`}
                alt="banderaPeru"
                className="me-1"
                width={16}
                height={16}
              />
              PEN
            </span>
            <span className="ms-1">Peru</span>
          </Dropdown.Item>
          <Dropdown.Item
            href="#/action-2"
            className="textIconScroll"
            onClick={() => handleChangeCountry("VES","Venezuela")}
          >
            <span className="spanIconScroll ">
              <img
                src={`/svg/venezuela.svg`}
                alt="banderaChile"
                className="me-1"
              />
              VES
            </span>
            <span className="ms-1">Venezuela</span>
          </Dropdown.Item>

*/