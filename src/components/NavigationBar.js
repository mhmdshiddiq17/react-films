import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'


const NavigationBar = () => {
	return (
		<div>
		<Navbar variant="dark">
			<Container>
				<Navbar.Brand>99FILMS</Navbar.Brand>
				<Nav>
					<Nav.Link>TRENDING</Nav.Link>
					<Nav.Link>SUPERHERO</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
		</div>
	)
}

export default NavigationBar