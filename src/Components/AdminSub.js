import React ,{ useState }from 'react'
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import "./AdminHome.css"
const AdminSub = () => {
    const Input = styled('input')({
        display: 'none',
      });
    const [data] = useState()
    const [show, setShow]= useState(false);
    return (
        <>
            <div className="Adminsub-container-xxl-fluid">
            <nav className="navbar navbar-expand-lg me-2"  >
    <NavLink className="navbar-brand" style={{fontSize:"50px"}}  to="#">E-book </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" style={{borderColor:"black"}} aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setShow(!show)}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${show ? "show" : "" }`} id="navbarSupportedContent">
    <ul id="navbarSupportedConten" className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
    <NavLink className="nav-link" id="logoutButton" to="/AdminHome" style={{color:"white",fontWeight:"bold"}} onClick={(data)=>{window.localStorage.removeItem("isLoggedIn")}}>Back</NavLink>
       </li>
       </ul>
       </div>
    </nav>
      <label htmlFor="contained-button-file" style={{margin:"30px 0px 0px 700px",position:"fixed"}}>
        <Input accept="image/*" id="contained-button-file" multiple type="file" />
        <Tooltip title="Add File">
        <Button variant="contained"   component="span">
          <BookmarkAddIcon/>ADD
        </Button>
        </Tooltip>
      </label>
      <div class="list-group" style={{margin:"16% 0% 0% 20%",width:"60%"}}>
  <a href="#" class="list-group-item list-group-item-action">
  React
  <Tooltip title="Delete">
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  </a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-primary">
    Python
    <Tooltip title="Delete">
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
      </a>
  
  <a href="#" class="list-group-item list-group-item-action list-group-item-success">
 Java
 <Tooltip title="Delete">
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  </a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-warning">
        Spring Boot
        <Tooltip title="Delete">
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  </a> 
</div>
            </div>
        </>
    )
}

export default AdminSub
