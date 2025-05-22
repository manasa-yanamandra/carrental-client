import axios from 'axios'
import React, { useEffect, useState } from 'react'

const SampleRead = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        // console.log(res.data)
        setUsers(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  })
  return (
    <div className="container p-5">
      <h1>Users : {users.length}</h1>
      {/* <ol>
        {users.map((user, index) => {
          return <li key={index}>{user.name}</li>
        })}
      </ol> */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.address.city}</td>
                <td>{user.company.name}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default SampleRead
