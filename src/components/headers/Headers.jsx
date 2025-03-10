import React from "react";
import { Nav } from "./Headers.styles";
import { FaHome, FaSignInAlt, FaUserAlt } from "react-icons/fa";

function Headers(){
    return(
<Nav>
    <a href="">
        <FaHome size={24}/>
    </a>
    <a href=""> 
        <FaUserAlt size={24}/>
    </a>
    <a href=""> 
        <FaSignInAlt size={24}/>
        </a>
</Nav>
    )
}

export default Headers;