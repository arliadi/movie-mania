import { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import MovieSlide from "./components/MovieSlide";
import { getMovieList } from "./components/Api";
import Navbar from "./components/Navbar";

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
    });
  }, []);

  return (
    <div className="container-fluid">
      <header>
        <Navbar search={searchQuery} setSearch={handleSearch} />
      </header>
      <section className="Slider container-xl">
        <MovieSlide movieList={movieList} />
      </section>
      <section id="Popular-movies" className="Movie-List container-xl">
        <div className=" text-start p-1 mt-3">
          <p className="Showing">
            {!searchQuery
              ? "Popular Movies"
              : `Showing results for "${searchQuery}"`}
          </p>
        </div>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          <MovieList search={searchQuery} movieList={movieList} />
        </div>
      </section>
    </div>
  );
};

export default App;
