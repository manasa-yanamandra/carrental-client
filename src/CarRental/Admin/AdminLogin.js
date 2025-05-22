// import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginStatus } from '../../App'
import axios from 'axios'

const AdminLogin = () => {
  const [details, setDetails] = useState({ email: '', password: '' })
  const [token, setToken] = useContext(loginStatus)
  const navigate = useNavigate()
  const updateDetails = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value })
  }
  const submitHandler = (e) => {
    e.preventDefault()
    console.log(details)
    const { email, password } = details
    axios
      .post('https://carrental-server-live.onrender.com/login/', { email, password })
      .then((res) => {
        setToken(res.data.token)
        console.log(res.data)
      })
      .catch((err) => console.log(err))
  }
  if (token) {
    navigate('/dashboard')
  }
  return (
    <div className="container p-5">
      <div className="col-lg-6 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Admin Login</h2>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            onChange={updateDetails}
            placeholder="email"
            name="email"
            className="form-control mb-3"
          />
          <input
            type="password"
            onChange={updateDetails}
            placeholder="Password"
            name="password"
            className="form-control mb-3"
          />
          <input type="submit" className="form-control mb-3" />
        </form>
      </div>
    </div>
  )
}

export default AdminLogin

// // import axios from 'axios'
// import React, { useContext, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { loginStatus } from '../../App'
// import axios from 'axios'

// const AdminLogin = () => {
//   const [details, setDetails] = useState({})
//   // const [login, setLogin] = useContext(loginStatus)
//   const [token, setToken] = useContext(loginStatus)
//   const navigate = useNavigate()
//   const updateDetails = (e) => {
//     setDetails({ ...details, [e.target.name]: e.target.value })
//   }
//   const submitHandler = (e) => {
//     e.preventDefault()
//     console.log(details)
//     const { email, password } = details
//     axios.post('http://localhost:5003/login/', {email, password})
//     .then((res) => setToken(res.data.token))
//     .catch((err) => console.log(err))
//     // if (email === 'manasa' && password === 'admin') {
//     //   alert('Login Successful')
//     //   setLogin(true)
//     //   navigate('/dashboard')
//     // } else {
//     //   alert('Invalid Credentials')
//     // }
//   }
//   // const [login, setLogin] = useState({
//   //   username: '',
//   //   password: '',
//   // })
//   // const submitHandler = (e) => {
//   //   e.preventDefault()

//   //   //   const usernameError = document.getElementById('usernameError')
//   //   //   const passwordError = document.getElementById('passwordError')
//   //   //   // const alphaExp = /^[a-za-z\s]+$/
//   //   //   // const numExp = /^[0-9]+$/
//   //   //   const exp = /^[0-9a-za-z\s]+$/
//   //   //   const { username, password } = login
//   //   //   let usernameStatus = false
//   //   //   let passwordStatus = false

//   //   //   //username Validation
//   //   //   if (username === '') {
//   //   //     usernameError.textContent = 'username is Mandatory'
//   //   //   } else {
//   //   //     if (username.match(exp)) {
//   //   //       usernameError.textContent = ''
//   //   //       usernameStatus = true
//   //   //     } else {
//   //   //       usernameError.textContent = 'username can contain alphabets and numbers'
//   //   //     }
//   //   //   }

//   //   //   // Password Validation
//   //   //   if (password === '') {
//   //   //     passwordError.textContent = 'password is Mandatory'
//   //   //   } else {
//   //   //     if (password.match(exp)) {
//   //   //       passwordError.textContent = ''
//   //   //       passwordStatus = true
//   //   //     } else {
//   //   //       passwordError.textContent = 'password can contain alphabets and numbers'
//   //   //     }
//   //   //   }

//   //   //   //Submitting into API
//   //   //   if (usernameStatus && passwordStatus) {
//   //   //     // API Call
//   //   //     axios
//   //   //       .post(`http://localhost:5003`, login)
//   //   //       .then(() => alert('Your Are Logged In'))
//   //   //       .catch((error) => console.error(error))
//   //   //   }
//   // }
//   // const updateState = (e) => {
//   //   setLogin({ [e.target.name]: e.target.value })
//   // }
//   return (
//     <div className="container p-5">
//       <div className="col-lg-6 mx-auto shadow p-5">
//         <h2 className="text-center mb-4">Admin Login</h2>
//         <form onSubmit={submitHandler}>
//           <input
//             type="text"
//             onChange={updateDetails}
//             placeholder="Username"
//             name="username"
//             className="form-control mb-3"
//           />
//           <input
//             type="password"
//             onChange={updateDetails}
//             placeholder="Password"
//             name="password"
//             className="form-control mb-3"
//           />
//           <input type="submit" className="form-control mb-3" />
//         </form>
//       </div>
//     </div>
//     //   <form onSubmit={submitHandler}>
//     //     <input
//     //       type="text"
//     //       name="username"
//     //       onChange={updateState}
//     //       placeholder="Enter username"
//     //       className="form-control mb-3"
//     //     />
//     //     <input
//     //       type="password"
//     //       name="password"
//     //       onChange={updateState}
//     //       placeholder="Enter password"
//     //       className="form-control mb-3"
//     //     />
//     //     <input type="submit" className="form-control mb-3" />
//     //   </form>
//   )
// }

// export default AdminLogin
