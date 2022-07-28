import React from "react";
import table from '../../Assets/Images/table.jpg'
import market from '../../Assets/Images/market.jpg'
import content from '../../Assets/Images/content.jpg'

function   Courses()
{
  return( <div>

<div className="head">
   <h1>courses</h1>
    <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. 
      Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis
       ipsam aperiam consequatur laboriosam nemo harum praesentium.</p>
   </div>
   <div className="container-fluid mt-3">
  
     <div className="row">
        <div className="col-4  ">
            <div className="card" style={{width:'400px'}}>
                <img className="card-img-top" src={table} alt="" style={{width:'100%'}}/>
                <div className="card-body">
                  <h4 className="card-title">Web Devoopment</h4>
                  <p className="card-text">Magnam soluta odio exercitationem reprehenderi
                      Quo totam dolorum at pariatur aut distinctio dolorum laudantium illo direna pasata redi</p>
                  <button style={{border:'1px solid ', color:'green',}}>Web Design</button>
                  <p style={{ color:'green',}}><h3> &#36;169</h3></p>
          </div> 
        </div>
        </div>
        <div className="col-4  ">
            <div className="card" style={{width:'400px'}}>
                <img className="card-img-top" src={market} alt="" style={{width:'100%'}}/>
                <div className="card-body">
                  <h4 className="card-title">Search Engine Optimization </h4>
                  <p className="card-text">Magnam soluta odio exercitationem reprehenderi
                      Quo totam dolorum at pariatur aut distinctio dolorum laudantium illo direna pasata redi</p>
                  <button style={{border:'1px solid ', color:'green',}}>Marketing</button>
                  <p style={{ color:'green',}}><h3> &#36;250</h3></p>
          </div> 
        </div>
        </div>
        <div className="col-4  ">
            <div className="card" style={{width:'400px'}}>
                <img className="card-img-top" src={content} alt="" style={{width:'100%'}}/>
                <div className="card-body">
                  <h4 className="card-title">Copy Writing</h4>
                  <p className="card-text">Magnam soluta odio exercitationem reprehenderi
                      Quo totam dolorum at pariatur aut distinctio dolorum laudantium illo direna pasata redi</p>
                  <button style={{border:'1px solid ', color:'green',}}>Content</button>
                  <p style={{ color:'green',}}><h3> &#36;500</h3></p>
          </div> 
        </div>
        </div>
        </div>
        </div>

  </div> );
}
export default  Courses;