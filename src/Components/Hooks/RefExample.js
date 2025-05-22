import React, { useEffect, useRef } from 'react'

const RefExample = () => {
  const qty = useRef()
  const increment = () => {
    qty.current.value++
    qty.current.focus()
  }
  useEffect(() => {
    alert('Executed')
  })
  return (
    <div className="container p-5">
      <h1 className="text-center">React Refs</h1>
      <input ref={qty} placeholder="No of Items" />
      <button onClick={increment}>+</button>
    </div>
  )
}

export default RefExample
