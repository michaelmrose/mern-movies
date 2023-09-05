import ActorsListElement from "../ActorsListElement/ActorsListElement";
export default function ActorsList({actors}){
    return (
        <ul>
            {actors.map(actor=>(
                <ActorsListElement actor={actor}/>
            ))}
        </ul>
    )

}