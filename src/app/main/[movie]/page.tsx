import MovieCard from "@/components/movie-card";
import { MovieModel } from "@/data/models/movieModels";
import { Movie } from "@/domain/entities/movie";


export const revalidate = 0;

interface PageProps {
    params: { movie: string }
}

export default async function HomeScreen({ params: { movie } }: PageProps) {

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
        }
    };

    const response = await fetch(`https://api.themoviedb.org/3/movie/${movie}?language=en-US`, options)
    const movieResponse: MovieModel = (await response.json());


    const test: Movie = {
        id: movieResponse.id,
        title: movieResponse.title,
        releaseYear: movieResponse.release_date,
        description: movieResponse.overview,
        posterUrl: movieResponse.poster_path
    }

    return <div className="container mx-auto p-4">


        {/* Display items */}
        <div className="flex flex-wrap gap-4">
            <MovieCard key={0} movie={test} />

        </div>
    </div>

}