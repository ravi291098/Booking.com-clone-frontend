import "./navbar.css"

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">lamabooking</span>
        <div className="navItems">
          <button className="navButton" onClick={() => props.setShowRegister(true)}>Register</button>
          <button className="navButton" onClick={() => props.setShowLogin(true)}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar