import React from "react";
import '../../Assets/Css Files/sai.css'
import work from '../../Assets/Images/work.jpg'
import profile from '../../Assets/Images/profile.jpg'
import student from '../../Assets/Images/student.jpg'

function   About()
{
  return( <div>
    <div className="head">
   <h1>About Us</h1>
    <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. 
      Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis
       ipsam aperiam consequatur laboriosam nemo harum praesentium.</p>
   </div>
      <div className="container mt-3">
  <div className="row">
        
  <div className="col-8">
          <h2>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h2>
       <p><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</i></p>
        <p><i class="fa-solid fa-car"></i> <b>#</b>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p><i class="fa-solid fa-car"></i><b>#</b> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p><i class="fa-solid fa-car"></i><b>#</b> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>on facere possimus quibusdam eligendi voluptatem. 
      Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis
       ipsam aperiam consequatur laboriosam nemo harum p</p>
     
        </div>
        <div className="col-4">
        <img  src={work} alt="" style={{width:'100%',float:'right',marginTop:'10px'}}/>
        </div>
        </div>
   </div>
      <div className="container-fluid mt-3">
  <div className="row">
    <div className=" col-3">
      <h1 style={{color:'green'}}>1232</h1>
      <p>students</p>
    </div>
    <div className=" col-3">
      <h1 style={{color:'green'}}>64</h1>
      <p>Courses</p>
    </div>
    <div className=" col-3">
      <h1 style={{color:'green'}}>42</h1>
      <p>Events</p>
    </div>
    <div className="col-3">
      <h1 style={{color:' green'}}>61</h1>
      <p>Trainers</p>
    </div>

  </div>
</div>

    
<div id="demo" className="carousel slide" data-bs-ride="carousel">
   
   <div className="carousel-indicators">
     <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
     <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
     <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
     <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
     <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
   </div>
   
   
   <div className="container-fluid mt-3"> 
       
   <div className="carousel-inner">
   <img src={work} style={{width: '100%',height:'350px',opacity:'0.5'}} alt=""/>
     <div className="carousel-item active">
       <img src={profile} alt="Los Angeles" className="d-block" style={{width:'15%',height:'100px',marginTop:'90px',marginLeft: '450px',marginBottom:' 170px'}}/>
       <div className="carousel-caption text-primary">
         <h3> kiran</h3>
         <p> director</p>
         <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
       </div>
     </div>
     <div className="carousel-item">
       <img src={student} alt="Chicago" className="d-block" style={{width:'15%',height:'100px',marginTop:'90px',marginLeft: '450px',marginBottom:' 170px'}}/>
       <div className="carousel-caption">
         <h3>Saikiran</h3>
         <p>manager</p>
         <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
       </div> 
     </div>
     <div className="carousel-item">
       <img src= {work} alt="Chicago" className="d-block"  style={{width:'15%',height:'100px',marginTop:'90px',marginLeft: '450px',marginBottom:' 170px'}} />
       <div className="carousel-caption">
         <h3>Saicharan</h3>
         <p> ceo</p>
         <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
       </div> 
     </div>
     <div className="carousel-item">
       <img src={profile} alt="Chicago" className="d-block"   style={{width:'15%',height:'100px',marginTop:'90px',marginLeft: '450px',marginBottom:' 170px'}}/>
       <div className="carousel-caption">
         <h3>Saicharan</h3>
         <p> ceo</p>
         <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
       </div> 
     </div>
     <div className="carousel-item">
       <img src={work} alt="New York" className="d-block"   style={{width:'15%',height:'100px',marginTop:'90px',marginLeft: '450px',marginBottom:' 170px'}}/>
       <div className="carousel-caption">
         <h3>kumar</h3>
         <p >sales manager</p>
         <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
       </div>  
     </div>
   </div>
   
    
   <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
     <span className="carousel-control-prev-icon"></span>
   </button>
   <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
     <span className="carousel-control-next-icon"></span>
   </button>
   </div>
   </div>  
 
  </div>
  )
}
export default  About;