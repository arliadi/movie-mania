import { useEffect, useState } from "react";
import { getMovieList, cariMovie } from '../Api';



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
            <div class="card" style={{ width: '15rem' }}>
              <img className="Movie-image" src={`${baseImgUrl}${movie.poster_path}`} />
              <div class="card-body">
                <div className="Movie-title">{movie.title || ""}</div>
                <div className="Movie-date">{!movie.release_date ? "" : formatTanggal(movie.release_date)}</div>
                <div className="Movie-rate">{!movie.vote_average ? "" : Number(movie.vote_average).toFixed(1)}</div>
              </div>
            </div>
          </a>
        ))
      }
    </>
  )
}

export default MovieList;