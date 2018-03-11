import React from 'react';
import NavBar from "./NavBar"
import Footer from "./Footer"
import "./Layout.css"

const Layout = ({ children }) => (
	<div className="site-container">
	{console.log(children)}
		<NavBar />
		<div>
		  {children}
		</div>
		<Footer />
	</div>
)

export default Layout;

