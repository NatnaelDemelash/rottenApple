import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Auth from "./pages/auth";
import HomePage from "./pages/home";
import Movie from "./pages/movie";
import TVShow from "./pages/tvshow";
import NotFound from "./pages/404";

const App = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/rated" element={<h1>Rated Pages</h1>} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/tvshow/:id" element={<TVShow />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

//API KEY = 52e44749e3c1bc1a6afedea442be1521

// TOKEN = eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MmU0NDc0OWUzYzFiYzFhNmFmZWRlYTQ0MmJlMTUyMSIsInN1YiI6IjY1ODk0Mzg0ZTI5NWI0MzEyNTU4MjMyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nKd9ZazfDJz8xkDCyqq6ZVsG-mG1Xw7AJ7QivfZmqis
