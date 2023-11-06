const apikey: string = 'cc311cf7965c68c2d7b9cec0439f090d'
export const baseImagePath = (size: string, path: string) => {
    return `https://image.tmdb.org/t/p/${size}${path}`;
};
export const nowPlayingMovies: string = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}&language=es&region=CL`
export const upcomingMovies: string = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}&language=es&region=CL`
export const popularMovies: string = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=es&region=CL`
export const searchMovies = (keyword:string) => {
    return `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${keyword}&language=es&region=CL`
}
export const movieDetails = (id: number) => {
    return `https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}&language=es`;
};
export const movieCastDetails = (id: number) => {
    return `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apikey}&language=es`;
};