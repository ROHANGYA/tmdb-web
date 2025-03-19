"use client"

import MovieCard from "@/components/movie-card";
import { Movie } from "@/domain/entities/movie";
import useMovies from "@/hooks/useMovies";
import Loading from "../loading";

const mockMovies: Movie[] = [
    {
        id: 1,
        title: 'Inception',
        releaseYear: '2010',
        description: 'A mind-bending thriller about dreams within dreams.',
        posterUrl: 'https://picsum.photos/500', // Example poster URL
    },
    {
        id: 2,
        title: 'The Dark Knight',
        releaseYear: '2008',
        description: 'Batman faces the Joker in an epic battle of good vs evil.',
        posterUrl: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg', // Example poster URL
    },
    {
        id: 3,
        title: 'The Matrix',
        releaseYear: '1999',
        description: 'A hacker discovers the truth about his reality.',
        posterUrl: 'https://image.tmdb.org/t/p/w500/oy1bQIsFok0r0hr5n8L93ftjV3O.jpg', // Example poster URL
    },
    {
        id: 4,
        title: 'Interstellar',
        releaseYear: '2014',
        description: 'A team of explorers ventures through a wormhole to save humanity.',
        posterUrl: 'https://image.tmdb.org/t/p/w500/4hDGRHHL1eIMcwy6fUD6DJ3Rf5V.jpg', // Example poster URL
    },
];

export default async function HomeScreen() {
    const { movies, loading, error, pagination, nextPage, prevPage } = useMovies({ page: 1 });

    return <div className="container mx-auto">
        <div className="flex flex-row">
            <h2 className="text-start text-xl pb-4 font-semibold">Most popular Movies</h2>
            <div className="grow" />
            <div className="flex flex-nowrap pb-5 w-auto place-self-end">
                <button onClick={() => prevPage()}>
                    <img className="h-6 w-6 object-contain" src={"/chevron-left.png"} />
                </button>
                <div className=" pr-4 pl-4 text-center">Page {pagination.currentPage}/{pagination.totalPages}</div>
                <button onClick={() => nextPage()}>
                    <img className="h-6 w-6 object-contain" src={"/chevron-right.svg"} />
                </button>
            </div>


        </div>

        {loading === true ? <Loading /> : <div className="flex flex-wrap gap-4">
            {
                movies.map((movie) => {
                    return (
                        <MovieCard key={movie.id.toString()} movie={movie} />
                    )
                }
                )
            }

        </div>}

        {error && <div> something happened: ${error}</div>}


        <div className="flex flex-nowrap pt-5 w-auto place-self-end">
            <button onClick={() => prevPage()}>
                <img className="h-6 w-6 object-contain" src={"/chevron-left.png"} />
            </button>
            <div className=" pr-4 pl-4 text-center">Page {pagination.currentPage}</div>
            <button onClick={() => nextPage()}>
                <img className="h-6 w-6 object-contain" src={"/chevron-right.svg"} />
            </button>
        </div>
    </div>

}