import './App.css'
import MovieCard from './components/MovieCard'
function App() {
  const movienumber = 1;
  return (
    <>
      {movienumber === 2 ? (
        <MovieCard movie={{title: "Pusha The Rise",release_date: "2024" }}/>
      ):(
        <MovieCard movie={{title: "Lucifer",release_date: "2021" }}/>
      )}
      {movienumber === 1 && <MovieCard movie={{title: "Lucifer",release_date: "2021" }}/>}
    </>
  );
}

export default App
