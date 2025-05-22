import React, { useContext, useEffect } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { loginStatus } from '../../App'
import AdminLogin from './AdminLogin'
import axios from 'axios'

const Dashboard = () => {
  
  const navigate = useNavigate()
  const [token, setToken] = useContext(loginStatus)
  useEffect(() => {
      axios.get('https://carrental-server-live.onrender.com/dashboard', {
        headers: {
          "x-auth-token": token,
        }
      })
      .then((res) => {
        console.log(res.data)
      })
    }, []
  )
  if (!token) {
    navigate('/admin')
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <aside className="col-lg-3">
          <NavLink to={``}>
            <button className="btn">Admin Dashboard</button>
          </NavLink>
          <NavLink to={'addCar'}>
            <button>Add Car</button>
          </NavLink>
          <NavLink to={'viewCars'}>
            <button>View Cars</button>
          </NavLink>
          <NavLink to={'addService'}>
            <button>Add Services</button>
          </NavLink>
          <NavLink to={'viewServices'}>
            <button>View Services</button>
          </NavLink>
          <NavLink to={'viewEnquiries'}>
            <button>View Enquiries</button>
          </NavLink>
          <button onClick={() => setToken("")}>Logout</button>
        </aside>
        <div className="col-lg-9 d-flex justify-content-center align-items-center">
          <Outlet />
        </div>
      </div>
    </div>
  )
  // } else {
  //   return <AdminLogin />
  // }
}

export default Dashboard




// import React, { useContext, useEffect } from 'react'
// import { NavLink, Outlet, useNavigate } from 'react-router-dom'
// import { loginStatus } from '../../App'
// import AdminLogin from './AdminLogin'

// const Dashboard = () => {
  
  
//   const [login, setLogin] = useContext(loginStatus)
  
//   if (login) {
//     return (
//       <div className="container-fluid">
//         <div className="row">
//           <aside className="col-lg-3">
//             <NavLink to={``}>
//               <button className="btn">Admin Dashboard</button>
//             </NavLink>
//             <NavLink to={'addCar'}>
//               <button>Add Car</button>
//             </NavLink>
//             <NavLink to={'viewCars'}>
//               <button>View Cars</button>
//             </NavLink>
//             <NavLink to={'addService'}>
//               <button>Add Services</button>
//             </NavLink>
//             <NavLink to={'viewServices'}>
//               <button>View Services</button>
//             </NavLink>
//             <NavLink to={'viewEnquiries'}>
//               <button>View Enquiries</button>
//             </NavLink>
//           </aside>
//           <div className="col-lg-9 d-flex justify-content-center align-items-center">
//             <Outlet />
//           </div>
//         </div>
//       </div>
//     )
//   } else {
//     return <AdminLogin />
//   }
// }

// export default Dashboard
