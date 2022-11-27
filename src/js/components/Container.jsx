import React from 'react'
import Jumbotron from './Jumbotron.jsx'
import Card from './Card.jsx'

const Container = () => {
  return (
    <>
      <div className='container-lg'>
      <div className="row justify-content-md-center">  
        <Jumbotron/>

        <div clasName="container-fluid">
          <div className="row justify-content-md-center">  
          
              <div className="col" style={{marginTop:"2%"}}>
                <Card/>
              </div>
              <div className="col" style={{marginTop:"2%"}}>
                <Card/>
              </div>
              <div className="col" style={{marginTop:"2%"}}>
                <Card/>
              </div>
              <div className="col" style={{marginTop:"2%"}}>
                <Card/>
              </div>
            </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Container