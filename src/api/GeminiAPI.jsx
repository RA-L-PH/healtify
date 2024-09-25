import { useState } from 'react';

const GeminiAPI = () => {
  const [prompt, setPrompt] = useState('');
  const [responseText, setResponseText] = useState('');

  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

  const fetchGeminiResponse = async () => {
    try {
      const response = await fetch('https://api.gemini.com/v1/endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({ prompt })
      });

      const data = await response.json();
      setResponseText(data.text);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchGeminiResponse(); // Trigger the API call on form submission
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt here"
        />
        <button type="submit">Send Prompt</button>
      </form>
      <div>
        <h2>Response:</h2>
        <div dangerouslySetInnerHTML={{ __html: responseText }} />
      </div>
    </div>
  );
};

export default GeminiAPI;