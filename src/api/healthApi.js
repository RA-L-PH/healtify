import axios from 'axios';

const BASE_URL = 'https://api.gemini.com';

const geminiApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-GEMINI-APIKEY': import.meta.env.VITE_GEMINI_API_KEY,
  },
});

export const getAccountBalances = async () => {
  try {
    const response = await geminiApi.get('/v1/balances');
    return response.data;
  } catch (error) {
    console.error('Error fetching account balances:', error);
    throw error;
  }
};
