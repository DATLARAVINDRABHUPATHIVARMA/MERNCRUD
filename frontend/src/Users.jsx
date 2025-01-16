import React, {useState}  from 'react';
import { Link } from 'react-router-dom';

function Users() {
  const [users, SetUsers] = useState([{
    Name:'Gita', Email:'abc@gmail.com', Age:23 
  },
{Name:'jai', Email:'jai@gmail.com', Age:13}])
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <Link to='/create' className='btn btn-success'>Add +</Link>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            { 
              users.map((user) => {
                return <tr>
                  <td>{user.Name}</td>
                  <td>{user.Email}</td>
                  <td>{user.Age}</td>
                  <td>
                  <Link to='/update' className='btn btn-primary'>Update</Link>
                    <button>Delete</button>
                  </td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users;
