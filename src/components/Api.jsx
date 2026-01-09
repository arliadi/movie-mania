import axios from "axios";

const url = import.meta.env.VITE_BASEURL;
const apiKey = import.meta.env.VITE_APIKEY;

export const getMovieList = async() => {
    const movies = await axios.get(`${url}/movie/popular?api_key=${apiKey}`);
    return movies.data.results;
}

export const cariMovie = async(q) => {
    const cari = await axios.get(`${url}/search/movie?query=${q}&api_key=${apiKey}`);
    return cari.data.results;
}