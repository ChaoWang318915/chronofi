import React,{useState} from "react"
import {SidebarData} from "../../js/SidebarData"

function MobileNavbar(){
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = ()=>{
        setSidebar(!sidebar);
    }
    return(
         <>
            <div className="navBar">
                <a href="#" className="menu-bars">
                     
                </a>
            </div>
         </>
    )    
} 

export default MobileNavbar