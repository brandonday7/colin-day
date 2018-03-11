import React from "react"
import "./NavBar.css"
import { Link } from "react-router-dom";
import tooth from "../../images/tooth.png"

const Navbar = () => (
  <div className="banner">
  	<Link to="/">
  	<div className="logo">
  		<div className="logo-image">
  			<img src={tooth} alt="tooth" height="50"/>
  		</div>
	  	<div className="logo-text">
	    	<h1 className="heading title">DR. COLIN DAY</h1>
	    	<h2 className="heading subtitle">FAMILY DENTISTRY</h2>
	  	</div>
  	</div>
  	</Link>
  	<div className="links-list">
  		<Link to="/about"><p className="links">ABOUT US</p></Link>
  		<Link to="/"><p className="links">RESOURCES</p></Link>
  		<Link to="/services"><p className="links">SERVICES</p></Link>
  		<Link to="/contact"><p className="links">CONTACT</p></Link>
  	</div>
  	
  </div>
)

export default Navbar

