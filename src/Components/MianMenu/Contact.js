import React from "react";
import sai from '../../Assets/Images/sai.png'
function   Contact()
{
  return( <div>
   
<div className="head">
   <h1>Contact Us</h1>
    <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. 
      Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis
       ipsam aperiam consequatur laboriosam nemo harum praesentium.</p>
   </div>
   <iframe   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.377798921189!2d78.38050331456026!3d17.44162253804611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93506d39cf27%3A0xbdf2238313a32ace!2sNasuja%20building!5e0!3m2!1sen!2sin!4v1655966411114!5m2!1sen!2sin" style={{width:'100%', height:'600px', border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="sai"></iframe>
  
  
  
  
   
<section className=" container-fluidmb-4">

 
    <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
    
    <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>

    <div className="row">

        
        <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

               
                <div className="row">

                 
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="text" id="name" name="name" className="form-control"/>
                            <label for="name" className="">Your name</label>
                        </div>
                    </div>
                  

                    
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="text" id="email" name="email" className="form-control"/>
                            <label for="email" className="">Your email</label>
                        </div>
                    </div>
                

                </div>
                 
                <div className="row">
                    <div className="col-md-12">
                        <div className="md-form mb-0">
                            <input type="text" id="subject" name="subject" className="form-control"/>
                            <label for="subject" className="">Subject</label>
                        </div>
                    </div>
                </div>
            
                <div className="row">

                    
                    <div className="col-md-12">

                        <div className="md-form">
                            <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                            <label for="message">Your message</label>
                        </div>

                    </div>
                </div>
      

            </form>

            <div className="text-center text-md-left">
                <a  href="#pic"  className="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
            </div>
            <div className="status"></div>
        </div>
         
        <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
                <li><i className="fas fa-map-marker-alt fa-2x"></i>
                    <p>San Francisco, CA 94126, USA</p>
                </li>

                <li> <img  alt="" style={{width:'25%'}} src={sai} />
                    <p>+ 01 234 567 89</p>
                </li>

                <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                    <p>contact@mdbootstrap.com</p>
                </li>
            </ul>
        </div>
        

    </div>

</section>
 
  
  </div>)
}
export default Contact;