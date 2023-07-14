import React, { useState } from "react";
import "../navbar/Navbar.scss";
import Logo from "../../assets/logos/white-hawksight.png";
import Logo2 from "../../assets/logos/image.webp";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [open, setOpen] = useState(false);

  const openNav = () => setOpen(false);
  const closeNav = () => setOpen(true);

  const changeNav = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  window.addEventListener("scroll", changeNav);

  return (
    <div className={nav ? "navbar" : "navbar active"}>
      <div className="nav-sect">
        <div onClick={openNav}>
          <FaBars className="hamburger" />
        </div>
        <div className="logo">
          <img src={Logo} alt="" />
        </div>

        <div className={open ? "links" : "links active"}>
          <div className="top-logo-x">
            <FaTimes onClick={closeNav} className="hamburger" />
            <img src={Logo2} alt="" />
          </div>

          <Link to="">Strategies</Link>
          <Link to="">Dashboard</Link>
          <Link to="">Ecosystem</Link>

          <div className="hidden-links">
            <Link to="">$HAWK Token Staking</Link>
            <Link to="">DDH PFP Upgrade</Link>
            <Link to="">DDH NFT Staking</Link>
            <Link to="">NFT Raffles</Link>
          </div>

          <Link>Docs</Link>
          <Link to="">LP Simulator</Link>
        </div>
      </div>

      <div className="wallet-conn">Connect Wallet</div>
    </div>
  );
};

export default Navbar;
