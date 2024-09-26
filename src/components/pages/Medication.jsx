import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

function App() {
  const [loading, setLoading] = useState(false);
  const [apiData, setApiData] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [disease, setDisease] = useState("");
  const genAI = new GoogleGenerativeAI(
    "AIzaSyAaCpF0HaZWTQuNCeqiRJQExSdgbHi7V5o"
  );

  const fetchData = async () => {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = `You are a medical expert. Based on the following biodata: 
    Age: ${age}, Gender: ${gender}, Country: ${country}, Disease: ${disease}, 
    provide a detailed medication recommendation including dosage. give them within html with proper styling with tailwind css. write it as plain text without any markdown syntax`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    setApiData(text);
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetchData();
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-50 rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
        <input 
          type="text" 
          value={disease} 
          onChange={(e) => setDisease(e.target.value)} 
          placeholder="Disease" 
          className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-sans text-lg"
        />
        <select 
          value={gender} 
          onChange={(e) => setGender(e.target.value)} 
          className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-sans text-lg"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input 
          type="text" 
          value={age} 
          onChange={(e) => setAge(e.target.value)} 
          placeholder="Age" 
          className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-sans text-lg"
        />
        <input 
          type="text" 
          value={country} 
          onChange={(e) => setCountry(e.target.value)} 
          placeholder="Country" 
          className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-sans text-lg"
        />
        <button 
          type="submit" 
          className="p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 ease-in-out font-sans text-lg font-semibold"
        >
          Get Medication Recommendation
        </button>
      </form>
      {loading ? (
        <p className="mt-6 text-center text-lg font-semibold text-gray-700">Loading...</p>
      ) : apiData ? (
        <div 
          className="mt-6 p-6 border border-gray-300 rounded-lg bg-white shadow-sm"
          dangerouslySetInnerHTML={{ __html: apiData.replace(/|/g, '') }}
        />
      ) : null}
    </div>
  );
}
export default App;