import React from 'react'
import { Stack, Row, Col } from 'react-bootstrap';
import SingUp from './components/SingUp';

function App() {
  return (
    <Stack>
      <Row>
        <Col className='bg-image' style={{ minHeight: "100vh" }} sm={7}></Col>
        <Col className='bg-white' style={{ minHeight: "100vh" }} sm={5}>
          <div style={{ minHeight: "100vh" }} className='d-flex justify-content-center mx-4 mt-5'>
            <SingUp />
          </div>
        </Col>
      </Row>
    </Stack>
  );
}

export default App;
