import React from "react"
import Paper from 'material-ui/Paper';
import tooth1 from "../../images/tooth1.jpg"
import "./services.css"

const Service = ({ individualService }) => (
	    <Paper className="service-div" style={{padding: "1em", margin: "0 1em 1em 1em"}} zDepth={1}>
	    	<h4>{individualService.title}</h4>
	    	<p>{individualService.description}</p>
	    	<img src={tooth1} className="service-image"/>
	    </Paper>
)


export default Service;
