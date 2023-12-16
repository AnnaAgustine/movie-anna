import { Card, Col, Container, Image, Row } from 'react-bootstrap'
import duneImage from "../assets/images/trending/dune.jpg"
import everythingImage from "../assets/images/trending/everything.jpg"
import jokerImage from "../assets/images/trending/joker.jpg"
import infiniteImage from "../assets/images/trending/infinite.jpg"
import lightyearImage from "../assets/images/trending/lightyear.jpg"
import morbiusImage from "../assets/images/trending/morbius.jpg"


const Trending = () => {
  return (
    <div>
        <Container>
            <br/>
            <br/>
            <h1 className='text-white'>Trending Movies</h1>
            <Row>
                <Col md= {4}className='movieWrapper' id='trending'>
        <Card className="movieImage">
            <Image 
            src={duneImage} 
            alt="Dune" 
            className='images'
             />
             <div className='bg-dark'>
                <div className='p-2 m-1 text-white'>
                    <Card.Title className='text-center'>Antman</Card.Title>
                    <Card.Text className='text-left'>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content.
                    </Card.Text>
                    <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                </div>
                </div>
        </Card>
                </Col>
                <Col md= {4} className='movieWrapper'>
        <Card className="movieImage">
            <Image 
            src={everythingImage} 
            alt="Dune" 
            className='images'
             />
             <div className='bg-dark'>
                <div className='p-2 m-1 text-white'>
                    <Card.Title className='text-center'>Avenger</Card.Title>
                    <Card.Text className='text-left'>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content.
                    </Card.Text>
                    <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                </div>
                </div>
        </Card>
                </Col>
                <Col md= {4} className='movieWrapper'>
        <Card className="movieImage">
            <Image 
            src={jokerImage} 
            alt="Dune" 
            className='images'
             />
             <div className='bg-dark'>
                <div className='p-2 m-1 text-white'>
                    <Card.Title className='text-center'>Batman</Card.Title>
                    <Card.Text className='text-left'>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content.
                    </Card.Text>
                    <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                </div>
                </div>
        </Card>
                </Col>
                <Col md= {4} className='movieWrapper'>
        <Card className="movieImage">
            <Image 
            src={lightyearImage} 
            alt="Dune" 
            className='images'
             />
             <div className='bg-dark'>
                <div className='p-2 m-1 text-white'>
                    <Card.Title className='text-center'>Spiderman</Card.Title>
                    <Card.Text className='text-left'>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content.
                    </Card.Text>
                    <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                </div>
                </div>
        </Card>
                </Col>
                <Col md= {4} className='movieWrapper'>
        <Card className="movieImage">
            <Image 
            src={infiniteImage} 
            alt="Dune" 
            className='images'
             />
             <div className='bg-dark'>
                <div className='p-2 m-1 text-white'>
                    <Card.Title className='text-center'>Robin Hood</Card.Title>
                    <Card.Text className='text-left'>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content.
                    </Card.Text>
                    <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                </div>
                </div>
        </Card>
                </Col>
                <Col md= {4} className='movieWrapper'>
        <Card className="movieImage">
            <Image 
            src={morbiusImage} 
            alt="Dune" className='images'
             />
             <div className='bg-dark'>
                <div className='p-2 m-1 text-white'>
                    <Card.Title className='text-center'>Superman</Card.Title>
                    <Card.Text className='text-left'>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content.
                    </Card.Text>
                    <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                </div>
                </div>
        </Card>
                </Col>
            </Row>
        </Container>
      
    </div>
  )
}

export default Trending
