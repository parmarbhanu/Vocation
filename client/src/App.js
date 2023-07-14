import './App.css';
import {Route,Routes} from 'react-router-dom';
import Contest from './components/Contest';
import Jobs from './components/Jobs';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login'
import Register from './components/Register'
import { useEffect, useState } from 'react';
import Profile from './components/Profile';
import Resources from './components/Resources';
import Addresources from './components/Addresources';
import Addjob from './components/Addjob'
function App() {
  const [ user, setLoginUser] = useState({})
  useEffect(()=>{
    setLoginUser(JSON.parse(localStorage.getItem("MyUser")))
  },[])
  const updateUser=(user)=>{
      localStorage.setItem("MyUser",JSON.stringify(user))
      setLoginUser(user)
  }
  
  return (
    <div className="App">
      
      <Header user={user} updateUser={updateUser} /> 
      
      <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route path="/contest" element={<Contest/>}/>
      <Route path="/jobs" element={user&& user._id ?<div  className='container' style={{padding:"3%"}}> <Jobs />  <Addjob user={user}/></div>:<div  className='container' style={{padding:"3%"}}><Jobs/>  <Addjob user={''}/></div>}/>
      <Route path="/resources" element={user&& user._id ?<div  className='container' style={{padding:"3%"}}><Resources />  <Addresources user={user}/></div>:<div  className='container' style={{padding:"3%"}}><Resources />  <Addresources user={''}/></div>}/>
      <Route path="/login" element={user&& user._id ? <div><Home /></div> : <Login updateUser={updateUser}/>}/>
      <Route path="/newuser" element={user&& user._id ? <div><Home /></div> : <Register/>}/>
      <Route path="/profile" element={user&& user._id ? <Profile  user={user} updateUser={updateUser}/> : <></>}/>      
     
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
