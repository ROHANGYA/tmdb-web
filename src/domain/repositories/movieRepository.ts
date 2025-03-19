import { Movie } from "../entities/movie";


// Results type for movie list operations
export interface MovieListResult {
    movies: Movie[];
    totalPages: number;
    totalResults: number;
}

// Parameters type for getting movies
export interface GetMoviesParams {
    page: number;
}

// Parameters type for searching movies
export interface SearchMoviesParams {
    query: string;
    page?: number;
}

/**
 * Repository interface for Movie entities
 * This defines the contract that any movie repository implementation must fulfill
 */
interface MovieRepository {
    /**
     * Gets a list of popular movies
     * @param params - Parameters for the request
     * @returns Promise with movies, total pages, and total results
     */
    getPopularMovies(params: GetMoviesParams): Promise<MovieListResult>;

    /**
     * Gets details for a specific movie
     * @param id - Movie ID
     * @returns Promise with movie details
     */
    getMovieById(id: number): Promise<Movie>;

    /**
     * Searches for movies
     * @param params - Search parameters
     * @returns Promise with movies, total pages, and total results
     */
    searchMovies(params: SearchMoviesParams): Promise<MovieListResult>;
}

export default MovieRepository;