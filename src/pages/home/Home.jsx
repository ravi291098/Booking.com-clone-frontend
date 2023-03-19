import { useState } from "react";
import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import Login from "../../modal/Login";
import Register from "../../modal/Register";
import "./home.css";

const Home = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div>
      <Navbar setShowLogin={setShowLogin} setShowRegister={setShowRegister} />
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </div>
     {showLogin &&   <Login show={showLogin} showRegister={() => setShowRegister(true)} handleClose={() => setShowLogin(false)} />}
      {showRegister &&   <Register showRegister={showRegister} showLogin={() => setShowLogin(true)} handleClose={() => setShowRegister(false)} />}
    </div>
  );
};

export default Home;
