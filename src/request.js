const APIKEY= "1df2e045d239b69e17258a7957262633";

const requests={
    fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc`,
    fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
    fetchActionMovies : `/discover/movie?api_key=${APIKEY}&with_genres=28`,
    fetchCommedyMovies : `/discover/movie?api_key=${APIKEY}&with_genres=35`,
    fetchRomanceMovies : `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
    fetchHorroreMovies : `/discover/movie?api_key=${APIKEY}&with_genres=27`,
    fetchDocumentaries : `/discover/movie?api_key=${APIKEY}&with_genres=99`,
}
export default requests;