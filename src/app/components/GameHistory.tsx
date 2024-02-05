import React from 'react';

interface GameData {
  id: string;
  points: string;
  notes: string;
}

interface GameHistoryProps {
  games: GameData[];
}

const GameHistory: React.FC<GameHistoryProps> = ({ games }) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Game History</h2>
      <ul className="list-none">
        {games.length > 0 ? (
          games.map((game) => (
            <li key={game.id} className="mb-2 p-2 bg-gray-200 rounded">
              <p className='p-2 rounded text-black'><strong>Points:</strong> {game.points}</p>
              <p className='p-2 rounded text-black'><strong>Notes:</strong> {game.notes}</p>
              {/* Display additional game data here */}
            </li>
          ))
        ) : (
          <p>No game history to display.</p>
        )}
      </ul>
    </div>
  );
};

export default GameHistory;