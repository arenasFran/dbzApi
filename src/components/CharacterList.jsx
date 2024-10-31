import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CharacterContext } from "./context";
export const CharacterList = () => {
    const { characters, setCharacters } = useContext(CharacterContext);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await fetch('https://dragonball-api.com/api/characters?page=1&limit=10');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCharacters(data.items);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCharacters();
    }, [setCharacters]);

    if (loading) return <div className="text-center text-lg font-semibold text-yellow-500">Cargando...</div>;
    if (error) return <div className="text-center text-red-500 text-lg">Error: {error}</div>;

    return (
        <div className="p-6 bg-gray-800 min-h-screen">
            <h1 className="text-4xl font-bold text-center mb-8 text-yellow-400 drop-shadow-lg">Personajes de Dragon Ball</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {characters.map(character => (
                    <Link to={`/character/${character.id}`} key={character.id}>
                        <div className="bg-yellow-700 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer hover:shadow-2xl">
                            <img src={character.image} alt={character.name} className="w-full mt-5 h-48 object-contain transition-transform transform hover:scale-110" />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold text-white text-center">{character.name}</h2>
                                <p className="text-yellow-200 text-center mt-1">Haz clic para más info!</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};
