import { useState, useRef, useEffect } from 'react';
import MoviesList from '../../components/MoviesList/MoviesList';
import sendRequest from '../../utilities/send-request';

export default function MoviesListPage (props){
    const [movies, setMovies] = useState([])
    useEffect(()=> {
        async function fetchData(){
            try {
                setMovies(await sendRequest("/api/movies"))
            } catch (error){
                console.log("Error while fetching data: ", error)}}
                fetchData()}, [])


    return (
        <div>
            <h1>Movie List Page</h1>
        <MoviesList movies={movies}/>
        </div>

    )
}