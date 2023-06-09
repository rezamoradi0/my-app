import React, { Component } from "react";
import FoodItem from "./FoodItem";
import foodJpg from "../images/food.jpg";
import heartJpg from "../images/icons8-heart-50.png";
class AccoBody extends Component {
  render() {
    function Show() {
      console.log("Test");
    }
    return (
      <>
        <div
          id="body"
          style={{
            
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
            maxHeight: "0px",
            overflow: "hidden",
            transition: "all 300ms",
            boxSizing:'border-box',
                        overflow:"hidden",
                       
          }}
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
