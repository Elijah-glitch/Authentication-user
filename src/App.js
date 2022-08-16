import React from 'react'
import { Stack, Row, Col } from 'react-bootstrap';
import SingUp from './components/SingUp';
import { Routes, Route } from 'react-router-dom';
import LogIn from './components/LogIn';
import AuthProvider from './context/AuthContext';
import Profile from './components/Profile';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Stack>
      <Row>
        <Col className='bg-image' style={{ minHeight: "100vh" }} sm={8}></Col>
        <Col className='bg-white' style={{ minHeight: "100vh" }} sm={4}>
          <div style={{ minHeight: "100vh" }} className='d-flex justify-content-center mx-4 mt-5'>
            <AuthProvider>
              <Routes>
                <Route path='/' element={<PrivateRoute><Profile /></PrivateRoute>} />
                <Route path='/login' element={<LogIn />} />
                <Route path='/signup' element={<SingUp />} />
              </Routes>
            </AuthProvider>
          </div>
        </Col>
      </Row>
    </Stack>
  );
}

export default App;
