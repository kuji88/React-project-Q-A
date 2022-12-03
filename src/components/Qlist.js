import React from 'react'
import { Row, Accordion, Button } from 'react-bootstrap'

const Qlist = ({lData}) => {
  

  return (
    <Row>
        {
          lData.length >=1 ? (lData.map((item,index)=>{
        return (
          <Accordion className='my-2' key={index} defaultActiveKey="0">
        <Accordion.Item eventKey="0">
        <Accordion.Header>{item.q}</Accordion.Header>
        <Accordion.Body >
        <div className='d-flex justify-content-between'>
        <div className='d-inline my-2 '>{item.a}</div>
        <Button variant='info'>Delete</Button>
        </div>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
      )
          })) : <h1 className='text-center p-4'>There is no any Questions</h1>
        }
    </Row>
  )
}

export default Qlist