import React from 'react'
import '../Css/Aboutpages5.css' 

const Aboutpages5 = () => {
  return (
    <>
       <div className="container-fluid" id="head">
            <div className="row align-items-center mt-5">
                {/* Left Side - Image */}
                <div className="col-md-6 text-center">
                    {/* <img src="img2.png" alt="Restaurant" className="img-fluid" /> */}
                </div>

                {/* Right Side - Text */}
                <div className="col-md-6 text-center">
                    <span id='head1'>About Our Restaurant</span>
                    <h2 id='text'>We Provide Good Food For Your Family!</h2>
                    <p id='para'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, nesciunt?</p>
                    
                    <form action="#" className='mt-4'>
                        <div className="input-form d-flex justify-content-center">
                            <input type="text" placeholder='Your Email ' className="form-control w-50 me-2" />
                            <button className='btn1'>Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
       </div> 
    </>
  )
}

export default Aboutpages5
