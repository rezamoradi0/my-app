import React, { Component } from "react";
import FoodItem from "./FoodItem";
import foodJpg from "../images/food.jpg";
import heartJpg from "../images/icons8-heart-50.png";
class AccoBody extends Component {


  render() {
  
    return (
      <>
        <div
          id="body"
          style={
            this.props.toggle 
              ?  {
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "20px",
                overflow: "hidden",
                transition: "all 300ms",
                boxSizing: "border-box",

                
                  maxHeight: "800px",
                  padding: "20px 10px",
                  border: "1px solid black",
                }:{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "20px",
                  overflow: "hidden",
                  transition: "all 300ms",
                  boxSizing: "border-box",

                  maxHeight: "0px",
                  padding: "0px",
                  border: "none"
                }
              
          }
        >
          <FoodItem
            img={foodJpg}
            name="Product1"
            price="100"
            info="testtesttesttesttesttest
            testtesttest testtest testtest test test testtestv"
            icon={heartJpg}
          />
          <FoodItem
            img={foodJpg}
            name="Product2"
            price="2100"
            info="testtesttesttesttesttest
            testtesttest testtest testtest test test testtestv"
            icon={heartJpg}
          />
          <FoodItem
            img={foodJpg}
            name="Product3"
            price="400"
            info="testtesttesttesttesttest
            testtesttest testtest testtest test test testtestv"
            icon={heartJpg}
          />
          <FoodItem
            img={foodJpg}
            name="Product4"
            price="12320"
            info="testtesttesttesttesttest
            testtesttest testtest testtest test test testtestv"
            icon={heartJpg}
          />
        </div>
      </>
    );
  }
}

export default AccoBody;
