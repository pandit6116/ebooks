import React,{ useState } from 'react'
import "./AdminHome.css"
import {  NavLink } from "react-router-dom";
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import SubjectIcon from '@mui/icons-material/Subject';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';




const AdminHome = () => { 
  const [data] = useState()
  const [show, setShow]= useState(false);
  
    return (
        <>
        <div class="container-xxl-fluid-ad">
        <nav className="navbar navbar-expand-lg me-2"  >
    <NavLink className="navbar-brand" style={{fontSize:"50px"}}  to="#">E-book </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" style={{borderColor:"black"}} aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setShow(!show)}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${show ? "show" : "" }`} id="navbarSupportedContent">
    <ul id="navbarSupportedConten" className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Tooltip title="Logout">
    <NavLink className="nav-link" id="logoutButton" to="/" style={{color:"white",fontWeight:"bold"}} onClick={()=>{window.localStorage.removeItem("isLoggedIn")}}>Logout</NavLink>
    </Tooltip>
       </li>
       </ul>
       </div>
    </nav>
        <div className="container">
        <h1><AdminPanelSettingsIcon style={{fontSize:"90px"}}/> Dashboard</h1>
  <div className="row">
    <div className="col">
      <div className="cardss">
  <img src="https://media.istockphoto.com/photos/new-house-picture-id1295680594?b=1&k=20&m=1295680594&s=170667a&w=0&h=U5OW-dndWISAt7Kyor_UJAvRrXReDCtceVi7uNDoatU=" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"><SupervisedUserCircleIcon style={{fontSize:"80px"}}/> User </h5>
    <NavLink to="/AdminUser" className="user-setting">
    <Tooltip title="Control Setting">
    <Button variant="contained" style={{marginLeft:"255px"}}>Open</Button>
    </Tooltip>
    </NavLink>
  </div>
</div>
    </div>
    <div className="col">
      <div className="cardss">
  <img src="https://images.unsplash.com/photo-1609895720459-394a6a8c99ed?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZWJvb2t8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"><SubjectIcon style={{fontSize:"80px"}}/> Subject</h5>
    <NavLink to="/AdminSub" className="sub-setting">
    <Tooltip title="Control Setting">
   <Button variant="contained" style={{marginLeft:"255px"}}>open</Button>
   </Tooltip>
   </NavLink>

  </div>
</div>
    </div>
    </div>
    </div>
    
        </div>
        </>
    )
}

export default AdminHome
