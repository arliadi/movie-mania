import { useState,useEffect } from 'react';
import MovieList from './components/MovieList';
import MovieSearch from './components/MovieSearch';
import MovieSlide from './components/MovieSlide';
import { getMovieList } from './Api';


const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  
  //ambil value input
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  //load data awal
  useEffect(() => {
    getMovieList().then((result) => {
      setMovieList(result);
    })
  }, []);

  return (
      <div className="container-fluid">
        <header className='Header text-center my-5'>
          <h1>Movie Mania</h1>
        </header>
        <section className='Searching container-xl'>
          <MovieSearch search={searchQuery} setSearch={handleSearch} />
        </section>
        <section className='Slider container-xl'>
          <MovieSlide movieList={movieList} />
        </section>
        <section className='Movie-List container-xl'>
          <div className=" text-start p-1 mt-3">
            <p className='Showing'>{!searchQuery ? "Popular Movies" : `Showing results for "${searchQuery}"`}</p>
          </div>
          <div className='d-flex flex-wrap justify-content-center gap-3'>
            <MovieList search={searchQuery} movieList={movieList} />
          </div>
        </section>
      </div>  
  )
}


export default App;



