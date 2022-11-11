import React from "react";
import Leftside from "./Leftside";
import Topside from "./Topside";


interface Props {}
export default function Navbar() : any {
  return (
    <React.Fragment>
      <div className="">
      <Leftside />
      
      <Topside />
      </div>
        
    </React.Fragment>
  );
}
