import './App.css';
import MoviList from "./Components/MovieList"
import SearchBar from './Components/SearchBar';


function App() {
  return (
    <div className="App container">
    <SearchBar />
    <MoviList /> 
    
      
    </div>
  );
}

export default App;
