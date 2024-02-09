import React, { useState } from 'react';

// Define a type for the player data state, adjust according to the actual data structure
interface RankData {
  rankName: string;
  rankDiv: number;
  rankImg: string;
  rankScore: number;
}

interface GlobalData {
  name: string;
  level: number;
  rank: RankData;
}

interface PlayerData {
  // Example properties, replace with the actual data structure you expect
  global: GlobalData;
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
    <div className='flex justify-center items-center'>
      <form 
        onSubmit={handleSubmit}
        className='bg-slate-500 rounded shadow-lg p-4 m-4 flex flex-col space-y-4'
      >
        <input
          type="text"
          placeholder="Player Name"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          className='text-black p-2'
        />
        <select 
          value={platform}
          className='text-black p-2'
          onChange={(e) => setPlatform(e.target.value)}>
          <option value="PC" >PC</option>
          <option value="XBOX" >XBOX</option>
          <option value="PS4" >PS4</option>
          {/* Add other platforms as needed */}
        </select>
        <button 
          type="submit"
          className='bg-blue-500 text-white p-2 rounded hover:bg-blue-600'
        >
          Get Player Stats
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {playerData && (
        <div>
          <h3>Player Data:</h3>
          <h2>{playerData.global.name}</h2>
          <p>Level : {playerData.global.level}</p>
          <p>Rank : {playerData.global.rank.rankName} (Division {playerData.global.rank.rankDiv})</p>
          <p>{playerData.global.rank.rankScore} LP</p>
          <img src={playerData.global.rank.rankImg} alt="Rank" />
          {/* Display player data here. Adjust according to the data structure */}
          {/* <pre>{JSON.stringify(playerData, null, 2)}</pre> */}
        </div>
      )}
    </div>
  );
};

export default PlayerStats;
