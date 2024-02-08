'use client'

import React, { useState } from 'react';
import Form from "./components/Form";
import GameHistory from './components/GameHistory';
import { v4 as uuidv4 } from 'uuid';
import PlayerStats from './components/PlayerStats';

interface GameData {
  id: string;
  points: string;
  notes: string;
}

export default function Home() {
  const [games, setGames] = useState<GameData[]>([]);

  const addGame =(game: { points: string, notes: string }) => {
    const newGame = { ...game, id: uuidv4() };
    setGames((prevGames) => [...prevGames, newGame]);
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* <Form onSubmit={addGame} />
      <GameHistory games={games} /> */}
      <PlayerStats />
    </main>
  );
}
