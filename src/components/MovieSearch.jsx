const MovieSearch = ({search, setSearch}) => {
  
  return (
    <>
    <div className="container-xl text-center mb-5">
      <div className="row">
        <div className="col-6 offset-3">
            <input type="text" className="form-control" onChange={setSearch}
            value={search} placeholder="Search movie..."/>
        </div>
      </div>
    </div>
    </>



  )
}

export default MovieSearch;