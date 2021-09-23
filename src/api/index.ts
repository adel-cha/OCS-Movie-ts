import MovieDetail from "@/types/movieDetail";
import Movies from "@/types/movies";
import Serie from "@/types/serie";

export const getMovieDetails =(type:string | string[],id:string | string[]):Promise<MovieDetail | Serie>=>{
    return fetch(`https://api.ocs.fr/apps/v2/details/${type}/${id}`)
        .then(response =>response.json());
}

export const getSearchMovies=(value:string):Promise<Movies>=>{
    return fetch(`https://api.ocs.fr/apps/v2/contents?search=title=${value}`)
            .then(response =>response.json())
}