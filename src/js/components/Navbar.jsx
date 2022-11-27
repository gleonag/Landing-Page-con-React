import React from 'react'

const Navbar = () => {
  return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container-lg " >
                    <a className="navbar-brand"  href="#">Start Bootstrap</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-text-end">
                            <li className="nav-item ">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link active" aria-current="page" href="#">About</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link active" aria-current="page" href="#">Services</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link active" aria-current="page" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
            </div>
    </nav>
  )
}

export default Navbar