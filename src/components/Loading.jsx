import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

function Loading() {
  return (
    <div className='w-100 d-flex justify-content-center my-2'>
        <Spinner animation="border" variant="primary" />
    </div>
  )
}

export default Loading