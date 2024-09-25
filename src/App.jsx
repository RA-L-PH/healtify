import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Chat from './components/Chat';  
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <header className="flex justify-between items-center border border-gray-600 px-4 py-2 bg-white">
        <Link to='/'>
          <h1 className="text-2xl font-bold font-inter">Healthify</h1>
        </Link>
        <div className="flex gap-4">
          <Link to="/chat">
            <h1 className="bg-blue-500 text-white px-4 py-2 rounded-md">Chat</h1>
          </Link>
        </div>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </main>
      
      <footer className="w-full py-4 text-center bg-gray-200">
        <p className="text-gray-600">© 2024 HealthBot. All rights reserved.</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
