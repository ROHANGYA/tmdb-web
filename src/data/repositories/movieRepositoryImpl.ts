import { Movie } from "@/domain/entities/movie";
import MovieRepository, { GetMoviesParams, MovieListResult, SearchMoviesParams } from "@/domain/repositories/movieRepository";
import MoviesApi from "../api/moviesApi";
import mapToDomain from "../mappers/movieMappers";

class MovieRepositoryImpl implements MovieRepository {
    private movieApi: MoviesApi;

    constructor(movieApi: MoviesApi) {
        this.movieApi = movieApi;
    }

    async getPopularMovies(params: GetMoviesParams): Promise<MovieListResult> {
        const response = await this.movieApi.fetchPopularMovies(params);

        return {
            movies: response.results.map(movie => mapToDomain(movie)),
            totalPages: response.total_pages,
            totalResults: response.total_results
        };
    }
    async getMovieById(id: number): Promise<Movie> {
        throw new Error("Method not implemented.");
    }
    async searchMovies(params: SearchMoviesParams): Promise<MovieListResult> {
        throw new Error("Method not implemented.");
    }

}

export default MovieRepositoryImpl;