import React from "react"
import "./NavBar.css"
import tooth from "../../images/tooth.png"

const Navbar = () => (
  <div className="banner">
  	<div className="logo">
  		<div className="logo-image">
  			<img src={tooth} height="50"/>
  		</div>
	  	<div className="logo-text">
	    	<h1 className="heading title">DR. COLIN DAY</h1>
	    	<h2 className="heading subtitle">FAMILY DENTISTRY</h2>
	  	</div>
  	</div>
  </div>
)

export default Navbar

