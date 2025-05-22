import axios from 'axios'
import React, { useState } from 'react'

const SendEnquiry = () => {
  const [details, setDetails] = useState({ name: '', mobile: '', email: '' })

  const submitHandler = (e) => {
    e.preventDefault()
    axios
      .post('https://carrental-server-live.onrender.com/enquiries', details)
      .then((res) => alert('Enquiry Sent'))
  }

  const updateState = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="name"
        onChange={updateState}
        placeholder="Enter Name"
        className="form-control mb-3"
      />

      <input
        type="text"
        name="mobile"
        onChange={updateState}
        placeholder="Mobile Number"
        className="form-control mb-3"
      />
      <input
        type="text"
        name="email"
        onChange={updateState}
        placeholder="Email"
        className="form-control mb-3"
      />

      <input type="submit" className="form-control mb-3" />
    </form>
  )
}

export default SendEnquiry
