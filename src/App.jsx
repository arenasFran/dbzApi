import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CharacterProvider } from "./components/context"; 
import { CharacterList } from "./components/CharacterList"
import { CharacterDetail } from "./components/CharactersDetail";
import { Navbar } from "./components/Navbar";


const App = () => {
  return (
    <CharacterProvider>
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<CharacterList />} />
          <Route path="/character/:id" element={<CharacterDetail />} />
        </Routes>
      </Router>
    </CharacterProvider>
  );
};

export default App;

