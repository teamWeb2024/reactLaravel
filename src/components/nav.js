import React from "react"
import Image from "../images/newCar.jpg"
import Message from "../images/message.png"
import Call from "../images/call.png"
import Insta from "../images/insta.png"
import Facebook from "../images/facebook.png"


export default function Nav() {
    return(
     <div className="subNav">
        <img src={Message} className="messageImg"/> 
        <p className="email">Anwarioanan@gmail.com</p>
        <img src={Call} className="callImg"/>
        <p className="phoneNb">0552 399 74 27</p>
        <img src={Insta} className="instaImg"/>
        <img src={Facebook} className="facebookImg"/>
        
        
      

     </div>
    )
   }