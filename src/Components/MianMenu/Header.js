import React from "react";
import {Link, NavLink,} from 'react-router-dom'

function Header() {
  
  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-light bg-dark" style={
        {
          backgroundColor: '#475562',
          borderBottom: '0.5px white solid',
          borderTop: '0.5px white solid',
        }
      } >
        <div className="container-fluid bg-info">
          <h1>MENTOR</h1>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              
          <ul className="navbar-nav">
        <li className="nav-item">
          <Link     className="nav-link active text-white"  activeclassName="  bg-dark"  to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white " activeclassName="  bg-dark"  to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white "  activeclassName="  bg-dark" to="/pricing">Pricing</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white "  activeclassName="  bg-dark" to="/Courses">Courses</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white "  activeclassName="  bg-dark" to="/Trainers">Trainers</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white "  activeclassName="  bg-dark" to="/Contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white " to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white " to="/Events">Events</NavLink>
        </li>
      </ul> 
    </div>
  </div>
</nav>
            {/* <ul className="navbar-nav">
              {

                MenuNames.map((data, i) =>
                  <li className="nav-item px-2" key={i}>

                    <NavLink className="nav-link text-warning " to={`/${data.toLowerCase()}`}>{data}</NavLink>
                  </li>
                )

              }

            </ul> */}

          

    </>
  )


}
export default Header