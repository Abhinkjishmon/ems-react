import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';


const Admin = () => {
  const [allEmployees,setAllEmployees] = useState([])

  const fetchData = async ()=>{
    const result = await axios.get('http://localhost:8000/get-all-employees')
    // console.log(result.data.employees)
    setAllEmployees(result.data.employees);
  }
  console.log(allEmployees);
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div>
      <div className="container-fluid mt-5">
        <h1 ><i className='fa-solid fa-user-group'></i>Employee Management App
          <a className='btn btn-success ms-5'><i className='fa-solid fa-user-plus me-2'></i> Add Employee</a>
        </h1>
        <p style={{ textAlign: 'justify' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
          ea officia. Aut laboriosam ipsa, alias debitis facere quasi iusto
          ut consequuntur sequi laudantium adipisci placeat, quod beatae fugit
          odit consectetur ea impedit doloribus quidem quae ducimus! Molestiae
          doloremque nam recusandae, et praesentium, nostrum, debitis odio ducimus
          beatae officiis quidem ex.Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
          ea officia. Aut laboriosam ipsa, alias debitis facere quasi iusto
          ut consequuntur sequi laudantium adipisci placeat, quod beatae fugit
          odit consectetur ea impedit doloribus quidem quae ducimus! Molestiae
          doloremque nam recusandae, et praesentium, nostrum, debitis odio ducimus
          beatae officiis quidem ex.
        </p>
      </div>
      {/* table design */}
      <div className="container mt-2 mb-2">
        <h1 className='text-primary mb-3'>Employee Details</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Age</th>
              <th>Designation</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>34</td>
              <td>Developer</td>
              <td>67000</td>
              <td>
                <button className='btn btn-warning me-3'><i className='fa-solid fa-pen'></i></button>
                <button className='btn btn-danger me-3'><i className='fa-solid fa-trash'></i></button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>

    </div>
  )
}

export default Admin