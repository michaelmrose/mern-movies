import { useState, useRef, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";

import sendRequest from '../../utilities/send-request';

export default function MovieDetailPage(props) {
    const [movie, setMovie] = useState(null)
    let id = useParams().id

    useEffect(() => {
        async function fetchData() {
            try {
                setMovie(await sendRequest(`/api/movies/${id}`))
            } catch (error) {
                console.log("Error while fetching data: ", error)
            }
        }
        fetchData()
    }, [id])

    return (
        <div>
            {movie ? (
                <>
                    <h1>{movie.title}</h1>
                    <img src={movie.posterPath}></img>
                    <br />
                    <h2>Released</h2>
                    {new Date(movie.releaseDate).getFullYear()}
                    <h2>Cast</h2>
                    {movie.cast.map(member => (
                        <p><Link to={`/actors/${member._id}`}>{member.name} </Link></p>
                    ))}
                </>)
                :
                (<h1>loading</h1>)}

        </div>
    )
}