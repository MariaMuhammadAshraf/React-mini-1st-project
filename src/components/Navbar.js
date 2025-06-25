import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

//React Function based component
export default function Navbar(props) {
  return (
    //add js here for curly bracket
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}
    >
      <div className="container-fluid">
         <a className="navbar-brand" href="#">
          {/* //props mention here */}
          {props.title}
        </a>
        {/* <Link className="navbar-brand" to="/"> */}
          {/* //props mention here */}
          {/* {props.title}
        </Link> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>

              {/* <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutUs}</Link>
              </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">{props.contactus}</Link>
            </li>

             <li className="nav-item">
              <Link className="nav-link" to="/blog">{props.blogs}</Link>
            </li> */}

          </ul>
       
        {/* ///switch dark light mode */}
          <div className={`form-check form-switch text-${props.mode === 'light'?'dark': 'light'}`}>
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault" onClick={props.toggleMode}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Enable Dark Mode
            </label>
          </div>
          

        </div>
      </div>
    </nav>
  );
}
// props types
// Props Type Checking
Navbar.propTypes = {title:PropTypes.string.isRequired,
// aboutUs:PropTypes.string,
// contactus: PropTypes.string
}

//Default Props is not working i dont know why?
// Navbar.defaultProps = {
//   title:"My default tilte",
//   aboutUs: "my about us",
//   contactus: "my contact us"
// };

