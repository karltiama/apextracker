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
    <div className="mt-8 w-full flex justify-center">
      <div className="max-w-2xl w-full">
        <h2 className="text-xl font-bold mb-4 text-center">Game History</h2>
        <ul className="list-none space-y-4">
          {games.length > 0 ? (
            games.map((game) => (
              <li key={game.id} className="mb-2 p-4 bg-gray-200 rounded shadow">
                <p className="rounded text-black"><strong>Points:</strong> {game.points}</p>
                <p className="mt-2 rounded text-black"><strong>Notes:</strong> {game.notes}</p>
                {/* Display additional game data here */}
              </li>
            ))
          ) : (
            <p className="text-center">No game history to display.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default GameHistory;