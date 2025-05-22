import axios from 'axios'
import React, { useState } from 'react'

const AddService = () => {
  const [serviceDetails, setServiceDetails] = useState({
    // id: '',
    name: '',
    description: '',
    price: '',
  })
  const submitHandler = (e) => {
    e.preventDefault()

    // const idError = document.getElementById('idError')
    const nameError = document.getElementById('nameError')
    const descriptionError = document.getElementById('descriptionError')
    const priceError = document.getElementById('priceError')
    const alphaExp = /^[a-za-z\s]+$/
    const numExp = /^[0-9]+$/
    const { name, description, price } = serviceDetails
    // let idStatus = false
    let nameStatus = false
    let descriptionStatus = false
    let priceStatus = false

    // //Id Validation
    // if (id === '') {
    //   idError.textContent = 'Id is Mandatory'
    // } else {
    //   if (id.match(Exp - combination of num and alpha expression)) {
    //     idError.textContent = ''
    //     idStatus = true
    //   } else {
    //     idError.textContent = 'Id can contain alphabets and numbers'
    //   }
    // }

    //Name Validation
    if (name === '') {
      nameError.textContent = 'Name is Mandatory'
    } else {
      if (name.match(alphaExp)) {
        nameError.textContent = ''
        nameStatus = true
      } else {
        nameError.textContent = 'Name should contain only alphabets'
      }
    }

    // Description Validation
    if (description === '') {
      descriptionError.textContent = 'Description is Mandatory'
    } else {
      if (description.match(alphaExp)) {
        descriptionError.textContent = ''
        descriptionStatus = true
      } else {
        descriptionError.textContent =
          'Description should contain only alphabets'
      }
    }

    // Price Validation
    if (price === '') {
      priceError.textContent = 'Price is Mandatory'
    } else {
      if (price.match(numExp)) {
        priceError.textContent = ''
        priceStatus = true
      } else {
        priceError.textContent = 'Price should contain only numbers'
      }
    }

    //Submitting into API
    if (nameStatus && descriptionStatus && priceStatus) {
      // API Call
      axios
        .post(`https://carrental-server-live.onrender.com/services`, serviceDetails)
        .then(() => alert('Your Service Details Sent'))
        .catch((error) => console.error(error))
    }
  }

  const updateState = (e) => {
    setServiceDetails({ ...serviceDetails, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="name"
        onChange={updateState}
        placeholder="Enter Service Name"
        className="form-control mb-3"
      />
      <p id="nameError"></p>
      <input
        type="text"
        name="description"
        onChange={updateState}
        placeholder="Enter Service Description"
        className="form-control mb-3"
      />
      <p id="descriptionError"></p>
      <input
        type="text"
        name="price"
        onChange={updateState}
        placeholder="Enter Service Price"
        className="form-control mb-3"
      />
      <p id="priceError"></p>
      <input type="submit" className="form-control mb-3" />
    </form>
  )
}
export default AddService
