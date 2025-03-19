import { Movie } from "../entities/movie";
import MovieRepository, { GetMoviesParams, MovieListResult } from "../repositories/movieRepository";

class GetPopularMoviesUseCase {
    private movieRepository: MovieRepository;

    constructor(repository: MovieRepository) {
        this.movieRepository = repository;
    }

    async call(params: GetMoviesParams): Promise<MovieListResult> {
        return await this.movieRepository.getPopularMovies(params);
    }
}

export default GetPopularMoviesUseCase;