import React, { useState } from "react";
import { Link } from "react-router-dom";
import {  NavLink } from "react-router-dom";
import "./Signup.css"

const Signup = () => {
    const [Submit, setUserSubmit] = useState({
        email: "",
        username: "",
        number: "",
        password: "",
        confirmpassword: "",

    });
    let user="user"
  const emailValidation = (e) =>{
    let re =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(e.target.value)){
      setUserSubmit((prevState)=>{
      return(
          {
              ...prevState,[e.target.name]:e.target.value
          }
      )})
    }
    else{
        setUserSubmit((prevState)=>{
            return(
                {
                    ...prevState,[e.target.name]:""
                }
            )})
    }
  }
    const passwordvalidation = (e) => {
    if(e.target.value !== "") {
        setUserSubmit((prevState)=>{
            return(
                {
                    ...prevState,[e.target.name]:e.target.value
                }
            )})
    }
    else{
        setUserSubmit((prevState)=>{
            return(
                {
                    ...prevState,[e.target.name]:""
                }
            )})
    }
   
  }
  const userClickHandler=(e)=>{
    let cls=document.getElementsByClassName("users")
      if(e.target.value==="user")
      {
        user="user"
        cls[0].style.backgroundColor="#1a237e"
        cls[1].style.backgroundColor=""
        
      }
      else if(e.target.value==="admin")
      {
        user="admin"
        cls[1].style.backgroundColor="#1a237e"
        cls[0].style.backgroundColor=""
        
      }
    }
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        
        console.log(name, value);

        setUserSubmit({ ...Submit, [name] : value})
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        if(Submit.password===Submit.confirmpassword){
            alert("Successfully Registered with us! 😄")
            setUserSubmit({
                email: "",
                username: "",
                number: "",
                password: "",
                confirmpassword: "",

            })
        }
        else{
            alert("confirm password did not match")
        }
        
    }
 
    
    return(
        <>
        <div className="signus">
        <nav className="navbar navbar-expand-lg me-2"  >
    <NavLink className="navbar-brand" style={{fontSize:"50px",margin:"0px"}}  to="#">E-book</NavLink>
    <button className="btn btn-dark-active-color-succes ms-auto  me-2 users" value="patient" style={{backgroundColor:"#1a237e",color:"white"}} onClick={(e)=>{userClickHandler(e)}} type="button" >User</button>
          <button className="btn btn-sm btn-dark-active-color-secondary me-2 users" value="doctor" style={{color:"white"}} onClick={(e)=>{userClickHandler(e)}} type="button">Admin</button>
        <div className="atnss" style={{overflow:"hidden",minWidth:"250px"}}>
        <form action="" onSubmit={(e)=>{submitHandler(e)}}>
        <h1 className ="absss needs-validation" novalidate> Sign Up </h1>
            <div style={{marginBottom:"9px"}}>
        <input type="email"
        placeholder="Enter email" 
        name="email" 
        id="email" 
        autoComplete="off"
        aria-describedby="inputGroupPrepend" required
        value={Submit.email}
        onChange={(e) => setUserSubmit((prevState)=>{
            return(
                {
                    ...prevState,[e.target.name]:e.target.value
                }
            )})}
        onBlur={(e)=>emailValidation(e)}
        />
        </div>
            <div style={{marginBottom:"9px"}}>
                <input type="username" id="username" name="username" placeholder="Enter Username" pattern="[a-zA-Z0-9]+" minLength="4" maxLength="10" 
                    aria-describedby="inputGroupPrepend" required
                autoComplete="off" 
                value={Submit.username}
                onChange={handleInput}
                />
            </div>
            <div style={{marginBottom:"9px"}}>
                <input type="text" placeholder="Enter Mobilenumber" pattern="[7-9]{1}[0-9]{9}" 
       title="Mob no. with 7-9 and remaing 9 digit with 0-9" autoComplete="Nope" aria-describedby="inputGroupPrepend" required
                value={Submit.number}
                onChange={handleInput}
                name="number" id="mobileNumber" />
            </div>
            <div style={{marginBottom:"9px"}}>
            <input type="password"
        placeholder="Enter Password"
        name="password" id="password" 
        autoComplete="off" title="Password must contain: Min 5 characters atleast 1 Alphabet and 1 Number" pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$" 
        value={Submit.password}
        onChange={(e) => passwordvalidation(e)}
        />
            </div>
            <div style={{marginBottom:"9px"}}>
                <input type="password" placeholder="Confirm Password" autoComplete="off"   aria-describedby="inputGroupPrepend" required
                value={Submit.confirmpassword}
                onChange={handleInput}
                name="confirmpassword" id="confirmPassword" />
            </div>
            <button className="btn btn-primary"  style={{marginTop:"9px"}} type="submit" id="submitButton" >Submit</button>

            <br />
            <p id="signinLink" style={{fontWeight:"500",marginTop:"11px"}}> Already a user? <Link to="/"><span style={{color:"#0091ea"}}>Login</span></Link> </p>
        
        </form>
        
        </div>
       
        
        </nav>
        </div>
        </>
    )
}

export default Signup;