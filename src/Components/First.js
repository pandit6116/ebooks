import React,{useState} from 'react'
import "./First.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";


const First = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passworderror, setPasswordError] = useState("");
  window.localStorage.setItem("currentTab","home")
  const emailValidation = (e) => {
    let re =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(e.target.value)){
      setEmail(e.target.value)
      setEmailError("");
    }
    else{
      setEmail("");
      setEmailError("please enter valid email id")
    }
  }
  const passwordValidation = (e) => {
    let re =/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/
    if(re.test(e.target.value)) {
      setPassword(e.target.value)
      setPasswordError("");
    }
    else{
      setPassword("");
      setPasswordError("please enter a valid password")
    }
   
  }
  const clickHandler=()=>{
    email!=="" && password!=="" && window.localStorage.setItem("isLoggedIn","yes")
  }
  const userClickHandler=(e)=>{
    let cls=document.getElementsByClassName("users")
      if(e.target.value==="user")
      {
        window.localStorage.setItem("User","user")
        cls[0].style.backgroundColor="#1a237e"
        cls[1].style.backgroundColor=""
      }
      else if(e.target.value==="admin")
      {
        window.localStorage.setItem("user","admin")
        cls[1].style.backgroundColor="#1a237e"
        cls[0].style.backgroundColor=""
      }
  }
  return (
    <>
      <div className="container-xxl-fluid" style={{display:"flex", justifyContent:"space-between", overflow:"hidden"}} >
      <div className="col-9" style={{width:"65%",alignItems:"flex-end"}}>
<div className="opa" style={{opacity:"0.1",width:"100%",height:"250px",backgroundColor:"#2196f3",position:"relative",bottom:"50px",top:"614px"}}>
</div>
<h3 style={{color:"white", fontSize:"100px",position:"absolute",top:"613px",left:"52px"}}>E-book</h3>
</div>
<div className="col-3"style={{width:"35%",height:"100vh",backgroundColor:"#ffe0b2"}}>
<nav className="navbar navbar-expand-sm " style={{justifyContent:"space-between", display:"flex",flexDirection:"row"}} >
<h3  className="abs" style={{fontSize:"50px"}}>Login</h3>
        <button className="btn btn-dark-active-color-succes ms-auto  me-2 users" value="user" style={{backgroundColor:"#1a237e",color:"white"}} onClick={(e)=>{userClickHandler(e)}} type="button" >User</button>
           <button className="btn btn-sm btn-dark-active-color-secondary users" value="admin" style={{color:"white"}} onClick={(e)=>{userClickHandler(e)}} type="button">Admin</button>
           </nav>
<AccountCircleIcon style={{fontSize:"100px",margin:"100px 200px 0px 220px"}}/>
<div className="loginforms" style={{position:"absolute",top:"400px",textAlign:"center"}}>
<form style={{margin:"50px 0px 0px 100px"}}>
  <div class="mb-3">
    <label htmlFor="emailError" style={{display:(emailError==="please enter valid email id"?"block":"none")}}>{emailError}</label>
        <input type="email"
        placeholder="Enter email" 
        name="email" 
        id="email" 
        autoComplete="off"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={(e)=>emailValidation(e)}
        />
  </div>
  <div class="mb-3">
    <label htmlFor="passwordError" style={{display:(passworderror==="please enter a valid password"?"block":"none")}}>{passworderror}</label>
        <input type="password"
        placeholder="Enter Password" 
        name="password" id="password"
        autoComplete="off" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onBlur={(e)=>passwordValidation(e)}
        />
  </div>
  <br />
        <Link   to={email===""||password===""?"/":window.localStorage.getItem("user")==="user"?"/UserHome":window.localStorage.getItem("Admin")==="admin"?"/AdminHome":"AdminHome"}>
        
        
        <button  className="btn btn-primary" type="Submit" id="loginButton" onClick={clickHandler} data-bs-toggle="tooltip" data-bs-placement="top" title="Login"> Login </button>
        </Link>
        
        <br />
        <p style={{fontWeight:"500",marginTop:"15px"}}>New User? <Link to="/Signup"><span style={{color:"#0091ea"}} id="signupLink"data-bs-toggle="tooltip" data-bs-placement="top" title="SignUp">Sign Up</span></Link></p>
        
</form>
</div>
</div>
</div>
    </>
  )
}

export default First
