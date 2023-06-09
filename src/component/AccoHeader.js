import React, { Component } from "react";
import theIcon from "../images/icons8-chevron-right-64.png";
import theIcon2 from "../images/icons8-chevron-right-64-black.png";
import AccoBody, { Show } from "./AccoBody.js";

class AccoHeader extends Component {
  render() {
    let defBorderRadious = "10px";

    const divStyle = {
      display: "flex",
      justifyContent: "space-between",
      //   backgroundColor: "lightblue",
      fontSize: "12px",
      padding: "5px 20px",
      alignItems: "center",
      color: "black",
      borderRadius: defBorderRadious,
      maxHeight: "30px",
      backgroundColor: "#eee",
      transition: "all 300ms",
    };
    const divStyle2 = {
      display: "flex",
      justifyContent: "space-between",
      //   backgroundColor: "lightblue",
      fontSize: "12px",
      padding: "5px 20px",
      alignItems: "center",
      color: "#fff",
      borderTopLeftRadius:"10px",
      borderTopRightRadius:"10px",
      borderBottomLeftRadius:"0px",
      borderBottomRightRadius:"0px",
      maxHeight: "30px",
      backgroundColor: "#018ACE",
      transition: "all 300ms",
    };

    const imgStyle={ rotate: "90deg", transition: "all 300ms" };
    const imgStyle2={ rotate: "-90deg", transition: "all 300ms" };
    return (
      <div    id="theHeader" style={this.props.toggle ?divStyle2  : divStyle}>
        <h2  id="theHeader2" >Digital Products</h2>
        <img  id="theHeader3" 
          style={this.props.toggle?imgStyle2: imgStyle}
          width="20px"
          height="20px"
          src={this.props.toggle ?theIcon :theIcon2}
          alt=""
        />
      </div>
    );
  }
}

export default AccoHeader;
