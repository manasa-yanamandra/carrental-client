// import React from 'react'

// const MovieEx = () => {
//   return (
//     // <div>MovieEx</div>
//     <div classname="movie">
//       <figure>
//         <img
//           src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/chhaava-et00408691-1737623374.jpg"
//           alt=""
//         />
//         <figcaption>
//           <h3>Chavva</h3>
//           <p>Action / Drama</p>
//         </figcaption>
//       </figure>
//     </div>
//   )
// }

// export default MovieEx

import React from 'react'

const MovieEx = (props) => {
  return (
    // <div>MovieEx</div>
    <div className="movie">
      <figure>
        <img src={props.path} alt="" />
        <figcaption>
          <h3>{props.title}</h3>
          <p>{props.category}</p>
        </figcaption>
      </figure>
    </div>
  )
}

export default MovieEx
