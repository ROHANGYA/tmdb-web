import MoviesApi from "@/data/api/moviesApi";
import MovieRepositoryImpl from "@/data/repositories/movieRepositoryImpl";
import GetPopularMoviesUseCase from "../useCases/getPopularMoviesListUseCase";
import { GetMoviesParams, MovieListResult, SearchMoviesParams } from "../repositories/movieRepository";
import { Movie } from "../entities/movie";

/**
 * Service class that orchestrates movie-related operations
 * This provides a simplified interface for the presentation layer
 */
class MovieInfra {
    private movieApi: MoviesApi;
    private movieRepository: MovieRepositoryImpl;
    private getPopularMovieListUseCase: GetPopularMoviesUseCase;

    constructor() {
        // Initialize data sources
        this.movieApi = new MoviesApi();

        // Initialize repositories
        this.movieRepository = new MovieRepositoryImpl(this.movieApi);

        // Initialize use cases
        this.getPopularMovieListUseCase = new GetPopularMoviesUseCase(this.movieRepository);
    }

    /**
     * Get a list of popular movies
     * @param params - Parameters for the request
     * @returns Promise with movies, total pages, and total results
     */
    async getPopularMovies(params: GetMoviesParams): Promise<MovieListResult> {
        return await this.getPopularMovieListUseCase.call(params);
    }

    /**
     * Get details for a specific movie
     * @param id - Movie ID
     * @returns Promise with movie details
     */
    async getMovieById(id: number): Promise<Movie> {
        throw 'not implemented';
    }

    /**
     * Search for movies
     * @param params - Search parameters
     * @returns Promise with movies, total pages, and total results
     */
    async searchMovies(params: SearchMoviesParams): Promise<MovieListResult> {
        throw 'not implemented';
    }
}

// Create a singleton instance
const movieInfra = new MovieInfra();

export default movieInfra;