import React from 'react'
import PropTypes from 'prop-types'

export default function navbar(props) {
  return (
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
           <a className="navbar-brand" href="#">{props.title}</a>    
           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
           </button> 
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#">Home</a>
            </li>
          </ul> 
        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark': 'light' }`}>
          <label className="form-check-label " htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
          <input className="form-check-input " onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        </div>
        </div>  
        </div>  
      </nav>
  )
}

navbar.propTypes = { 
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}

navbar.defaultProps = {
  title:'Set Title here',
  aboutText:'About'
};