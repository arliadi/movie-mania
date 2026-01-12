const MovieSearch = ({search, setSearch}) => {
  
  return (
    <>
    <div className="container-xl text-center mb-5">
      <div className="row">
        <div className="col"></div>
        <div className="col-6">
            <input type="text" className="form-control" onChange={setSearch}
            value={search} placeholder="Search movie..."/>
        </div>
        <div className="col"></div>
      </div>
    </div>
    </>



  )
}

export default MovieSearch;