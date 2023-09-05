import { useState, useRef, useEffect } from 'react';
import ActorsList from '../../components/ActorsList/ActorsList';
import sendRequest from '../../utilities/send-request';

export default function ActorListPage (props){
    const [actors, setActors] = useState([])

    useEffect(()=> {
        async function fetchData(){
            try {
                setActors(await sendRequest("/api/actors"))
            } catch (error){
                console.log("Error while fetching data: ", error)}}
                fetchData()}, [])

    return (
        <div><h1>Actor List Page</h1>
        <ActorsList actors={actors}/>
        </div>
    )
}