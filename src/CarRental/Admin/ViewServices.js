import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewServices = () => {
  const [services, setServices] = useState([])
  const [ser, setSer] = useState({
    _id: '',
    name: '',
    description: '',
    price: '',
  })
  useEffect(() => {
    axios
      .get(`https://carrental-server-live.onrender.com/services`)
      .then((res) => {
        if (res.data.status) {
          setServices(res.data.result)
        }
      })
      .catch((err) => console.log(err))
  })
  const deleteServices = (eid) => {
    axios
      .delete(`https://carrental-server-live.onrender.com/services/${eid}`)
      .then(() => alert('Service Deleted'))
      .catch((err) => console.log(err))
  }
  const getOneRecord = (eid) => {
    axios
      .get(`https://carrental-server-live.onrender.com/services/${eid}`)
      .then((res) => setSer(res.data))
      .catch((err) => console.log(err))
  }
  const changeData = (e) => {
    setSer({ ...ser, [e.target.name]: e.target.value })
  }
  const submitHandler = (e) => {
    e.preventDefault()
    console.log(ser)
    const { _id } = ser
    axios
      .put(`https://carrental-server-live.onrender.com/services/${_id}`, ser)
      .then((res) => alert('Service Updated'))
      .catch((err) => console.log(err))
  }
  const { name, description, price } = ser
  return (
    <div className="container p-5">
      <div className="modal fade" id="updated">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Update Service</h5>
            </div>
            <div className="modal-body">
              <form onSubmit={submitHandler}>
                <input name="name" value={name} onChange={changeData} />
                <input
                  name="description"
                  value={description}
                  onChange={changeData}
                />
                <input name="price" value={price} onChange={changeData} />
                <input type="submit" data-bs-dismiss="modal" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-center">View Services</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service, index) => {
            return (
              <tr key={index}>
                <td>{service.name}</td>
                <td>{service.description}</td>
                <td>{service.price}/- Only</td>
                <td>
                  <button
                    onClick={() => getOneRecord(service._id)}
                    data-bs-target="#updated"
                    data-bs-toggle="modal"
                  >
                    Edit
                  </button>
                  <button onClick={() => deleteServices(service._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ViewServices
