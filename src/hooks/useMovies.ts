import MoviesApi from "@/data/api/moviesApi";
import { Movie } from "@/domain/entities/movie";
import movieInfra from "@/domain/infrastructure/movieInfra";
import { GetMoviesParams } from "@/domain/repositories/movieRepository";
import GetPopularMoviesUseCase from "@/domain/useCases/getPopularMoviesListUseCase";
import { useEffect, useState } from "react";

interface PaginationState {
    currentPage: number;
    totalPages: number;
    totalResults: number;
}

interface UseMoviesReturn {
    movies: Movie[];
    loading: boolean;
    error: string | null;
    pagination: PaginationState;
    nextPage: () => void;
    prevPage: () => void;
}

const useMovies = (initialParams: GetMoviesParams = { page: 1 }): UseMoviesReturn => {

    const [movies, setMovies] = useState<Movie[]>([]);
    const [params, setParams] = useState<GetMoviesParams>(initialParams);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [pagination, setPagination] = useState<PaginationState>({
        currentPage: initialParams.page || 1,
        totalPages: 0,
        totalResults: 0,
    });


    useEffect(() => {
        const fetchPopularMovies = async (): Promise<void> => {
            setLoading(true);
            setMovies([]);
            setError(null);

            try {
                const result = await movieInfra.getPopularMovies(params);
                setMovies(result.movies);
                setPagination({
                    currentPage: params.page || 1,
                    totalPages: result.totalPages,
                    totalResults: result.totalResults,
                })

            } catch (e) {
                const error = e instanceof Error ? e.message : "Something went wrong";
                setError(error);
                setMovies([]);

            } finally {
                setLoading(false);
            }
        };

        fetchPopularMovies();
    }, [params]);

    const nextPage = (): void => {

        setParams((prevParams) => ({
            ...prevParams,
            page: pagination.currentPage + 1,
        }));
    };

    const prevPage = (): void => {

        setParams((prevParams) => ({
            ...prevParams,
            page: (pagination.currentPage == 1) ? 1 : pagination.currentPage - 1,
        }));
    };


    return {
        movies, loading, error, pagination, nextPage, prevPage,
    };
};

export default useMovies;