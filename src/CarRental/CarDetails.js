import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SendEnquiry from './SendEnquiry'

const CarDetails = () => {
  const { _id } = useParams()
  const [car, setCar] = useState({})
  useEffect(() => {
    axios
      .get(`https://carrental-server-live.onrender.com/cars/${_id}`)
      .then((res) => setCar(res.data))
      .catch((err) => console.error(err))
  })
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-lg-8">
          <p>{car.model} Model</p>
          <h1>{car.name}</h1>
          <p>Price Per Day: {car.price}/- Only</p>
          <p>{car.description}</p>
          <p>
            <button className="btn btn-primary me-3">
              {car.seater} Seater
            </button>
            <button className="btn btn-danger me-3">{car.category}</button>
          </p>
        </div>
        <div className="col-lg-4">
          <SendEnquiry />
        </div>
      </div>
    </div>
  )
}

export default CarDetails
