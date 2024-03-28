import React from 'react'
import { Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <div className='footer bg_primary text-white'>
      <Container fluid className='px-5 py-3 text-center'>
        <p className='mb-0'>
          ©<a className='text-white text-decoration-underline' href="https://www.punjab.gov.pk/"> Government of the Punjab,</a> District Administration, Bahawalpur
        </p>
      </Container>
    </div>
  )
}

export default Footer 