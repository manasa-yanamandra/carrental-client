import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Services = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios
      .get(`https://carrental-server-live.onrender.com/services`)
      .then((res) => setData(res.data.result))
      .catch((err) => console.log(err))
  })
  return (
    <section className="container p-5">
      <h2 className="text-center fw-bold">Our Services</h2>
      <p className="text-center text-muted">
        Explore our car rental services designed to meet you travel needs.
      </p>
      <div className="row">
        {data.map((ser) => {
          return (
            <div className="col-md-6 mb-4 col-lg-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{ser.name}</h5>
                  <p className="card-text">{ser.description}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Services
