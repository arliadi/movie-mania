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
      {searchQuery ? (
        <div className=" text-start p-1 mt-3">
          <p className="Showing">`Showing results for "${searchQuery}"`</p>
        </div>
      ) : (
        <section className="Slider container-xl">
          <MovieSlide movieList={movieList} />
        </section>
      )}
      <section id="Popular-movies" className="Movie-List container-xl">
        <div className=" text-start p-1 mt-3">
          <p className="Showing">
            {searchQuery
              ? `Showing results for "${searchQuery}"`
              : "Popular Movies"}
          </p>
        </div>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          <MovieList search={searchQuery} movieList={movieList} />
        </div>
      </section>
      <footer>
        <div className="footer container-fluid d-flex justify-content-center align-items-center mt-3 g-0">
          Movie Mania🍿 Build with ❤️
        </div>
      </footer>
    </div>
  );
};

export default App;
