import { useState } from 'react';
import axios from 'axios';
import { IoMdSend } from "react-icons/io";
import { FaCopy, FaCheck } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ReactMarkdown from 'react-markdown';
import Spline from '@splinetool/react-spline';

const apikey = import.meta.env.VITE_GEMINI_API_KEY;

function Chatbot() {
  const [userInput, setUserInput] = useState('');
  const [conversation, setConversation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      generateAnswer();
    }
  };

  const generateAnswer = async () => {
    if (!userInput.trim()) {
      alert('Please enter a question');
      return;
    }

    setIsLoading(true);
    setConversation([...conversation, { type: 'user', text: userInput }, { type: 'bot', text: '...' }]);

    try {
      const response = await axios({
        url:`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apikey}`,
        method: 'POST',
        data:{
          contents: [
            {
              parts: [
                { text: userInput }
              ]
            }
          ]
        }
      });
      const botResponse = response['data']['candidates'][0]['content']["parts"][0]["text"];
      setConversation(prev => [...prev.slice(0, -1), { type: 'bot', text: botResponse }]);
      setUserInput('');
    } catch (error) {
      console.error('Error generating response:', error);
      setConversation(prev => [...prev.slice(0, -1), { type: 'bot', text: 'An error occurred while generating the response.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const [copiedIndex, setCopiedIndex] = useState(null);

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text).then(() => {
      console.log('Copied to clipboard!');
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000); // Reset after 2 seconds
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  const getCopyIcon = (index) => {
    return copiedIndex === index ? <FaCheck /> : <FaCopy />;
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6 font-sans">
      <div className="w-3/4 flex flex-col bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="bg-blue-600 p-4 text-white">
          <h2 className="text-2xl font-bold">AI Assistant</h2>
        </div>
        <div className="flex-grow overflow-y-auto p-6 space-y-6">
          {conversation.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              <p className="text-xl font-semibold">No messages yet</p>
              <p className="text-sm mt-2">Start a conversation by typing a message below.</p>
            </div>
          ) : (
            conversation.map((message, index) => (
              message.type === 'user' ? (
                <div key={index} className="flex justify-end">
                  <div className="bg-blue-500 text-white p-4 rounded-2xl max-w-[70%] self-end shadow-md">
                    <p className="font-medium">{message.text}</p>
                  </div>
                </div>
              ) : (
                <div key={index} className="flex justify-start">
                  <div className="bg-gray-100 p-4 rounded-2xl max-w-[70%] self-start shadow-md relative">
                    {message.text === '...' ? (
                      <div className="animate-pulse flex space-x-4">
                        <div className="flex-1 space-y-4 py-1">
                          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                          <div className="space-y-2">
                            <div className="h-4 bg-gray-300 rounded"></div>
                            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <>
                        <ReactMarkdown className="text-gray-800 leading-relaxed prose">{message.text}</ReactMarkdown>
                        <button 
                          onClick={() => copyToClipboard(message.text, index)}
                          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        >
                          {getCopyIcon(index)}
                        </button>
                      </>
                    )}
                  </div>
                </div>
              )
            ))
          )}
        </div>

        <div className="p-4 bg-gray-50">
          <div className="flex items-center justify-between space-x-4">
            <Input
              type="text"
              placeholder="How may I help you today?"
              value={userInput}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              className="h-12 w-full text-lg focus:ring-2 focus:ring-blue-400 bg-white shadow-inner"
            />
            <Button
              variant="outline"
              className="flex justify-center items-center text-lg font-semibold cursor-pointer w-24 h-12 gap-2 bg-blue-500 text-white hover:bg-blue-600 transition duration-300 ease-in-out rounded-lg shadow-md"
              onClick={generateAnswer}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
              ) : (
                <>
                  Ask <IoMdSend className="w-6 h-6" />
                </>
              )}
            </Button>
          </div>
        </div>
      </div>

      <div className="w-1/4 relative ml-6">
        <div className="absolute inset-0 rounded-xl overflow-hidden shadow-2xl">
          <Spline scene="https://prod.spline.design/zSG1LwNFGGxPqdfy/scene.splinecode" />
        </div>
      </div>
    </div>
  );
}

export default Chatbot;