import { MovieModel, PaginatedMovieModel } from "../models/movieModels";
import apiClient from "./apiClient";
import { endpoints } from "./endpoints";

class MoviesApi {

    async fetchPopularMovies(params: { page: number }): Promise<PaginatedMovieModel> {

        const response = await apiClient.get<PaginatedMovieModel>(endpoints.featuredMovies, {
            params
        })

        return response.data;
    }


    async fetchMovieDetails(id: number): Promise<MovieModel> {

        const response = await apiClient.get<MovieModel>(endpoints.movieDetails(id))

        return response.data;
    }

}

export default MoviesApi;