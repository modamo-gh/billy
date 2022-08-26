import billyLogo from "./assets/billy.svg";
import "./Logo.css"

const Logo = () => {
    return (
    <div className="logo">
        <img className="logoImage" src={billyLogo}/>
        <h1 className="logoText">billy</h1>
    </div>
    )
}

export default Logo;