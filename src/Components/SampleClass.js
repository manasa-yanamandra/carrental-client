import React, { Component } from 'react'

class SampleClass extends Component {
  //component is the parent class name; sampleclass is the derived class name
  //render() -- method overwriting called render method as we can't return inside class. we use this method in the pre-defined methods. This is writing only but not calling/printing. We are doing method over-riding.That method is already available in the component but again i'm writing in the render.
  render() {
    //render method is rendering the output in the browser
    return <h1>Welcome to React Class Component {this.props.name}</h1>
    //its not a function component to hold somewhere. To access name we use this.props; Props is a pre-defined one, accessing the value (name).
  }
}

export default SampleClass
