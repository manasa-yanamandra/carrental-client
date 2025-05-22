import React, { Fragment } from 'react'

function SampleFunction(props) {
  return (
    // <div>
    //   {/* <h1>Welcome to Functional Component</h1> */}
    //   <h1>Welcome to React</h1>
    //   <p>Designed and developed by Manasa</p>
    // </div>

    //inside div we will have number of divisions, we want the output but we don't want the unnecessary div's. So, we can use the concept called fragment or <>
    // <div>
    //   <h1>Welcome to React</h1>
    //   <p>Designed and developed by Manasa</p>
    // </div>

    //Fragment lets you group elements without a wrapper node i.e., without any unnecessary parent node we can group it
    // <Fragment>
    //   <h1>Welcome to React</h1>
    //   <p>Designed and developed by Manasa</p>
    // </Fragment>

    <>
      <h1>Welcome to React: {props.name}</h1>
      {/* use props.name in curlies or else it will display in the browser as props.name (as it is). If we want to give javascript logic ((or) js code) inside jsx, we have to use expression (curly brackets) */}
      <p>Designed and developed by Manasa</p>
    </>
  )
}

export default SampleFunction
