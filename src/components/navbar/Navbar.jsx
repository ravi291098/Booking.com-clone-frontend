import { useNavigate } from "react-router-dom"
import "./navbar.css"

const Navbar = (props) => {
  const navigate = useNavigate()
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo" onClick={() => navigate('../')}>MyBooking.Com</span>
        <div className="navItems">
          <button className="navButton" onClick={() => props.setShowRegister(true)}>Register</button>
          <button className="navButton" onClick={() => props.setShowLogin(true)}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar