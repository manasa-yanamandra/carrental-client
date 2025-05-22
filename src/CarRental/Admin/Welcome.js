// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useCallApi from './CallApi'

const Welcome = () => {
  // const [cars, setCars] = useState([])
  // const [services, setServices] = useState([])
  // const [enquiries, setEnquiries] = useState([])
  const cars = useCallApi('https://carrental-server-live.onrender.com/cars')
  const services = useCallApi('https://carrental-server-live.onrender.com/services')
  const enquiries = useCallApi('https://carrental-server-live.onrender.com/enquiries')
  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:5003/cars`)
  //     .then((res) => setCars(res.data))
  //     .catch((err) => console.error(err))
  // })
  return (
    <>
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">{cars.length}+</h1>
            <h5>Cars</h5>
            <Link to="viewCars">
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">{services.length}+</h1>
            <h5>Services</h5>
            <Link to="viewServices">
              <button className="btn btn-primary">View Services</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">{enquiries.length}+</h1>
            <h5>Enquiries</h5>
            <Link to="viewEnquiries">
              <button className="btn btn-primary">View Enquiries</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Welcome
