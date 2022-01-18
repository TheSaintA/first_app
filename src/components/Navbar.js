import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
    
    return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} shadow-lg`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{props.aboutText}</a>
        </li>
      </ul>
      <div className="btn-group">
      <button className="nav-link btn text-success" onClick={props.successMode}><span className="fa fa-square fa-lg"></span> Green</button>
          <button className="nav-link btn text-primary" onClick={props.primaryMode}><span className="fa fa-square fa-lg"></span> Blue</button>
      </div>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
      </div>
    </div>
  </div>
</nav>
    )
}

Navbar.prototypes ={
        title: PropTypes.string.isRequired,
        aboutText: PropTypes.string.isRequired
}

// Navbar.defaultProps ={
//     title: "Set title here",
//     aboutText: "About text here"
// };