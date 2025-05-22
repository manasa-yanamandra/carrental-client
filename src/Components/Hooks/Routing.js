import React from 'react'
import { Route, Routes } from 'react-router-dom'
import StateEx from './StateEx.js'

const Routing = () => {
  return (
    <Routes>
      <Route path="/" Component={StateEx} />
    </Routes>
  )
}

export default Routing
