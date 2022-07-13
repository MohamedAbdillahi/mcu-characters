import Characters from "./components/Characters";
import { Routes, Route, Link } from "react-router-dom";
import CharacterDetails from "./components/CharacterDetails";
function App() {
 
  return (
    <Routes>
      <Route path="/" element={<Characters />} />
      <Route path="/details/:id" element={<CharacterDetails />} />
    </Routes>
  );
}

export default App;
