import React from 'react'
import Jumbotron from './Jumbotron.jsx'
import Card from './Card.jsx'

const Container = () => {
  return (
    <>
      <div style={{padding:"2%"}}>
        <Jumbotron/>

        <div clasName="container-fluid">
          <div className="row justify-content-md-center">  
          
              <div className="col">
                <Card/>
              </div>
              <div className="col">
                <Card/>
              </div>
              <div className="col">
                <Card/>
              </div>
              <div className="col">
                <Card/>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Container