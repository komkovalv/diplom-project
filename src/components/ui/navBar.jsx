import React from "react";
import {Link} from "react-router-dom"
const NavBar = () => {
    return (  <ul>
        <Link
            style={{ textDecoration: "none", margin: 25 }}
            to="/login"
        >
            Login{" "}
        </Link>

        <Link style={{ textDecoration: "none", margin: 25 }} to="/main">
            Main{" "}
        </Link>

        <Link
            style={{ textDecoration: "none", margin: 25 }}
            to="/users"
        >
            Users{" "}
        </Link>
    </ul> );
}
 
export default NavBar;