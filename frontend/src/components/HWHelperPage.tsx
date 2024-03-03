import React, { useState, useEffect } from 'react';
import "../css/App.css"; // Ensure your CSS file is correctly referenced



const WolframAlphaExample: React.FC = () => {
const [result, setResult] = useState<ResponseType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://api.wolframalpha.com/v2/query';
      const apiKey = 'J42TK3-YV2Y949VRV';
      const input = encodeURIComponent(
        'Rachel has 17 apples. She gets 9 apples from Sarah. How many apples does Rachel have now'
      );

      try {
        // The original code used CORS Anywhere proxy. Be cautious with its use in production.
        const response = await fetch(
          `https://cors-anywhere.herokuapp.com/${url}?appid=${apiKey}&input=${input}&output=json`,
          { method: 'GET' }
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setResult(data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Wolfram Alpha Result</h1>
      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
};

export default WolframAlphaExample;
