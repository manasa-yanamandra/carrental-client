import React from 'react'
import { connect } from 'react-redux'
import buyMobile from './MobileAction'

const MobileContainer = (props) => {
  return (
    <div className='container p-5'>
      <h1>No of Mobiles : {props.mobiles}</h1>
      <p> {props.mobiles > 5 ? "Available": props.mobiles === 0 ? "Out of Stock" : "Limited Stock"}</p>
      <button disabled={props.mobiles === 0 ? true : false} onClick={props.buyMobile}>Buy Mobile</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    mobiles: state.mobiles
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyMobile: () => dispatch(buyMobile())
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (MobileContainer)

// export default MobileContainer