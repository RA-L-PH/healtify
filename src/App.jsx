import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Chatbot from "./components/pages/Chatbot";
import HealthAnalysis from "./components/pages/HealthAnalysis";
import Medication from "./components/pages/Medication";


function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
    <BrowserRouter>
      <header className="flex justify-between  items-center border border-gray-600 px-4 py-2 bg-blue-600 text-white sticky top-0 z-10">
        <Link to='/'>
          <h1 className="text-2xl font-bold font-inter hover:text-gray-400">Healthify</h1>
        </Link>
        <div className="flex gap-4">
          <Link to="/chatbot">
            <h1 className="bg-white text-black px-3 py-2 font-semibold rounded-md w-[80px] text-xl shadow-black shadow-md">Chat</h1>
          </Link>
        </div>
      </header> 

      <main className="container flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/analysis" element={<HealthAnalysis />} />
          <Route path="/medication" element={<Medication />} />


        </Routes>
      </main>
      
    </BrowserRouter>
      <footer className="w-full border-t border-black py-4 text-center bg-gray-200">
        <p className="text-gray-600">© 2024 HealthBot. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;