import React from 'react'
import '../Css/Home.css'
import Aboutpages4 from '../pages/Aboutpages4'
import Menupages1 from '../pages/Menupages1'
import Aboutpages2 from '../pages/Aboutpages2'
import Aboutpages3 from '../pages/Aboutpages3'
import Aboutpages6 from '../pages/Aboutpages6'

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row" >
          <div className="col-12">
            <div className='HomeSection'>
              <span>Discover Your Taste</span>
              <h1>We Believe Good Food
                <br /> Offer Great Smile</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam suscipit quo repellat?</p>
              <button className='btn'>Reservation</button>
            </div>
          </div>
        </div>
      </div>

      <Aboutpages4/>
      <Menupages1/>
      <Aboutpages2/>
      <Aboutpages3/>
      <Aboutpages6/>

    </>
  )
}

export default Home