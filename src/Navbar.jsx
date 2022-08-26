import { Avatar } from "@mui/material";
import Logo from "./Logo";
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar">
            <Logo />
            <Avatar sx={{width: 120, height: 120, margin: 1.2}}/>
        </nav>
    )
}

export default Navbar;