import React from 'react'
import { Row, Accordion, Button } from 'react-bootstrap'
import { Data } from '../Data'

const Qlist = ({lData, deleteOne}) => {
  const jData= JSON.parse(localStorage.getItem("items"))

  const onDleteitem= (ID)=>{
    if(localStorage.getItem("items") != null){
      const index = Data.findIndex((item)=> item.id === ID)
      Data.splice(index,1)
      deleteOne(Data)
    }

  }
  

  return (
    <Row>
        {
          localStorage.getItem("items") != null ? (jData.map((item,index)=>{
        return (
          <Accordion className='my-2' key={index} defaultActiveKey="0">
        <Accordion.Item eventKey={item.id}>
        <Accordion.Header>{item.q}</Accordion.Header>
        <Accordion.Body >
        <div className='d-flex justify-content-between'>
        <div className='d-inline my-2 '>{item.a}</div>
        <Button onClick={()=> onDleteitem(item.id)} variant='info'>Delete</Button>
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