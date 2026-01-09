import './App.css';
import { getMovieList, cariMovie } from './Api';
import { useEffect, useState } from 'react';

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  }

  return (
      <div className="App">
        <div className="App-header">
          <h1>Movie Mania</h1>
          <CariMovie search={searchQuery} setSearch={handleSearch} />
          <p className="Query">{!searchQuery ? "Popular Movies" : `Showing results for "${searchQuery}"`}</p>
          <div className="Movie-container">
            <MovieList search={searchQuery} />
          </div>
        </div>
      </div>
  )
}

const CariMovie = ({search, setSearch}) => {
  
  return ( 
    <input 
      type="text" 
      placeholder="search movie..." 
      className="Movie-search"
      onChange={setSearch}
      value={search}
    />
  )
}

const MovieList = ({search}) => {
  const [movieList, setMovieList] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const baseImgUrl = import.meta.env.VITE_BASEIMGURL;
  
  //load data awal
  useEffect(() => {
    getMovieList().then((result) => {
      setMovieList(result);
    })
  }, []);

  //Load data pencarian
  useEffect(() => {
    if (search) {
      cariMovie(search).then((result) => {
        setSearchResult(result)
      })
    }
  },[search]);


  const displayData = !search ? movieList : searchResult;

  const formatTanggal = (tgl) => {
    if (!tgl) return "";
    return new Intl.DateTimeFormat('id-ID', {day: 'numeric', month: 'short', year: 'numeric'}).format(new Date(tgl));
  }

  return (
    <>
      {displayData.map((movie, i) => (
          <a href="" key={i}>
            <div className="Movie-wrapper">
                <img className="Movie-image" src={`${baseImgUrl}${movie.poster_path}`} />
                <div className="Movie-title">{movie.title || ""}</div>
                <div className="Movie-date">{!movie.release_date ? "" : formatTanggal(movie.release_date)}</div>
                <div className="Movie-rate">{!movie.vote_average ? "" : Number(movie.vote_average).toFixed(1)}</div>
            </div>
          </a>
        ))
      }
    </>
  )
}


export default App;



