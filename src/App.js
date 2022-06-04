import "./App.css";
import { CharacterList } from "./pages/CharacterList";
import Character from "./pages/Character";
import { Routes, Route, Link } from "react-router-dom";
import { Search } from "./pages/Search";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route strict exact path="/" element={<CharacterList />}></Route>
        <Route strict exact path="/search" element={<Search />}></Route>
        <Route strict exact path="/:id" element={<Character />}></Route>
      </Routes>
    </div>
  );
}

export default App;
