import { Button, Col, Container, Row } from 'react-bootstrap';

const Intro = () => {
  return (
    <div className='intro'>
    <Container className='text-white d-flex justify-content-center align-items-center'>
        <Row>
          <Col>
          <div className='title'>Movie Anna</div>
          <div className='introButton mt-4 text-center'>
            <Button variant='dark'>Lihat Movie</Button>
          </div>
          </Col>
        </Row>
    </Container>
  </div>
  )
}

export default Intro