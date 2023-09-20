import React from 'react'
import ContactUs from "../components/ContactUs";
import Eagle1 from "../Eagle1.jpg"

function About() {




  return (
    <div id="about">
        <h2>About Us</h2>
            {/* {bio && bio.length > 1 ? <p>{bio}</p> : null} */}
            <img src="src/eagle1.jpg" alt="eagle-Wings" />
            <img src="src/eagle1.jpg" alt="eagle-Wings" />
        
        <img src={Eagle1} className="Eagle1" alt="eagle-Wings" />
        <ContactUs />
  </div>
    
    
    
  )
}

export default About