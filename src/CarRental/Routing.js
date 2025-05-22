import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Cars from './Cars'
import Services from './Services'
import Contact from './Contact'
import NoPage from './NoPage'
import AdminLogin from './Admin/AdminLogin'
import Dashboard from './Admin/Dashboard'
import Welcome from './Admin/Welcome'
import AddCar from './Admin/AddCar'
import ViewCars from './Admin/ViewCars'
import AddService from './Admin/AddService'
import ViewServices from './Admin/ViewServices'
import ViewEnquiries from './Admin/ViewEnquiries'
import CarDetails from './CarDetails'

const Routing = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/about" Component={About} />
      <Route path="/cars" Component={Cars} />
      <Route path="/carDetails/:_id" Component={CarDetails} />
      <Route path="/services" Component={Services} />
      <Route path="/contact" Component={Contact} />
      <Route path="/admin" Component={AdminLogin} />
      <Route path="/dashboard" Component={Dashboard}>
        <Route path="" Component={Welcome} />
        <Route path="addCar" Component={AddCar} />
        <Route path="viewCars" Component={ViewCars} />
        <Route path="addService" Component={AddService} />
        <Route path="viewServices" Component={ViewServices} />
        <Route path="viewEnquiries" Component={ViewEnquiries} />
      </Route>
      <Route path="*" Component={NoPage} />
    </Routes>
  )
}

export default Routing
