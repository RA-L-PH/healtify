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
    <div className="max-w-lg mx-auto p-6">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input 
          type="text" 
          value={disease} 
          onChange={(e) => setDisease(e.target.value)} 
          placeholder="Disease" 
          className="p-2 border border-gray-300 rounded"
        />
        <select 
          value={gender} 
          onChange={(e) => setGender(e.target.value)} 
          className="p-2 border border-gray-300 rounded"
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
          className="p-2 border border-gray-300 rounded"
        />
        <input 
          type="text" 
          value={country} 
          onChange={(e) => setCountry(e.target.value)} 
          placeholder="Country" 
          className="p-2 border border-gray-300 rounded"
        />
        <button 
          type="submit" 
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Get Medication Recommendation
        </button>
      </form>
      {loading ? (
        <p className="mt-4">Loading...</p>
      ) : (
        <div 
          className="mt-4 p-4 border border-gray-300 rounded bg-gray-100"
          dangerouslySetInnerHTML={{ __html: apiData }}
        />
      )}
    </div>
  );
}

export default App;