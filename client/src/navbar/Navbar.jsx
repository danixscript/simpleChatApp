import { useState } from "react";
import { NavLink } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import "../css/navbar.css";

function Navbar() {
  const [open,setopen] = useState(false);



  function opennav(){
    setopen(!open)
  }

  return (
    <div>
    <div className="openNav" onClick={opennav}>
        X
      </div>

      <div className={open?"navwith":" all_nav flexcenter"}>
    <div>
   
    </div>
    <div className="navfirstchild  ">
    
      <div className="nav_list_box ">
        <div className="navlinks_list flexcol">
         
          <NavLink   activeclassname="active" className='navlink ' to="/home" exact> <span className="icon">icon</span> <span className={open?"title":"disable"}>home</span></NavLink>
        
          <NavLink exact="true" activeclassname="active" className='navlink' to="/menu"><span className="icon">icon</span> <span className={open?"title":"disable"}>home</span></NavLink>
          <NavLink exact="true" activeclassname="active" className='navlink' to="/chat"><span className="icon">icon</span> <span className={open?"title":"disable"}>home</span></NavLink>

        </div>
      </div>
    </div>
    </div>
    </div>

    
  );
}

export default Navbar;
