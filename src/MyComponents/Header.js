import React from 'react'
import PropTypes from 'prop-types'


export default function Header(props) {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href='#'>{props.title}</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link">About</a>
          </li>

        </ul>
        {props.searchbar? <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form> : "no searchbar"}
      </div>
    </nav>

  )
}
Header.defaultProp = {
  title: "Your Title Is Here",
  // searchBar: true
}
Header.propType = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired

}