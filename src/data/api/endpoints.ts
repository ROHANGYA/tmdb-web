export const endpoints = {
    featuredMovies: 'movie/popular',
    movieDetails: (id: number): string => `/movie/${id}`,
};