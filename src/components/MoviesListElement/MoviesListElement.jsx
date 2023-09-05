import { Link } from 'react-router-dom';

export default function MoviesListElement({movie}) {
    return (
        <li>
            <Link to={`/movies/${movie._id}`}><h1>{movie.title}</h1></Link>
        </li>
    )

}