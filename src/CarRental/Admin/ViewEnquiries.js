import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewEnquiries = () => {
  const [enquiries, setEnquiries] = useState([])
  const [enq, setEnq] = useState({ _id: '', name: '', email: '', mobile: '' })
  useEffect(() => {
    axios
      .get('https://carrental-server-live.onrender.com/enquiries')
      .then((res) => {
        if (res.data.status) {
          setEnquiries(res.data.result)
        }
      })
      .catch((err) => console.log(err))
  })
  const getOneRecord = (eid) => {
    axios
      .get(`https://carrental-server-live.onrender.com/enquiries/${eid}`)
      .then((res) => setEnq(res.data))
      .catch((err) => console.log(err))
  }
  const deleteEnquiry = (eid) => {
    axios
      .delete(`https://carrental-server-live.onrender.com/enquiries/${eid}`)
      .then(() => alert('Enquiry Deleted'))
      .catch((err) => console.log(err))
  }
  const changeData = (e) => {
    setEnq({ ...enq, [e.target.name]: e.target.value })
  }
  const submitHandler = (e) => {
    e.preventDefault()
    console.log(enq)
    const { _id } = enq
    axios
      .put(`https://carrental-server-live.onrender.com/enquiries/${_id}`, enq)
      .then((res) => alert('Enquiry Updated'))
      .catch((err) => console.log(err))
  }
  const { name, email, mobile } = enq
  return (
    <div className="container p-5">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {enquiries.map((enquiry, index) => {
            return (
              <tr key={index}>
                <td>{enquiry.name}</td>
                <td>{enquiry.email}</td>
                <td>{enquiry.mobile}</td>
                <td>
                  <button onClick={() => getOneRecord(enquiry._id)}>
                    Edit
                  </button>
                  <button onClick={() => deleteEnquiry(enquiry._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <form onSubmit={submitHandler}>
        <input value={name} name="name" onChange={changeData} />
        <input value={email} name="email" onChange={changeData} />
        <input value={mobile} name="mobile" onChange={changeData} />
        <input type="submit" />
      </form>
    </div>
  )
}

export default ViewEnquiries
