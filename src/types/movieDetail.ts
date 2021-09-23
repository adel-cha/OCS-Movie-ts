import Movie from './movie';

interface MovieDetail {
    contents:Movie
    count: number
    filter: string
    limit: string
    next: null
    offset: number
    parentalrating: number
    previous: number
    sort: number
    template: string
    title: string
    total: number
}
export default MovieDetail