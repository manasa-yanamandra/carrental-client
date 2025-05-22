import React, { createContext, useState } from 'react'
import Comp1 from './Comp1'
// import Comp3 from './Comp3'

export const userData = createContext()

const MainComp = () => {
  const [count, setCount] = useState(0)
  return (
    <div className="container p-5">
      <userData.Provider value={[count, setCount]}>
        <h1>Main Comp</h1>
        <h1>Counter : {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        {/* <Comp3 count={count} /> */}
        <Comp1 />
      </userData.Provider>
    </div>
  )
}

export default MainComp
