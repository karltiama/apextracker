// pages/api/player-stats.js

import fetch from 'node-fetch'; // Or remove this if using Node.js 17.5 or later

export default async function handler(req, res) {
  const { platform, playerName } = req.query;

  // Log the received query parameters to ensure they're passed correctly
  console.log('Received parameters:', { platform, playerName });

  const API_URL = `https://api.mozambiquehe.re/bridge?auth=${process.env.APEX_API_KEY}&player=${playerName}&platform=${platform}`;

  // Log the constructed API URL to verify it's correct
  console.log('Requesting external API URL:', API_URL);

  try {
    const response = await fetch(API_URL, {
      method: 'GET',
    });

    console.log('External API response status:', response.status); // Log the response status

    if (!response.ok) {
      console.log('External API response not OK:', response.statusText); // Log if response is not OK
      return res.status(response.status).json({ message: 'Error fetching data from Apex Legends API' });
    }

    const data = await response.json();
    console.log('External API response data:', data); // Log the response data
    res.status(200).json(data); // Send the data back to the client
  } catch (error) {
    console.error('Fetch error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
