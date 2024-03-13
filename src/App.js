import React from "react"
import Section from "./components/section1"
import './index.css';
import './subNav.css';
import Nav from "./components/nav"
import SubNav from "./components/subNav"






export default function App() {
 return(
  <section>
     <div>
        <Nav/>
        <SubNav/>
        <Section/>
     </div>
  </section>
 )
}
