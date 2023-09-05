import MoviesListElement from "../MoviesListElement/MoviesListElement"
export default function MoviesList({movies}){
    return (
        <ul>
            {movies.map(movie=>(
                <MoviesListElement movie={movie}/>
    ))}
        </ul>)
}