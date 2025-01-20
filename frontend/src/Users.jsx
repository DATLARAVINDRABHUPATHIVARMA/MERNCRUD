import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [users, SetUsers] = useState([]);

  useEffect(() => { 
    axios.get('http://localhost:3001')
    .then(result => SetUsers(result.data))
    .catch(err => console.log(err))
  }, [])

  const handleDelete = (id) => {
    axios.delete('http://localhost:3001/deleteUser/'+id)
    .then(res => {console.log(res)
      window.location.reload()
    })
    .catch(err => console.log(err))
  }
  return (
    <div className="d-flex vh-full bg-primary justify-content-center align-items-center">
      <div className="w-80 bg-white rounded p-3">
        <Link to="/create" className="btn btn-success">
          Add +
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Country</th>
              <th>Skill</th>
              <th>Base Price</th>
              <th>Final Price</th>
              <th>Status</th>
              <th>Team</th>
              <th>Year</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr>
                  <td>{user.name}</td>
                  <td>{user.country}</td>
                  <td>{user.skill}</td>
                  <td>{user.baseprice}</td>
                  <td>{user.finalprice}</td>
                  <td>{user.status}</td>
                  <td>{user.team}</td>
                  <td>{user.year}</td>
                  <td>
                    <Link to={`/update/${user._id}`} className="btn btn-primary">
                      Update
                    </Link>
                    <button className="btn btn-danger" onClick={(e) =>  handleDelete(user._id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
