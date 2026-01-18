const Navbar = ({ search, setSearch }) => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary fixed-top"
      data-bs-theme="dark"
    >
      <div className="container-xl">
        <a className="navbar-brand" href="/">
          Movie Mania🍿
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {search ? (
              ""
            ) : (
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="#Popular-movies"
                >
                  Popular Movies
                </a>
              </li>
            )}
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search movie..."
              aria-label="Search"
              onChange={setSearch}
              value={search}
            />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
