import React from 'react'
import '../Css/Menupages1.css'

const Menupages1 = () => {
  return (
    <>
      <div className="container-fluid">
        {/* ---- Heading Section ---- */}
        <div className="row text-center mb-4">
          <div className="col-12">
            <span className="head1">Our Offered Menu</span>
            <br />
            <h2 className="text">
              Some Trendy And Popular <br /> Dishes Offered
            </h2>
          </div>

          <div className="col-3">
            <a href="/" id="special">Special</a>
          </div>
          <div className="col-3">
            <a href="/" id="lunch">Lunch</a>
          </div>
          <div className="col-3">
            <a href="/" id="breakfast">Breakfast</a>
          </div>
          <div className="col-3">
            <a href="/" id="dinner">Dinner</a>
          </div>
        </div>

        {/* ---- Images Section ---- */}
        <div className="row g-4">
          <div className="col-md-3">
            <img src="./img6.png" alt="Dish 1" className="" />
          </div>
          <div className="col-md-3">
            <img src="./img7.png" alt="Dish 2" className=""  />
          </div>
          <div className="col-md-3">
            <img src="./img8.png" alt="Dish 3" className="" />
          </div>
          <div className="col-md-3">
            <img src="./img9.png" alt="Dish 4" className="" />
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Menupages1
