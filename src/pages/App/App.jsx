import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import LoginPage from '../LoginPage/LoginPage'
import NavBar from '../../components/NavBar/NavBar';
import MoviesListPage from '../MoviesListPage/MoviesListPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import ActorDetailPage from '../ActorDetailPage/ActorDetailPage';
import ActorListPage from '../ActorListPage/ActorListPage';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/movies" element={<MoviesListPage/>} />
              <Route path="/movies/:id" element={<MovieDetailPage/>} />
              <Route path="/actors" element={<ActorListPage/>} />
              <Route path="/actors/:id" element={<ActorDetailPage/>} />
            </Routes>
          </>
          :
          <LoginPage setUser={setUser} />
      }
    </main>
  );
}
