import { Link } from 'react-router-dom';

export default function MoviesListElement({movie}) {
    return (
        <li>
            <Link to={`/movies/${movie._id}`}><h1>{movie.title}</h1></Link>
            <h2>Cast</h2>
            {movie.cast.map(member => (
                <p><Link to={`/actors/${member._id}`}>{member.name} </Link></p>
            ))}
        </li>
    )

}