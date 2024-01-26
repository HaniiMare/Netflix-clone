import axios from "axios";
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/changes",
//  https://api.themoviedb.org/3/discover/movie
});

export default instance;

// api_key 53e559e98e35c06c746872f99087ed87
const url =
  "https://api.themoviedb.org/3/discover/movie?api key_53e559e98e35c06c746872f99087ed87_include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"; 
  
