import { Link } from 'react-router-dom';
import chatbotImage from '../assets/chatbot.jpeg';
import analysisImage from '../assets/analysis.jpeg';
import medicationImage from '../assets/medication.jpeg';

const Home = () => {
  return (
    <div className="h-full bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Welcome to Healthify, Your Health Assistant</h2>
          <p className="text-lg">Get instant health analysis and medication recommendations with our AI-powered chatbot.</p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <img src={chatbotImage} alt="Chatbot" className="w-32 h-32 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Chat with AI</h3>
            <p className="mb-4">Describe your symptoms and get instant feedback from our AI.</p>
            <Link to="/chatbot" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Start Chat</Link>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <img src={analysisImage} alt="Analysis" className="w-32 h-32 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Health Analysis</h3>
            <p className="mb-4">Get a comprehensive analysis of your health based on your symptoms.</p>
            <Link to="/analysis" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">Start Analysis</Link>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <img src={medicationImage} alt="Medication" className="w-32 h-32 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Medication Guide</h3>
            <p className="mb-4">Receive personalized medication recommendations and dosage information.</p>
            <Link to="/medication" className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition duration-300">Get Recommendations</Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
