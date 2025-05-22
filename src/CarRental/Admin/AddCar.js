import axios from 'axios'
import React, { useState } from 'react'

const AddCar = () => {
  const [carDetails, setCarDetails] = useState({
    name: '',
    model: '',
    description: '',
    price: '',
    seater: '',
    category: '',
  }) 
  const submitHandler = (e) => {
    e.preventDefault()

    const nameError = document.getElementById('nameError')
    const modelError = document.getElementById('modelError')
    const descriptionError = document.getElementById('descriptionError')
    const priceError = document.getElementById('priceError')
    const seaterError = document.getElementById('seaterError')
    const categoryError = document.getElementById('categoryError')
    const alphaExp = /^[a-za-z\s]+$/
    const numExp = /^[0-9]+$/
    const { name, model, description, price, seater, category } = carDetails
    let nameStatus = false
    let modelStatus = false
    let descriptionStatus = false
    let priceStatus = false
    let seaterStatus = false
    let categoryStatus = false

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

    // Model Validation
    if (model === '') {
      modelError.textContent = 'Model is Mandatory'
    } else {
      if (model.match(numExp)) {
        modelError.textContent = ''
        modelStatus = true
      } else {
        modelError.textContent = 'Model should contain only numbers'
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

    //Seater Validation
    if (seater === '') {
      seaterError.textContent = 'Seater is Mandatory'
    } else {
      if (seater.match(numExp)) {
        seaterError.textContent = ''
        seaterStatus = true
      } else {
        seaterError.textContent = 'Seater should contain only numbers'
      }
    }

    // Category Validation
    if (category === '') {
      categoryError.textContent = 'Category is Mandatory'
    } else {
      if (category.match(alphaExp)) {
        categoryError.textContent = ''
        categoryStatus = true
      } else {
        categoryError.textContent = 'Category should contain only alphabets'
      }
    }

    //Submitting into API
    if (
      nameStatus &&
      modelStatus &&
      descriptionStatus &&
      priceStatus &&
      seaterStatus &&
      categoryStatus
    ) {
      // API Call
      axios
        .post(`https://carrental-server-live.onrender.com/cars`, carDetails)
        .then(() => alert('Your Car Details Sent'))
        .catch((error) => console.error(error))
    }
  }
  const updateState = (e) => {
    setCarDetails({ ...carDetails, [e.target.name]: e.target.value })
  }
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="name"
        onChange={updateState}
        placeholder="Enter Car Name"
        className="form-control mb-3"
      />
      <p id="nameError"></p>
      <input
        type="text"
        name="model"
        onChange={updateState}
        placeholder="Enter Car Model"
        className="form-control mb-3"
      />
      <p id="modelError"></p>
      <input
        type="text"
        name="description"
        onChange={updateState}
        placeholder="Enter Car Description"
        className="form-control mb-3"
      />
      <p id="descriptionError"></p>
      <input
        type="text"
        name="price"
        onChange={updateState}
        placeholder="Enter Car Price"
        className="form-control mb-3"
      />
      <p id="priceError"></p>
      <input
        type="text"
        name="seater"
        onChange={updateState}
        placeholder="Number of seats"
        className="form-control mb-3"
      />
      <p id="seaterError"></p>
      <input
        type="text"
        name="category"
        onChange={updateState}
        placeholder="Enter Car Category"
        className="form-control mb-3"
      />
      <p id="categoryError"></p>
      <input type="submit" className="form-control mb-3" />
    </form>
  )
}

export default AddCar
