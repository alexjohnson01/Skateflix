//Import Pages
import SignIn from "./pages/SignIn";
import Start from "./pages/Start";
import Home from "./pages/Home";
import Player from "./pages/Player";
import SignUp from "./pages/SignUp";
//Import Styles
import "./styles/app.scss";
//Import Router
import { Route, Routes } from "react-router-dom";
//Import State
import { useState } from "react";
//Import database
import { trendingNow, allVideos } from "./utils/database";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoutes from "./components/PrivateRoutes";

function App() {
  //State
  const [id, setId] = useState(0);
  const [movies, setMovies] = useState(allVideos);
  const [popularMovies, setPopularMovies] = useState(trendingNow);
  const [cardsIndex, setCardsIndex] = useState(0);
  const [cardsIndex2, setCardsIndex2] = useState(0);
  const [cardsIndex3, setCardsIndex3] = useState(0);
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route
            path="home"
            element={
              <PrivateRoutes>
                <Home
                  setId={setId}
                  movies={movies}
                  setMovies={setMovies}
                  popularMovies={popularMovies}
                  setPopularMovies={setPopularMovies}
                  cardsIndex={cardsIndex}
                  setCardsIndex={setCardsIndex}
                  cardsIndex2={cardsIndex2}
                  setCardsIndex2={setCardsIndex2}
                  cardsIndex3={cardsIndex3}
                  setCardsIndex3={setCardsIndex3}
                />
              </PrivateRoutes>
            }
          />
          <Route path="player" element={<Player id={id} movies={movies} />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
