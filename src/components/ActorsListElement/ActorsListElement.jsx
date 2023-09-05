import { Link } from 'react-router-dom'

export default function ActorsListElement({ actor }) {
    return (<li><Link to={`/actors/${actor._id}`}><h2>{actor.name} </h2></Link>

    </li>)
}