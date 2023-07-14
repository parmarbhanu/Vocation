import React from 'react'
import './Header.css';
import Logo from '../login-logo.png';
import Logo1 from '../vocationlogo.png';
export default function Header(props) {
  return (
       <div classNmae="hearderbg">
        <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">
      <img src={Logo1} alt="logo" width="150" height="45" padding-left="10%"/>
      </a>
      
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" 
            // aria-current="page"
             href="/">Home</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="/leaderboard">Leaderboard</a>
          </li> */}

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Upcoming
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="/contest">Contest</a></li>
              <li><a className="dropdown-item" href="/jobs">Jobs</a></li>
              {/* <li><a className="dropdown-item" href="#">Jobs</a></li> */}
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/resources">Resources</a>
          </li>
        </ul>
        <li className="d-flex nav-item dropdown mx-3">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://static.vecteezy.com/system/resources/previews/004/648/833/non_2x/user-icon-symbol-3d-design-concept-illustration-vector.jpg" alt="avatar" width="40" height="35" border-radius="50%"className='rounded-circle'/>       
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{backgroundColor:'gray'}}>
              <li>{props.user && props.user._id ? <a className="dropdown-item" style={{borderRadius:'10px'}} href="/profile">Profile</a>:<a className="dropdown-item" href="/login">Login</a> } 
                </li>
                {props.user && props.user._id ?<a className="dropdown-item" style={{borderRadius:'10px'}} href='/' onClick={() => props.updateUser({})} >Logout</a>: <li><a className="dropdown-item" href="/newuser">New User</a></li>}
            </ul>
          </li>
      </div>
    </div>
  </nav>
  </div>
  )
}
