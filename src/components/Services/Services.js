import React, { Component } from "react"
import Service from "./Service"
import "./services.css"


class Services extends Component {
	constructor(props) {
		super(props)
		this.state = {
			services: []
		}
	}

	retrieveServices() {
		const headers = {
			"Content-Type": "application/json"
		}

		fetch("http://localhost:3001/services", headers)
		.then(res => res.json())
		.then(res => this.setState({ services: res }))
	}

	componentDidMount() {
		this.retrieveServices()
	}

	render() {
		const { services = [] } = this.state
		return (
	  		<div className="container">
	  		{
	  			services.map((service) => (
	  				<Service individualService={service} />
	  			))
	  		}
	  		</div>		
		)
	}
}

export default Services

