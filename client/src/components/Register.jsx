import './login.css'
import Logo from '../login-logo.png';
import './Register.css';
import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Register = () => {

    const history = useNavigate()

    const [ user, setUser] = useState({
        name: "",
        email:"",
        cfusernames:"",
        ccusernames:"",
        leetusernames:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email,cfusernames, ccusernames,leetusernames, password, reEnterPassword } = user
        if( name && email && password && (password === reEnterPassword)){
            axios.post("/register", user)
            .then( res => {
                alert(res.data.message)
                history("/login")
            })
        } else {
            alert("invlid input")
        }
      }

   return (<div>
     <section>
    <div class="container">
      <div class="user signinBx">
        <div class="imgBx"><img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?w=740&t=st=1667848508~exp=1667849108~hmac=df4b46689384a8b71c5008f72aa453863d4c8c95e55aab04ecb7761be9b6e753" alt="" /></div>
        <div class="formBx">
        <div className="form">            <h2>Create an account</h2>
            <input className="form-control" type="text" name="name" 
            value={user.name} 
            placeholder="Enter Your Name" 
            onChange={ handleChange }/>
            <input  className="form-control" type="text" name="email"
             value={user.email}
              placeholder="Enter Your Email"
               onChange={ handleChange }/>
            <input className="form-control" type="password" name="password"
             value={user.password}
              placeholder="Your Password"
               onChange={ handleChange }/>
                <input className="form-control"type="password" name="reEnterPassword"
             value={user.reEnterPassword}
              placeholder="Comfirm Password" 
              onChange={ handleChange }/>
            <div className="text-center"><button className="btn btn-color btn-success px-5 mb-5 w-100" onClick={register}>Register</button></div>
            <div id="emailHelp" className="form-text text-center mb-5 text-dark">Already
              Registered? <a href="/login" className="text-dark fw-bold"> Login</a>
            </div>
            </div>
        </div>
      </div>
</div></section>

</div>

  )
}

export default Register