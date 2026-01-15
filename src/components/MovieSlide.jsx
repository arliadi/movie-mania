import { useMemo } from "react";

const getShuffleMovies = (list) => {
  if (!list || list.length === 0) return [];
  return [...list].sort(() => Math.random() - 0.5).slice(0, 6);
};

const MovieSlide = ({ movieList }) => {
  const randomMovies = useMemo(() => {
    return getShuffleMovies(movieList);
  }, [movieList]);

  if (randomMovies.length === 0) return null;

  return (
    <div id="movieCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {randomMovies.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#movieCarousel"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : "false"}
          ></button>
        ))}
      </div>

      <div className="carousel-inner">
        {randomMovies.map((movie, index) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={movie.id}
          >
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              className="d-block w-100"
              alt={movie.title}
              style={{ height: "80vh", objectFit: "cover" }} // Pakai 80vh biar lebih dramatis
            />

            <div className="carousel-caption d-none d-md-block">
              <h1 className="carousel-title text-uppercase">{movie.title}</h1>
              <p
                style={{
                  maxWidth: "600px",
                  fontSize: "1.1rem",
                  opacity: "0.9",
                }}
              >
                {movie.overview?.substring(0, 150)}...
              </p>
            </div>
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#movieCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#movieCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default MovieSlide;
