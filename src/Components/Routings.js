import React from "react";
import Home from "./MianMenu/Home";
import Contact from "./MianMenu/Contact"
import Courses from "./MianMenu/Courses";
import  Events from "./MianMenu/Events";
import Pricing from "./MianMenu/Pricing";
import About from "./MianMenu/About";
import  Trainers from "./MianMenu/Trainers";
import Header  from "./MianMenu/Header";
import Footer from "./MianMenu/Footer";
import {BrowserRouter,Route}  from  'react-router-dom';
function Routings(){
return( <BrowserRouter>


 <Header/>

 
 <Route path="/about" component={About} />
 <Route path="/home" component={Home} />
 <Route path="/Contact" component={Contact} />
 <Route path="/Courses" component={Courses} />
 <Route path="/Events" component={Events} />
 <Route path="/Pricing" component={Pricing} />
 <Route path="/Trainers" component={Trainers} />

 <Footer/>


</BrowserRouter>)

}
 export default Routings;