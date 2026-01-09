import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Form } from "react-bootstrap";


const CariMovie = ({search, setSearch}) => {
  
  return (
    <>
      {/* <Container>
        <Row>
          <Col></Col>
          <Col xs={6}> */}
            <Form.Control 
              type="text" 
              placeholder="Search movie..." 
              className="mt-3 mb-4" 
              data-bs-theme="dark"
              value={search}
              onChange={setSearch} />
          {/* </Col>
          <Col></Col>
        </Row>
      </Container> */}
    </> 
  )
}

export default CariMovie;