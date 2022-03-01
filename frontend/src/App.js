import React from "react";

import SectionFooter from "./components/SectionFooter/SectionFooter";
import { Outlet } from "react-router";
import "./App.css";
import {DataContext} from "./Context/dataContext";

function App() {
  
  return (
    <React.Fragment>
      <div className="bg" >
      <DataContext>

      
        <Outlet />
        <SectionFooter />
      </DataContext>
      </div>
    </React.Fragment>
  );
}

export default App;
