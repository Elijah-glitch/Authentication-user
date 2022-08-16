import React, { Profiler } from 'react'
import { Stack, Row, Col } from 'react-bootstrap';
import SingUp from './components/SingUp';
import { Routes, Route } from 'react-router-dom';
import LogIn from './components/LogIn';

function App() {
  return (
    <Stack>
      <Row>
        <Col className='bg-image' style={{ minHeight: "100vh" }} sm={7}></Col>
        <Col className='bg-white' style={{ minHeight: "100vh" }} sm={5}>
          <div style={{ minHeight: "100vh" }} className='d-flex justify-content-center mx-4 mt-5'>
            <Routes>
              <Route path='/' element={<Profiler />} />
              <Route path='/login' element={<LogIn />} />
              <Route path='/signup' element={<SingUp />} />
            </Routes>
          </div>
        </Col>
      </Row>
    </Stack>
  );
}

export default App;
