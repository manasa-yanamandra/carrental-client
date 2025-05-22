import React, { useEffect, useState } from 'react'

const StateEx = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // alert("Rendered")
    document.title = `You Clicked ${count} times`
  })
  return (
    <div className="container p-5">
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(count - 1)}>Sub</button>
    </div>
  )
}

export default StateEx
