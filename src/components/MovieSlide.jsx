const backdropUrl = import.meta.env.VITE_BACKDROPURL;

const MovieSlide = ({movieList}) => {
    const backdrop = movieList.map((movie) => movie.backdrop_path);
    const title = movieList.map((movie) => movie.title);

    return (
        <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={`${backdropUrl}${backdrop[0]}`} className="d-block w-100" alt={title[0]}/>
                    <div className="carousel-caption d-none d-md-block">
                        <h3 className="outline">{title[0]}</h3>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={`${backdropUrl}${backdrop[1]}`} className="d-block w-100" alt={title[1]}/>
                    <div className="carousel-caption d-none d-md-block">
                        <h3 className="outline">{title[1]}</h3>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={`${backdropUrl}${backdrop[2]}`} className="d-block w-100" alt={title[2]}/>
                    <div className="carousel-caption d-none d-md-block">
                        <h3 className="outline">{title[2]}</h3>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={`${backdropUrl}${backdrop[3]}`} className="d-block w-100" alt={title[2]}/>
                    <div className="carousel-caption d-none d-md-block">
                        <h3 className="outline">{title[3]}</h3>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={`${backdropUrl}${backdrop[4]}`} className="d-block w-100" alt={title[2]}/>
                    <div className="carousel-caption d-none d-md-block">
                        <h3 className="outline">{title[4]}</h3>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={`${backdropUrl}${backdrop[5]}`} className="d-block w-100" alt={title[2]}/>
                    <div className="carousel-caption d-none d-md-block">
                        <h3 className="outline">{title[5]}</h3>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default MovieSlide;