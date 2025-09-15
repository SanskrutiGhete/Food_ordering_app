import React from 'react'
import '../Css/Aboutpages2.css'
const Aboutpages2 = () => {
  return (
    <>
        <div className='container-fluid mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <img className='img-fluid' src="img3.png" alt="" />
                </div>
                <div className='hero col-6 mt-5'>

                    <div className='mt-5'>
                        <span>About Our Restaurant</span>
                        <h1>We Provide Good Food <br />For Your Family!</h1>
                        <p>We serve fresh, delicious meals made with love. A perfect place for your family to dine together.
                            Good food creates happy moments. Enjoy warm family dining with us.</p>                    
                        <p>Our meals are prepared fresh every day to bring smiles to your family table.
                            We believe family time is best celebrated with delicious food.</p>
                        <button className='btn'>Learn More</button>

                    </div>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Aboutpages2