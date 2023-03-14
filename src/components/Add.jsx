import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';



const Add = () => {
  const [id,setId] = useState('')
  const [empName,setName] = useState('')
  const [empAge,setAge] = useState('')
  const [empDesg,setDesg] = useState('')
  const [empSalary,setSalary] = useState(0)
  return (
    <div>
      <div className="container-fluid mt-5">
        <h1 ><i className='fa-solid fa-user-plus me-2'></i>New Employee Adding Form

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
      <div className="mt-3 mb-3 p-5 border border-primary rounded">
        <Form>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Employee Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Employee Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formAge">
            <Form.Label>Employee Age</Form.Label>
            <Form.Control type="text" placeholder="Enter Employee Age" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDesg">
            <Form.Label>Employee Designation</Form.Label>
            <Form.Control type="text" placeholder="Enter Employee Designation" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formSalary">
            <Form.Label>Employee Salary</Form.Label>
            <Form.Control type="text" placeholder="Enter Employee Salary" />
          </Form.Group>
          <Button variant="success" type="submit">
            Add
          </Button>
          <Link to={'/'}>
            <Button className='ms-3' variant="warning" type="submit">
              Close
            </Button>
            
          </Link>
        </Form>

      </div>
    </div>
  )
}

export default Add