import { useEffect, useState } from "react";
import { getMovieList, cariMovie } from './Api';
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

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
          <Card style={{ width: '18rem' }} key={i}>
            <Card.Img variant="top" src={`${baseImgUrl}${movie.poster_path}`} />
            <Card.Body>
              <Card.Title>{movie.title || ""}</Card.Title>
              <Card.Text>{!movie.release_date ? "" : formatTanggal(movie.release_date)}</Card.Text>
              <Card.Text>{!movie.vote_average ? "" : Number(movie.vote_average).toFixed(1)}</Card.Text>
              <Button variant="secondary">Details</Button>
            </Card.Body>
          </Card>
        ))
      }
    </>
  )
}

export default MovieList;