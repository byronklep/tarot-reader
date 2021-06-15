import { Container, Row, Col, Card } from 'react-bootstrap'

const HowItWorks = () => {
  return (
    <>
      <Container className="my-5">
        <Row>
          <Col className="d-flex justify-content-center">
            {' '}
            <Card
              bg="info"
              text="white"
              style={{ width: '36rem' }}
              className="mb-2">
              <Card.Header>How It Works</Card.Header>
              <Card.Body>
                <Card.Title> Choose Between 3 Readings </Card.Title>
                <Card.Text>
                  Depending on how deep of a reading you would like, you may
                  choose between three (3) levels of invocation.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default HowItWorks
