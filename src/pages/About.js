import React from 'react'
import ContactUs from "../components/ContactUs";
import Eagle1 from "../Eagle1.jpg";
import Human4 from "../Human4.jpg"


function About() {




  return (
    <div id="about">
        <h2>About Us</h2>
        <article>
        <img src={Human4} className="Human4" alt="smiling-woman" />
        
        <h5>This is Eagle Kolo Services...
          We are concerned about your financial stability and sanity.<br/><br/>
          Every civil worker is scared of retiring due to fear of financial bankruptcy.
          our goal is to help avoid such as much as we can.<br/>

          The Board of Directors in collaboration with Eagle Wings Int'l 
          put this together in other to help you plan your finance.<br/>
          We offer several services on financial management, nonetheless this aspect is an App for personal Contribution services...
          <br/>Kindly refer to the contact link below for more information.
        </h5>
        </article>
        
        <img src={Eagle1} className="Eagle1" alt="eagle-Wings" />
        <ContactUs />
  </div>
    
    
    
  )
}

export default About