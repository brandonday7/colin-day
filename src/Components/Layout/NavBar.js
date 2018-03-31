import React, { Component } from "react"
import "./NavBar.css"
import { Link } from "react-router-dom";
import tooth from "../../images/tooth.png"



class Navbar extends Component {
	constructor(props) {
		super(props)
		this.state = {
			location: ""
		}
	}
	componentWillReceiveProps(nextProps) {
		// console.log(nextProps.history.location)
		// const nextLocation = nextProps.history.location.pathname
		// if (nextLocation !== this.state.location) {
		// 	this.setState({ location: nextLocation })
		// }
		console.log(nextProps)
	}
	render() {
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
		  		<Link to="/about">
		  			<p className={`links ${this.state.location === "/about" ? "selected-link" : ""}`}>ABOUT US</p>
		  		</Link>
		  		<Link to="/">
		  			<p className={`links ${this.state.location === "/" ? "selected-link" : ""}`}>RESOURCES</p>
		  		</Link>
		  		<Link to="/services">
		  			<p className={`links ${this.state.location === "/services" ? "selected-link" : ""}`}>SERVICES</p>
		  		</Link>
		  		<Link to="/contact">
		  			<p className={`links ${this.state.location === "/contact" ? "selected-link" : ""}`}>CONTACT</p>
		  		</Link>
		  	</div>
		  	
		  </div>
		)
	}
}

export default Navbar