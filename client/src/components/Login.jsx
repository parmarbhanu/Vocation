import React,{useState} from 'react'
import './login.css'
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Login=({ updateUser})=>{
  const history = useNavigate()

  const [ user, setUser] = useState({
      email:"",
      password:""
  })

  const handleChange = e => {
      const { name, value } = e.target
      setUser({
          ...user,
          [name]: value
      })
  }

  const login = () => {
      axios.post("/login", user)
      .then(res => {
          alert(res.data.message)
          updateUser(res.data.user)
          history("/")
      })
    }
  return (
    <div>  <section>
    <div class="container">
      <div class="user signinBx">
        <div class="imgBx"><img src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?w=2000" alt="" /></div>
        <div class="formBx">
          <div className="form">
            <h2>Sign In</h2>
            <input type="text" name="email" 
            value={user.email} onChange={handleChange}
             placeholder="Enter your Email" className="form-control"/>
            <input type="password" name="password" 
            value={user.password} onChange={handleChange}
              placeholder="Enter your Password" className="form-control" id="password" />
            
            <div className="text-center"><button type="submit" onClick={login} className="btn btn-color btn-success px-5 mb-5 w-100">Login</button></div>
            <div id="emailHelp" className="form-text text-center mb-5 text-dark">Not
              Registered? <a href="/newuser" className="text-dark fw-bold"> Create an
                Account</a>
            </div>
          </div>
        </div>
      </div>
</div></section>
    </div>
  )
}

export default Login
