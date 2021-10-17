import { NavLink } from "react-router-dom";
import Logo from "../logo/Logo"

function Navbar() {

    const navbarStyle = {
       display: "inline-flex",
       fontSize: "2.3rem"
    }

    const listStyle = {
        display: "inline-flex",
        width: "45rem",
        justifyContent: "space-around",
        alignContent: "center",
        listStyleType: "none",
        alignSelf: "center"
    }

    const itemStyle = {
        textDecoration: "none",
        color: "#000000",
    }

    const activeStyle = {
        backgroundColor: "green",
        color: "purple"
    }


    return (
        <div className="navBar" style={navbarStyle}>
            <Logo />
            <ul style={listStyle}>
            <li><NavLink style={itemStyle} to="/" activeStyle={activeStyle}>Home</NavLink></li>
            <li><NavLink style={itemStyle} to="/portfolio"activeStyle={activeStyle}>Portfolio</NavLink></li>
            <li><NavLink style={itemStyle} to="/contact" activeStyle={activeStyle}>Contact</NavLink></li>
            </ul>
        </div>
    )
};

export default Navbar;