import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = '21a8d7e14a9b5e9904fbfbdbadb21ca8';

export const movieTrending = async () =>{
    const {data} = await axios.get(`trending/movie/week?api_key=${KEY}`);
    return data.results;
};

export const movieByQuery = async (query) =>{
    const {data} = await axios.get(`search/movie?api_key=${KEY}&query=${query}&language=en-US&page=1&include_adult=false`);
    return data.results;
}

export const movieById = async (movieId) =>{
    const {data} = await axios.get(`movie/${movieId}?api_key=${KEY}&language=en-US`);
    return data;
}

export const movieCast = async (movieId) =>{
    const {data} = await axios.get(`movie/${movieId}/credits?api_key=${KEY}&language=en-US`);
    return data.cast;
}

export const movieReviews = async (movieId) =>{
    const {data} = await axios.get(`movie/${movieId}/reviews?api_key=${KEY}&language=en-US`);
    return data.results;
}