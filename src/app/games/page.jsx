// src/pages/games.js (or pages/games.js depending on your folder structure)

import React from 'react';
import Link from 'next/link';

const GamesPage = () => {
  // Sample list of games (you can replace this with data fetched from your database later)
  const games = [
    { id: 1, name: 'Card Battle Royale', description: 'A strategic card game for players of all skill levels.', imageUrl: '/images/card_battle_royale.jpg' },
    { id: 2, name: 'DeckMasters', description: 'Master the deck in this fast-paced competitive game.', imageUrl: '/images/deck_masters.jpg' },
    { id: 3, name: 'Fantasy Card Quest', description: 'Embark on a magical journey with powerful cards.', imageUrl: '/images/fantasy_card_quest.jpg' },
    { id: 4, name: 'War of the Cards', description: 'Conquer your enemies with superior tactics and card combinations.', imageUrl: '/images/war_of_the_cards.jpg' },
  ];

  return (
    <div className="bg-gray-100 p-6 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Available Games</h1>

      {/* Loop through the games and display them */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => (
          <div key={game.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={game.imageUrl}
              alt={game.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold">{game.name}</h2>
              <p className="text-gray-700 mt-2">{game.description}</p>
              <Link href={`/game/${game.id}`} className="mt-4 inline-block text-cardGreen hover:text-cardGold transition duration-200">Play Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamesPage;
