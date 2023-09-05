import { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import sendRequest from '../../utilities/send-request';

export default function ActorDetailPage(props) {
    const [actor, setActor] = useState(null)
    let id = useParams().id


    useEffect(() => {
        async function fetchData() {
            try {
                setActor(await sendRequest(`/api/actors/${id}`))
            } catch (error) {
                console.log("Error while fetching data: ", error)
            }
        }
        fetchData()
    }, [id])

    return (
        <div>
            {actor ? (
                <>
                    <h1> {actor.name}</h1>

                    <h3>Stars in</h3>
                    {actor.movies.map(movie => (
                        <Link to={`/movies/${movie._id}`}> <p>{movie.title}</p></Link>
                    ))}
                </>

            )
                :
                (<h1>loading</h1>)
            }
        </div>
    )
}