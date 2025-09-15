import React from 'react'
import '../Css/Aboutpages6.css'

const Aboutpages6 = () => {
  return (
    <>
      <div className="container-fluid about-section py-5">
        {/* ---- Heading Section ---- */}
        <div className="row text-center mb-5">
          <div className="col-12">
            <span className="head">About Our Restaurant</span>
            <br />
            <h2 className="text">We Provide Good Food For Your Family</h2>
          </div>
        </div>

        {/* ---- Services Section ---- */}
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm border-0 p-4">
              <span className="icon mb-3"></span>
              <a href="#" className="title text-decoration-none">Best Chef</a>
              <p className="text2 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis architecto amet impedit?
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm border-0 p-4">
              <span className="icon mb-3"></span>
              <a href="#" className="title text-decoration-none">Quality Food</a>
              <p className="text2 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aperiam corporis sapiente.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm border-0 p-4">
              <span className="icon mb-3"></span>
              <a href="#" className="title text-decoration-none">Perfect Cook</a>
              <p className="text2 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aperiam corporis sapiente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Aboutpages6
