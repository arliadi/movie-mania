import { useEffect, useState } from "react";
import { cariMovie, getMovieDetail } from "./Api";
import { useRef } from "react";
import { Modal } from "bootstrap";

const MovieList = ({ search, movieList }) => {
  const [searchResult, setSearchResult] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedMovieResult, setSelectedMovieResult] = useState([]);
  const baseImgUrl = import.meta.env.VITE_BASEIMGURL;

  //Load data pencarian
  useEffect(() => {
    //set supaya selesai ngetik dulu baru eksekusi
    const delay = setTimeout(() => {
      if (search) {
        cariMovie(search).then((result) => {
          setSearchResult(result);
        });
      }
    }, 1000);
    return () => clearTimeout(delay);
  }, [search]);

  //Load data detail
  useEffect(() => {
    if (selectedMovie) {
      getMovieDetail(selectedMovie).then((result) => {
        setSelectedMovieResult(result);
      });
    }
  }, [selectedMovie]);

  const modalRef = useRef(null);

  const handleOpenModal = (e) => {
    e.preventDefault();
    const myModal = new Modal(modalRef.current);
    myModal.show();
  };

  const displayData = !search ? movieList : searchResult;

  const formatTanggal = (tgl) => {
    if (!tgl) return "";
    return new Intl.DateTimeFormat("id-ID", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(new Date(tgl));
  };

  return (
    <>
      {displayData.map((movie) => (
        <a
          href={`/detail/${movie.id}`}
          key={movie.id}
          onClick={(e) => {
            setSelectedMovie(movie.id);
            handleOpenModal(e);
          }}
        >
          <div className="card" style={{ width: "15rem" }}>
            <img
              className="Movie-image"
              src={`${baseImgUrl}${movie.poster_path}`}
            />
            <div className="card-body">
              <div className="Movie-title">{movie.title || ""}</div>
              <div className="Movie-date">
                Release:{" "}
                {movie.release_date ? formatTanggal(movie.release_date) : ""}
              </div>
              <div className="Movie-rate">
                ⭐{" "}
                {movie.vote_average
                  ? Number(movie.vote_average).toFixed(1)
                  : ""}
              </div>
            </div>
          </div>
        </a>
      ))}

      {/* Modal Bootstrap Vanilla */}
      <div
        className="modal fade"
        ref={modalRef}
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{selectedMovieResult.title}</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {selectedMovieResult && (
                <div className="row">
                  <div className="col-md-4">
                    <img
                      src={`${baseImgUrl}${selectedMovieResult.poster_path}`}
                      className="img-fluid rounded"
                      alt={selectedMovieResult.title}
                    />
                  </div>
                  <div className="col-md-8">
                    <h6>
                      Release: {formatTanggal(selectedMovieResult.release_date)}
                    </h6>
                    <p>
                      Rating: ⭐{" "}
                      {Number(selectedMovieResult.vote_average).toFixed(1)}
                    </p>
                    <p>{selectedMovieResult.overview || "-"}</p>
                  </div>
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieList;
