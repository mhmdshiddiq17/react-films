import React from 'react'
import {Card, Container, Row, Col, Image} from 'react-bootstrap'
import duneImage from '../assets/images/trending/dune.jpg';
import everythingImage from '../assets/images/trending/everything.jpg';
import jokerImage from '../assets/images/trending/joker.jpg';
import lightyearImage from '../assets/images/trending/lightyear.jpg';
import morbiusImage from '../assets/images/trending/morbius.jpg';
import infiniteImage from '../assets/images/trending/infinite.jpg';


const Trending = () => {
	return (
		<div>
		<Container>
			<Row>
				<Col className="movieWrapper" md={4}>
					<Card className="text-white bg-dark movieImage m-2 p-2">
      		<Image src={duneImage} alt="Dune Images" height="500px"/>
        			<Card.Title className="text-center">DUNE</Card.Title>
        				<Card.Text>
				          his is a wider card with supporting text below as a natural lead-in
				          to additional content. This content is a little bit longer.
        				</Card.Text>
       					<Card.Text>Last updated 3 mins ago</Card.Text>
    			</Card>
				</Col>
				<Col className="movieWrapper" md={4}>
					<Card className="text-white bg-dark movieImage m-2 p-2">
      		<Image src={everythingImage} alt="Dune Images" height="500px"/>
        			<Card.Title className="text-center">DUNE</Card.Title>
        				<Card.Text>
				          his is a wider card with supporting text below as a natural lead-in
				          to additional content. This content is a little bit longer.
        				</Card.Text>
       					<Card.Text>Last updated 3 mins ago</Card.Text>
    			</Card>
				</Col>
				<Col className="movieWrapper" md={4}>
					<Card className="text-white bg-dark movieImage m-2 p-2">
      		<Image src={jokerImage} alt="Dune Images" height="500px"/>
        			<Card.Title className="text-center">DUNE</Card.Title>
        				<Card.Text>
				          his is a wider card with supporting text below as a natural lead-in
				          to additional content. This content is a little bit longer.
        				</Card.Text>
       					<Card.Text>Last updated 3 mins ago</Card.Text>
    			</Card>
				</Col>
				
				<Col className="movieWrapper" md={4}>
					<Card className="text-white bg-dark movieImage m-2 p-2">
      		<Image src={infiniteImage} alt="Dune Images" height="500px"/>
        			<Card.Title className="text-center">DUNE</Card.Title>
        				<Card.Text>
				          his is a wider card with supporting text below as a natural lead-in
				          to additional content. This content is a little bit longer.
        				</Card.Text>
       					<Card.Text>Last updated 3 mins ago</Card.Text>
    			</Card>
				</Col>
				<Col className="movieWrapper" md={4}>
					<Card className="text-white bg-dark movieImage m-2 p-2">
      		<Image src={morbiusImage} alt="Dune Images" height="500px"/>
        			<Card.Title className="text-center">DUNE</Card.Title>
        				<Card.Text>
				          his is a wider card with supporting text below as a natural lead-in
				          to additional content. This content is a little bit longer.
        				</Card.Text>
       					<Card.Text>Last updated 3 mins ago</Card.Text>
    			</Card>
				</Col>
				<Col className="movieWrapper" md={4}>
					<Card className="text-white bg-dark movieImage m-2 p-2">
      		<Image src={lightyearImage} alt="Dune Images" height="500px"/>
        			<Card.Title className="text-center">DUNE</Card.Title>
        				<Card.Text>
				          his is a wider card with supporting text below as a natural lead-in
				          to additional content. This content is a little bit longer.
        				</Card.Text>
       					<Card.Text>Last updated 3 mins ago</Card.Text>
    			</Card>
				</Col>
			</Row>
		</Container>
		
		</div>
	)
}

export default Trending	