import { useState } from 'react';
import MovieList from './components/MovieList';
import MovieSearch from './components/MovieSearch';


const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  }

  return (
      <div className="container-xl">
        <header className='Header text-center mt-5 mb-5'>
          <h1>Movie Mania</h1>
        </header>
        <section className='Searching'>
          <MovieSearch search={searchQuery} setSearch={handleSearch} />
        </section>
        <section className='Movie-List container-xl'>
          <div className=" text-center mt-3 mb-3">
            <p>{!searchQuery ? "Popular Movies" : `Showing results for "${searchQuery}"`}</p>
          </div>
          <div className='d-flex flex-wrap justify-content-center gap-3'>
            <MovieList search={searchQuery} />
          </div>
        </section>
      </div>  
  )
}


export default App;



