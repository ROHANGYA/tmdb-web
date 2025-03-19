import { Movie } from "@/domain/entities/movie";
import Image from "next/image";
import Link from "next/link";

interface MovieCardProps {
    movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
    return (
        <div className="flex flex-col bg-white hover:bg-slate-100 shadow-md  rounded-lg overflow-hidden max-w-48 min-w-48 max-h-96">
            <Link href={`/main/${movie.id}`}>
                <Image
                    src={"https://image.tmdb.org/t/p/w500/" + movie.posterUrl}
                    alt={movie.title}
                    width={400}
                    height={300}
                    style={{
                        width: '100%',
                        height: '38vh',
                    }}
                    className="flex-none" />
                <div className="grow p-4">
                    <div className="flex flex-col  gap-1">
                        <h3 className="text-m font-semibold text-gray-800 truncate ">{movie.title}</h3>
                        <p className="text-s text-gray-500 ">({movie.releaseYear})</p>
                    </div>
                    {/* <p className="text-start text-sm text-gray-500 mt-4 text-ellipsis">{movie.description}</p> */}
                </div>
            </Link>

        </div>
    );
};

export default MovieCard;