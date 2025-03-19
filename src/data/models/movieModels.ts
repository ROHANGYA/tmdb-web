
export interface MovieModel {
    id: Number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: Number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: Number,
    vote_count: Number
}

export interface PaginatedMovieModel {
    page: Number,
    results: MovieModel[]
    total_pages: number,
    total_results: number,
}