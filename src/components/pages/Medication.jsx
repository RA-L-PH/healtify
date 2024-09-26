import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { FaVirus, FaVenusMars, FaBirthdayCake, FaGlobeAmericas, FaPrescriptionBottleAlt } from 'react-icons/fa';
import tabletImage from '../../assets/tablet.png';

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
    <div className="flex flex-col lg:flex-row min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200">
      <div className="w-full lg:w-3/4 max-w-4xl mx-auto p-6 sm:p-8 md:p-12 bg-white rounded-2xl shadow-2xl my-8 sm:my-10 md:my-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8 sm:mb-10 md:mb-12 text-indigo-800 tracking-tight">Medication Recommendation</h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-8 sm:space-y-10">
          <div className="flex flex-col space-y-2">
            <label htmlFor="disease" className="text-lg sm:text-xl font-semibold text-gray-800 flex items-center">
              <FaVirus className="mr-3 text-indigo-600 text-2xl" /> Disease
            </label>
            <input 
              id="disease"
              type="text" 
              value={disease} 
              onChange={(e) => setDisease(e.target.value)} 
              placeholder="Enter disease" 
              className="p-4 sm:p-5 border-2 border-indigo-300 rounded-lg focus:ring-4 focus:ring-indigo-500 focus:border-indigo-500 font-sans text-xl sm:text-2xl transition duration-300 ease-in-out"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="gender" className="text-lg sm:text-xl font-semibold text-gray-800 flex items-center">
              <FaVenusMars className="mr-3 text-indigo-600 text-2xl" /> Gender
            </label>
            <select 
              id="gender"
              value={gender} 
              onChange={(e) => setGender(e.target.value)} 
              className="p-4 sm:p-5 border-2 border-indigo-300 rounded-lg focus:ring-4 focus:ring-indigo-500 focus:border-indigo-500 font-sans text-xl sm:text-2xl transition duration-300 ease-in-out"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="age" className="text-lg sm:text-xl font-semibold text-gray-800 flex items-center">
              <FaBirthdayCake className="mr-3 text-indigo-600 text-2xl" /> Age
            </label>
            <input 
              id="age"
              type="text" 
              value={age} 
              onChange={(e) => setAge(e.target.value)} 
              placeholder="Enter age" 
              className="p-4 sm:p-5 border-2 border-indigo-300 rounded-lg focus:ring-4 focus:ring-indigo-500 focus:border-indigo-500 font-sans text-xl sm:text-2xl transition duration-300 ease-in-out"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="country" className="text-lg sm:text-xl font-semibold text-gray-800 flex items-center">
              <FaGlobeAmericas className="mr-3 text-indigo-600 text-2xl" /> Country
            </label>
            <input 
              id="country"
              type="text" 
              value={country} 
              onChange={(e) => setCountry(e.target.value)} 
              placeholder="Enter country" 
              className="p-4 sm:p-5 border-2 border-indigo-300 rounded-lg focus:ring-4 focus:ring-indigo-500 focus:border-indigo-500 font-sans text-xl sm:text-2xl transition duration-300 ease-in-out"
            />
          </div>
          <button 
            type="submit" 
            className="p-5 sm:p-6 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out font-sans text-xl sm:text-2xl font-bold shadow-lg flex items-center justify-center transform hover:scale-105"
          >
            <FaPrescriptionBottleAlt className="mr-3 text-2xl" /> Get Medication Recommendation
          </button>
        </form>
        {loading ? (
          <div className="mt-10 sm:mt-12 flex justify-center items-center">
            <div className="animate-spin rounded-full h-16 w-16 sm:h-20 sm:w-20 border-t-4 border-b-4 border-indigo-600"></div>
          </div>
        ) : apiData ? (
          <div 
            className="mt-10 sm:mt-12 p-8 sm:p-10 border-2 border-indigo-300 rounded-xl bg-white shadow-xl"
            dangerouslySetInnerHTML={{ __html: apiData.replace(/|/g, '') }}
          />
        ) : null}
      </div>
      <div className="w-full lg:w-1/4 h-64 lg:h-full fixed lg:right-0 bottom-0 lg:top-0">
        <img src={tabletImage} alt="Tablet" className="w-full h-full object-cover rounded-t-3xl lg:rounded-none" />
      </div>
    </div>
  );
}
export default App;