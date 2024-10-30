import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { CharacterContext } from "./context";

export const CharacterDetail = () => {
  const { characters } = useContext(CharacterContext); 
  const { id } = useParams();
  const character = characters.find(char => char.id === parseInt(id)); 

  if (!character) {
    return <div className="text-center text-red-500">Personaje no encontrado.</div>;
  }

  return (
    <div className="p-6 bg-gray-800 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-6 text-yellow-400 drop-shadow-lg">{character.name}</h1>
      <img src={character.image} alt={character.name} className="w-full h-64 object-contain mb-4 " />
      <p className="text-yellow-200 text-center mb-4">{character.description}</p>
      <div className="flex justify-center">
        <Link to="/" className="bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-500 transition duration-300">Volver</Link>
      </div>
    </div>
  );
};
