import React from 'react'
import Jumbotron from './Jumbotron.jsx'
import Card from './Card.jsx'

const Container = () => {
  return (
    <>
        <Jumbotron/>
        <div className="d-flex align-items-start" style={{padding:"2%"}}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </>
  )
}

export default Container