import React from "react";
import LAP from '../../Assets/Images/LAP.jpg'
import phone from '../../Assets/Images/phone.jpg'
function  Events()
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
        <div className="col-6 ">
            <div className="card" style={{ height:''}}>
                <img className="card-img-top" src={LAP} alt="" style={{width:'100%'}}/>
                <div className="card-body">
                  <h4 className="card-title" style={{textAlign:'center'}}>Introduction Web Devoopment</h4>
                  <p className="card-text" style={{textAlign:'center'}}>
                    <i  > Sunday, September 15th at 7:00 pm</i><br/>

Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
                
          </div> 
        </div>
        </div>
        <div className="col-6 ">
            <div className="card" style={{height:'auto'}}>
                <img className="card-img-top" src={phone} alt="" style={{width:'100%'}}/>
                <div className="card-body">
                  <h4 className="card-title" style={{textAlign:'center'}}> Marketing Startegies</h4>
                  <p className="card-text" style={{textAlign:'center'}}>  <i> Sunday, November 15th at 9:00 am</i><br/>

Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
   
          </div> 
        </div>
        </div>
        
        </div>
        </div>
    
  </div>
  )
}
export default  Events;