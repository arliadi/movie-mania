import { useState } from 'react';
import CariMovie from './CariMovie.jsx';
import MovieList from './MovieList.jsx';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  }

  return (
      <>
        <Container>
          <Row>
            <Col></Col>
            <Col xs={6}>
             <h1 className='mt-3 mb-3 text-center'>Movie Mania</h1>
             <CariMovie search={searchQuery} setSearch={handleSearch} />
             <p className="Query text-center">{!searchQuery ? "Popular Movies" : `Showing results for "${searchQuery}"`}</p>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col className='d-flex flex-wrap gap-3 justify-content-center'>
              <MovieList search={searchQuery} />
            </Col>
          </Row>
        </Container>
      </>


      // <div className="App">
      //   <div className="App-header">
      //     <div className="Movie-container">
      //     </div>
      //   </div>
      // </div>
  )
}

export default App;



