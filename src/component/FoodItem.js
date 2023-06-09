import React, { Component } from "react";
class FoodItem extends Component {
  render() {
    const { img, name, price, info, icon } = this.props;
  
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "20%",
          border: "1px solid black",
          padding: "10px 20px",
          borderRadius: "10px",
          boxSizing:'border-box',
          
        }}
      >
        <img style={{ borderRadius: "10px", width: "100%" }} src={img} alt="" />
        <span style={{ fontSize: "25px" }}>{name}</span>
        <span style={{ fontSize: "20px", backgroundColor: "yellow" }}>
          {price}$
        </span>
        <p style={{ fontSize: "18px" ,height:"100px"}}> {info} </p>
        <img width="30px" height="30px" src={icon} alt="" />
      </div>
    );
  }
}

export default FoodItem;
