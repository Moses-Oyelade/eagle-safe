import { BrowserRouter, Switch, Route } from "react-router-dom";
import Details from "./pages/Details";
import About from "./pages/About";
import Save from "./pages/Save";
import Loan from "./pages/Loan";
import Home from "./pages/Home";
import NavBar from "./NavBar";
// import EagleKolo from "./EagleKolo.png";
import './App.css';
import Footer from "./components/Footer";

function App() {
    

  return (
    <>
     <div className="App">
      
     
       <BrowserRouter>
         <NavBar />
           <Switch>
            <Route path= "/details">
                <Details/>
            </Route>
            <Route path= "/about">
                <About/>
            </Route>
            <Route path= "/save">
                <Save/>
            </Route>
            <Route path= "/loan">
                <Loan/>
            </Route>
            <Route exact path= "/">
                <Home/>
            </Route>
            </Switch>
            <Footer/>
        </BrowserRouter>
    </div> 
    </>
  );
}

export default App;
