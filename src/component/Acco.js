import React, { Component } from 'react';
import AccoHeader from './AccoHeader';
import AccoBody from './AccoBody';

import theIcon from "../images/icons8-chevron-right-64.png";
import theIcon2 from "../images/icons8-chevron-right-64-black.png";
class Acco extends Component {

    render() { 
        let defBorderRadious="10px";
        let toggle=false;
        return (
<div 
onClick={(event)=>{
       
       toggle=!toggle;
       let header=event.currentTarget.querySelector("#header");
       let body=event.currentTarget.querySelector("#body");
   if(toggle){
    
    
    header.style.backgroundColor="#018ACE";
    header.style.color="#fff";
    header.style.borderBottomLeftRadius="0px";
    header.style.borderBottomRightRadius="0px";
       let img = header.querySelector("img");
       img.style.rotate="-90deg";
       img.src=theIcon;


       body.style.maxHeight="800px";
       body.style.padding="20px 10px";
       body.style.border="1px solid black";

   }else {
    header.style.backgroundColor="#eeeeee";
    header.style.color="black";
    header.style.borderBottomLeftRadius=defBorderRadious;
    header.style.borderBottomRightRadius=defBorderRadious;
       let img = header.querySelector("img");
        img.style.rotate="90deg";
        img.src=theIcon2;
        body.style.maxHeight="0px";
        body.style.padding="0px";
        body.style.border="none";


   }

     }}>
<AccoHeader/>
<AccoBody/>
</div>

        );
    }
}
 
export default Acco;