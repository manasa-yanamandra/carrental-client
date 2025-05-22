import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Cars = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios
      .get(`https://carrental-server-live.onrender.com/cars`)
      .then((res) => setData(res.data.result))
      .catch((err) => console.log(err))
  })
  return (
    <section className="container p-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold text-primary">
          Choose Your Ride from {data.length}+ cars
        </h2>
        <p className="text-muted">
          Find the perfect car for your journey from our diverse fleet.
        </p>
        <div className="row">
          {data.map((car) => {
            return (
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">{car.name}</h5>
                    <p className="card-text">{car.price}/- Only Per Day</p>
                    <NavLink to={`/carDetails/${car._id}`}>
                      <button className="btn btn-primary">Know More</button>
                    </NavLink>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Cars
