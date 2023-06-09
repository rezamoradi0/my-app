import React, { Component } from "react";
import theIcon from "../images/icons8-chevron-right-64.png";
import theIcon2 from "../images/icons8-chevron-right-64-black.png";
import AccoBody, {Show} from "./AccoBody.js";
import Acco from "./Acco";


class AccoHeader extends Component {
  render() {
 
     let defBorderRadious="10px";

    const divStyle = {
      display: "flex",
      justifyContent: "space-between",
    //   backgroundColor: "lightblue",
      fontSize: "12px",
      padding:"5px 20px",alignItems:"center",color:"black",borderRadius:defBorderRadious,maxHeight:"30px"
      ,backgroundColor:"#eee",transition:"all 300ms"
    };
  
    return (
      <div  id="header" style={divStyle}>
        <h2>Digital Products</h2>
        <img style={{rotate:"90deg",transition:"all 300ms"}} width="20px" height="20px" src={theIcon2} alt=""/>
      </div>
    );
  }
}

export default AccoHeader;
