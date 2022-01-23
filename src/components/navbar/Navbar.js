import { NavLink } from "react-router-dom";
import Logo from "../logo/Logo"

function Navbar() {

    const navbarStyle = {
       display: "inline-flex",
       fontSize: "1.5rem",
       flexWrap: "wrap"
    }

    const listStyle = {
        display: "inline-flex",
        width: "86vw",
        justifyContent: "space-evenly",
        alignContent: "center",
        listStyleType: "none",
        alignSelf: "center",
        // marginLeft: "12vw"
    }

    const itemStyle = {
        textDecoration: "none",
        color: "#000000",
    }

    const activeStyle = {
        backgroundColor: "green",
        color: "purple"
    }

    const checkActive = (match, location) => {
        //some additional logic to verify you are in the home URI
        if(!location) return false;
        const {pathname} = location;
        console.log(pathname);
        return pathname === "/";
    }


    return (
        <div className="navBar" style={navbarStyle}>
            <Logo />
            <ul style={listStyle}>
            <li><NavLink style={itemStyle} isActive={checkActive} to="/" activeStyle={activeStyle}>Home</NavLink></li>
            <li><NavLink style={itemStyle} to="/portfolio"activeStyle={activeStyle}>Portfolio</NavLink></li>
            <li><NavLink style={itemStyle} to="/contact" activeStyle={activeStyle}>Contact</NavLink></li>
            </ul>
        </div>
    )
};

export default Navbar;