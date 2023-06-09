import React, { Component } from 'react';
import AccoHeader from './AccoHeader';
import AccoBody from './AccoBody';

import theIcon from "../images/icons8-chevron-right-64.png";
import theIcon2 from "../images/icons8-chevron-right-64-black.png";
class Acco extends Component {
    constructor(){
        super();
        this.state={
            toggle:true
        }
    }
    render() { 
        let defBorderRadious="10px";
       
        return (
<div 
onClick={( event )=>{

    
    if(event.target.id.includes("theHeader")){
        this.setState({toggle:!this.state.toggle},()=>{
           
        });
    }
   
     }}>
<AccoHeader toggle={!this.state.toggle}/>
<AccoBody  toggle={!this.state.toggle}/>
</div>

        );
    }
}
 
export default Acco;