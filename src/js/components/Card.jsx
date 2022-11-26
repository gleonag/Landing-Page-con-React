import React from 'react'

const Card = () => {
  return (
    <div className="card" style={{width: "18rem", textAlign:"center"}}>
        <img style={{height:"350px", width:"500px"}} src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore necessitatibus aperiam quam est reiciendis obcaecati at.
                 Ipsa consequatur quod dolorem exercitationem itaque, veniam unde vitae necessitatibus accusantium harum blanditiis?
            </p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
  )
}

export default Card