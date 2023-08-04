import React,{ useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./User.css"
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';



const AdminUser = () => {
  const [data] = useState()
    const [show, setShow]= useState(false);
  return (
    <>
      <div className="container-xxl-fluid-usetting" style={{display:"flex", justifyContent:"space-between", overflow:"hidden"}}>
      <div className="sidebar"style={{backgroundColor:"#253053",width:"20%",height:"100vh"}}>

      </div>
      <div className="rightside" style={{display:"flex",flexDirection:"row",backgroundColor:"",width:"80%",height:"100vh"}}>
      <LocalPostOfficeIcon style={{fontSize:"40px",marginLeft:"110px",paddingTop:"0px"}}/>
      <NavLink to="/AdminHome">
        <PowerSettingsNewIcon style={{fontSize:"40px",marginLeft:"1150px",paddingTop:"10px"}}/>
        </NavLink>
        <GroupAddIcon/>
      </div>
      </div>
    </>
  )
}

export default AdminUser
