import React from "react"
import "./NavBar.css"
import { Link } from "react-router-dom";
import tooth from "../../images/tooth.png"



const Navbar = ({ history }) => {
	const location = history.location.pathname
	console.log(location)
	return (
	  <div className="banner">
	  	<Link to="/">
	  	<div className="logo">
	  		<div className="logo-image">
	  			<img src={tooth} alt="tooth" className="tooth-image" />
	  		</div>
		  	<div className="logo-text">
		    	<h1 className="heading title">DR. COLIN DAY</h1>
		    	<h2 className="heading subtitle">FAMILY DENTISTRY</h2>
		  	</div>
	  	</div>
	  	</Link>

	  	<div className="links-list">
	  		<Link to="/about"><p className={`links ${location === "/about" ? "selected-link" : ""}`}>ABOUT US</p></Link>
	  		<Link to="/"><p className={`links ${location === "/" ? "selected-link" : ""}`}>RESOURCES</p></Link>
	  		<Link to="/services"><p className={`links ${location === "/services" ? "selected-link" : ""}`}>SERVICES</p></Link>
	  		<Link to="/contact"><p className={`links ${location === "/contact" ? "selected-link" : ""}`}>CONTACT</p></Link>
	  	</div>
	  	
	  </div>
	)
}

export default Navbar