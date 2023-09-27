import React from 'react'
import Nav from './Nav'

const Mainapp = ({children}) => {
  return (
    <div>
  <Nav/>
  <div className="container-fluid d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
    <div className="col-md-12 col-lg-12 mt-5 mb-5">
          {children}
    </div>
  </div>
  </div>
   
  )
}

export default Mainapp
