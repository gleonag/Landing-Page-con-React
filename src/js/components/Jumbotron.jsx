import React from 'react'

const Jumbotron = () => {
  return (
        <div style={{padding:"2%"}}>
        <div className="jumbotron jumbotron-fluid mb-2 bg-light text-black">
            <div className="container">
                <h1 className="display-4">A WARM WELLCOME!</h1>
                <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Dolores, voluptatibus deserunt quisquam soluta animi alias temporibus, 
                    consequuntur velit reiciendis ea cumque delectus ut modi nobis repudiandae 
                    fuga magnam a repellendus?
                </p>
                <a style={{marginBottom:"2%"}} className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </div>
        </div>
        </div>
  )
}

export default Jumbotron