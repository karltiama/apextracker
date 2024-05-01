"use client";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PlayerStats from "../components/PlayerStats";
import Form from "../components/Form";
import GameHistory from "../components/GameHistory";

interface GameData {
	id: string;
	points: string;
	notes: string;
}

export default function ApexPage() {
	const [games, setGames] = useState<GameData[]>([]);

	const addGame = (game: { points: string; notes: string }) => {
		const newGame = { ...game, id: uuidv4() };
		setGames((prevGames) => [...prevGames, newGame]);
	};

	return (
		<div>
			<h1>Apex Page</h1>
			<PlayerStats />
			<Form onSubmit={addGame} />
			<GameHistory games={games} />
		</div>
	);
}
