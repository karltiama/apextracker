import React, { useState } from 'react';

// Define a type for the player data state, adjust according to the actual data structure
interface PlayerData {
  // Example properties, replace with the actual data structure you expect
  name: string;
  level: number;
  // Add other properties as needed
}

const PlayerStats: React.FC = () => {
  const [platform, setPlatform] = useState<string>('PC');
  const [playerName, setPlayerName] = useState<string>('');
  const [playerData, setPlayerData] = useState<PlayerData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const fetchPlayerStats = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`/api/player-stats?platform=${platform}&playerName=${encodeURIComponent(playerName)}`);
      if (!response.ok) throw new Error('Failed to fetch player data');
      const data: PlayerData = await response.json();
      setPlayerData(data);
    } catch (err) {
      // Check if the error is an instance of Error and has a message
      if (err instanceof Error) {
        setError(err.message);
      } else {
        // If not, you can set a default error message
        setError('An unexpected error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!playerName) {
      setError('Please enter a player name');
      return;
    }
    fetchPlayerStats();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Player Name"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          className='text-black'
        />
        <select value={platform} onChange={(e) => setPlatform(e.target.value)}>
          <option value="PC" className='text-black'>PC</option>
          <option value="XBOX" className='text-black'>XBOX</option>
          <option value="PS4" className='text-black'>PS4</option>
          {/* Add other platforms as needed */}
        </select>
        <button type="submit">Get Player Stats</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {playerData && (
        <div>
          <h3>Player Data:</h3>
          {/* Display player data here. Adjust according to the data structure */}
          <pre>{JSON.stringify(playerData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default PlayerStats;
