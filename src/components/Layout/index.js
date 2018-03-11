import React from 'react';
import NavBar from "./NavBar"
import Footer from "./Footer"
import { withRouter } from 'react-router-dom';

import "./Layout.css"

const Layout = ({ children, history }) => (
	<div className="site-container">
		<NavBar history={history} />
		<div>
		  {children}
		</div>
		<Footer />
	</div>
)

export default Layout;