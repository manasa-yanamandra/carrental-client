import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewCars = () => {
  const [cars, setCars] = useState([])
  const [car, setCar] = useState({ _id: '', name: '', image: '', description: '' , price: '', seater: '', category: '', model:''})
  useEffect(() => {
    axios
      .get(`https://carrental-server-live.onrender.com/cars`)
      .then((res) => {
        if (res.data.status) {
          setCars(res.data.result)
        }
      })
      .catch((err) => console.log(err))
  })
  const deleteCar = (eid) => {
    axios
      .delete(`https://carrental-server-live.onrender.com/cars/${eid}`)
      .then(() => alert('Car Deleted'))
      .catch((err) => console.log(err))
  }
  const getOneRecord = (eid) => {
    axios
      .get(`https://carrental-server-live.onrender.com/cars/${eid}`)
      .then((res) => setCar(res.data))
      .catch((err) => console.log(err))
  }

  const changeData = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value })
  }
  const submitHandler = (e) => {
    e.preventDefault()
    console.log(car)
    const { _id } = car
    axios
      .put(`https://carrental-server-live.onrender.com/cars/${_id}`, car)
      .then((res) => alert('Car Details Updated'))
      .catch((err) => console.log(err))
  }
  const { name, description, price, seater, category, model } = car

  return (
    <div className="container p-5">
      <div className="modal fade" id="update">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Update Car</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-body">
        <form onSubmit={submitHandler}>
         
          <input
            name="name"
            value={name}
            onChange={changeData}
          />
          <input
            name="description"
            value={description}
            onChange={changeData}
          />
          <input
            name="price"
            value={price}
            onChange={changeData}
          />
          <input
            name="seater"
            value={seater}
            onChange={changeData}
          />
          <input
            name="category"
            value={category}
            onChange={changeData}
          />
          <input
            name="model"
            value={model}
            onChange={changeData}
          />
          <input type="submit" data-bs-dismiss="modal" />
        </form>
      </div>
      <h1 className="text-center">View Cars</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Model</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Seater</th>
            <th scope="col">Category</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car, index) => {
            return (
              <tr key={index}>
                <td>{car.name}</td>
                <td>{car.model}</td>
                <td>{car.description}</td>
                <td>{car.price}/- Only</td>
                <td>{car.seater} Passengers</td>
                <td>{car.category}</td>
                <td>
                  <button
                    onClick={() => getOneRecord(car._id)}
                    data-bs-target="#update"
                    data-bs-toggle="modal"
                  >
                    Edit
                  </button>
                  <button onClick={() => deleteCar(car._id)}>Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ViewCars
