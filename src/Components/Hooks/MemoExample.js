import React, { useCallback, useMemo, useState } from 'react'

const MemoExample = () => {
  const [count, setCount] = useState(0)
  const [number, SetNumber] = useState(4)
  const result = useMemo(() => {
    return Mul(number)
  }, [number])

  const add = useCallback(() => {
    SetNumber(number + 1)
  })
  return (
    <div className="container p-5">
      <h1>Counter : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <h1>Result : {result}</h1>
      <button onClick={add}>Add</button>
    </div>
  )
}
const Mul = (num) => {
  console.log('Function Executed')
  return num * num
}

export default MemoExample
