import { Movie } from "@/domain/entities/movie";
import { MovieModel } from "../models/movieModels";


export default function mapToDomain(movieModel: MovieModel): Movie {
    return ({
        id: movieModel.id,
        title: movieModel.title,
        releaseYear: movieModel.release_date,
        description: movieModel.overview,
        posterUrl: movieModel.poster_path,
    });
}