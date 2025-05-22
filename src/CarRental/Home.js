import React from 'react'
import banner from './banner.jpg'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <section className="container p-5">
      <div className="row">
        <div className="col-lg-6">
          <h1>
            <br></br>
            <br></br>
            Find Your Perfect Ride, Anytime & Anywhere!</h1>
          <p>
            <br></br>
            At CarRental, we make renting a car simple, affordable, and
            stress-free. Whether you're exploring a new city, going on a road
            trip, or need a reliable vehicle for an event, we've got the perfect
            car waiting for you.
          </p>
          <br></br>
          <NavLink to="/about">
            <button className="btn btn-outline-primary me-3">Know More</button>
          </NavLink>
          <NavLink to="/contact">
            <button className="btn btn-success">Book a Car</button>
          </NavLink>
        </div>
        <div className="col-lg-6">
          <br></br>
          <br></br>
          <br></br>
          <img src={banner} alt="" className="w-100 banner" />
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    </section>
  )
}

export default Home
