import React from "react";
import EagleKolo from "../EagleKolo.png";





function Home() {

    

  return ( 
      <>
      
    <div id="home">
    
    <img src={EagleKolo} className="Home-logo" alt="logo" />
    <br></br>
    <br></br>
    <br></br>
  
    <h2>
      Welcome to EAGLE KOLO!
    </h2>
    <h5><code>...let's get started</code></h5>
    </div>
    </>
  )
}

export default Home;