import React from 'react'
import { Stack, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <Stack>
      <Row>
        <Col className='bg-image' style={{ minHeight: "100vh" }} sm={7}>sm=8</Col>
        <Col className='bg-white' style={{ minHeight: "100vh" }} sm={5}>sm=4</Col>
      </Row>
    </Stack>
  );
}

export default App;
