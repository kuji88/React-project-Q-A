import { Button, Col, Container, Row } from 'react-bootstrap';
import './index.css'
import Qinputs from './components/Qinputs';
import Qlist from './components/Qlist';
import { Data } from './Data';
import { useState } from 'react';

function App() {
    const [sData,setData]= useState(Data)

    const changeData=()=>{
      setData([...Data])
      
    }

    const deleteAll=() =>{
      Data.splice(0,Data.length)
      setData([])
    }

  return (
    <div className='font'>
    <Container>
      <Row className='my-5'> 
        <Col sm="3" className=''>
          <h2>The Questions</h2>
        </Col>
        <Col sm="9">
          <Qinputs onAdd={changeData}/>

          <Qlist lData={Data}/>
          {sData.length >=1 ?  <Button onClick={deleteAll} variant='danger' className='my-3 w-100'>Delete All</Button>:null}
        </Col>

      </Row>
      </Container>
    </div>
  );
}

export default App;
