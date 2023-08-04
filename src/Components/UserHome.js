import React,{useState} from "react";
import UserCard from "./UserCard";
import UserApi from "./UserApi";
import "./User.css"
import {  NavLink } from "react-router-dom";
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const UserHome = () => {
  const [data] = useState()
  const [show, setShow]= useState(false);
  return (
    <>
    <div className="container-xxl-fluid-ushome">
     <nav className="navbar navbar-expand-lg me-2"  >
    <NavLink className="navbar-brand" style={{fontSize:"50px"}}  to="#">E-book </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" style={{borderColor:"black"}} aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setShow(!show)}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${show ? "show" : "" }`} id="navbarSupportedContent">
    <h6 style={{color:"white",marginLeft:"86%"}}>Anurag
    <AccountBoxIcon style={{color:"white",fontSize:"30px"}}
    /></h6>
    <ul id="navbarSupportedConten" className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
    <NavLink className="nav-link" id="logoutButton" to="/" style={{color:"white",fontWeight:"bold"}} onClick={()=>{window.localStorage.removeItem("isLoggedIn")}}>Logout</NavLink>
       </li>
       </ul>
       </div>
    </nav>
    <div className="heading_style"></div>
    <h1 style={{fontSize:"50px",position:"absolute",top:"70px",left:"552px"}}> Course Dashboard  </h1>
    <div className="card-div" style={{margin:"30px 0px 0px 170px"}}>
      {UserApi.map((val, index) => {
        console.log(index);
        return(
        <UserCard
        key={val.id}
        imgsrc={val.imgsrc}
        title={val.title}
        sname={val.sname}
        link={val.link}
      />
  
    );
      })}
      </div>
      </div>
    </>
  )
    }

export default UserHome;