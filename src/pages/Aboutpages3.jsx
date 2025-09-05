import React from 'react'
import '../Css/Aboutpages3.css'   // ✅ Correct import

const Aboutpages3 = () => {
  return (
    <>
      <div className="container-fluid mt-5" id='sanskruti'>
        <div className="row">
            <div className='col-12 text-center mt-5'>
                {/* <img className='img-fluid' src="img4.png" alt="About" /> */}
                <span className='text'>About Our Restaurant</span>
                <h2 className='heading'>Book A Table</h2>
            </div>
        </div>

        <div className='row justify-content-center mt-4'>
            <div className="col-lg-10">
                <div className="p-4 shadow rounded bg-white">
                    <form className='row g-3 align-items-center'>
                        <div className="row justify-content-center mt-4">
                            <div className="col-lg-10">
                                <div className="row g-3 align-items-center">
                                    {/* Dropdown */}
                                    <div className="col-md-3">
                                        <div className="input-group">
                                            <span className="input-group-text">
                                                <i className="bi bi-person"></i>
                                            </span>
                                            <select className="form-select">
                                                <option>Person</option>
                                                <option>1 Person</option>
                                                <option>2 Person</option>
                                                <option>3 Person</option>
                                                <option>4 Person</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Date */}
                                    <div className="col-md-3">
                                        <div className="input-group">
                                            <span className="input-group-text">
                                                <i className="bi bi-calender"></i>
                                            </span>
                                            <input type="date" className='form-control' />
                                        </div>
                                    </div>

                                    {/* Time Input */}
                                    <div className="col-md-3">
                                        <div className="input-group">
                                           <span>
                                                <i className="bi bi-clock"></i>
                                            </span>
                                            <input type="time" className='form-control'/>
                                        </div>
                                    </div>

                                    {/* Button */}

                                    <div className="col-md-3 d-grid">
                                        <button type='submit' className='btn-btn'>
                                            Book Now
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>


      </div>
    </>
  )
}

export default Aboutpages3
