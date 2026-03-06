import Logo from "../images/logo.svg"
import Shop from "../images/icon-cart.svg"
import Avatar from "../images/image-avatar.png"
import "../App.css"

export default function Header() {
  return (
    <div className="header">
      <div className="left">
        <img src={Logo} alt="" className="logo"/>

        <div className="section">
            <p>Collections</p>
            <p>Men</p>
            <p>Women</p>
            <p>About</p>
            <p>Contract</p>
        </div>
      </div>

      <div className="right">
        <img src={Shop} alt="" className="shop"/>
        <img src={Avatar} alt="" className="avatar"/>
      </div>
    </div>
  )
}
