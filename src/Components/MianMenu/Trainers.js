import React from "react";
import tran from '../../Assets/Images/tran.jpg'
import boy from '../../Assets/Images/boy.jpg'
 
import trainer from '../../Assets/Images/trainer.jpg'
function   Trainers()
{
  return( <div>
  
  <div className="head">
   <h1>TRAINERS</h1>
    <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. 
      Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis
       ipsam aperiam consequatur laboriosam nemo harum praesentium.</p>
   </div>
   <div className="container-fluid mt-3">
  
     <div className="row">
        <div className="col-4 ">
            <div className="card" style={{ height:''}}>
                <img className="card-img-top" src={tran} alt=" " style={{width:'100%'}}/>
                <div className="card-body">
                  <h4 className="card-title" style={{textAlign:'center'}}>Walter White</h4>
                  <p className="card-text" style={{textAlign:'center'}}>
                    <i   >Web Devolopment</i><br/>

Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
                
          </div> 
        </div>
        </div>
        <div className="col-4 ">
            <div className="card" style={{height:'auto'}}>
                <img alt="" className="card-img-top" src={trainer}   style={{width:'100%'}}/>
                <div className="card-body">
                  <h4 className="card-title" style={{textAlign:'center'}}> Sarah Jhinson</h4>
                  <p className="card-text" style={{textAlign:'center'}}>  <i>   Marketing</i><br/>

Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
   
          </div> 
        </div>
        </div>
        <div className="col-4 ">
            <div className="card" style={{height:'auto'}}>
                <img className="card-img-top" src={boy} alt="" style={{width:'100%'}}/>
                <div className="card-body">
                  <h4 className="card-title" style={{textAlign:'center'}}>  William Anderson</h4>
                  <p className="card-text" style={{textAlign:'center'}}>  <i> Content</i><br/>

Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
   
          </div> 
        </div>
        </div>
        
        </div>
        </div>
  </div>
  )
}
export default    Trainers;