import { Button, Col, Container, Row } from 'react-bootstrap';
import './index.css'
import Qinputs from './components/Qinputs';
import Qlist from './components/Qlist';
import { Data } from './Data';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const [sData,setData]= useState(Data)

    const changeData=()=>{
      localStorage.setItem("items",JSON.stringify([...Data]))
      setData([...Data])
      notify("Question added","info")
      
    }

    const deleteAll=() =>{
      localStorage.removeItem("items")
      Data.splice(0,Data.length)
      setData([])
      notify("Questions deleted","Error")
    }

    const deleteOneitem=(items) =>{
      localStorage.setItem("items",JSON.stringify([...items]))
      setData([...items])
      if(items.length <= 0){
        deleteAll()
      }
      notify("Question deleted","info")
    }
    const notify = (message,type) => {
      if(type==="info"){
        toast.info(message)
      }
      if(type==="Error"){
        toast.error(message)
      }
    };


  return (
    <div className='font'>
    <Container>
      <Row className='my-5'> 
        <Col sm="3" className=''>
          <h2>The Questions</h2>
        </Col>
        <Col sm="9">
          <Qinputs noti={notify} onAdd={changeData}/>

          <Qlist deleteOne={deleteOneitem} lData={Data}/>
          {localStorage.getItem("items") != null ?  <Button onClick={deleteAll} variant='danger' className='my-3 w-100'>Delete All</Button>:null}
        </Col>

      </Row>
      <ToastContainer
position="bottom-right"
autoClose={5000}
hideProgressBar
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
      </Container>
      
    </div>
  );
}

export default App;
