import React, { useState } from 'react'
import { Col, Row,Form,InputGroup,Button } from 'react-bootstrap'
import { Data } from '../Data'


const Qinputs = ({onAdd, noti}) => {
  const [aQ,setaQ] = useState('')
  const [aA,setaA] = useState('')

  const addNewitem=()=>{
    if(aQ === "" || aA === ""){
      return(
        noti("Please fill the bars","Error")
      )
    }
    Data.push({id:Math.random(), q:aQ ,a:aA})
    setaA('')
    setaQ('')
    onAdd();
  }


  return (

    <Row>
        <Col sm="5">
        <InputGroup className="mb-3">
        <Form.Control
          value={aQ}
          onChange={(e)=> setaQ(e.target.value)}
          placeholder="Your Question"
        />
      </InputGroup>
        </Col>

        <Col sm="5">
        <InputGroup className="mb-3">
        <Form.Control
          value={aA}
          onChange={(e)=> setaA(e.target.value)}
          placeholder="The Answer"
        />
      </InputGroup>
      </Col>

        <Col sm="2">
      <Button onClick={addNewitem} className='w-50' variant='info'>Add</Button>
      
        </Col>
    </Row>
  )
}

export default Qinputs