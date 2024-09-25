import { useState } from 'react';
import axios from 'axios';
import { IoMdSend } from "react-icons/io";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ReactMarkdown from 'react-markdown';

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

  return (
    <div className="flex flex-col h-screen p-4">
      <div className="flex-grow overflow-y-auto bg-gray-100 p-4 rounded-lg space-y-4">
        {conversation.map((message, index) => (
          message.type === 'user' ? (
            <div key={index} className="flex justify-end">
              <div className="bg-blue-100 p-3 rounded-lg max-w-[60%] self-end">
                <p>{message.text}</p>
              </div>
            </div>
          ) : (
            <div key={index} className="flex justify-start">
              <div className="bg-white p-3 rounded-lg max-w-[60%] self-start">
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
                  <ReactMarkdown>{message.text}</ReactMarkdown>
                )}
              </div>
            </div>
          )
        ))}
      </div>

      {/* Fixed Input Section */}
      <div className="w-[95%] p-2 bg-white border-t flex items-center justify-between space-x-5 fixed bottom-0 left-0 right-0 m-3 shadow-lg">
        <Input
          type="text"
          placeholder="How may I help You today?"
          value={userInput}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="h-12 w-full"
        />
        <Button
          variant="outline"
          className="flex justify-center items-center text-lg font-semibold cursor-pointer w-18 h-12 gap-2"
          onClick={generateAnswer}
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></div>
          ) : (
            <>
              Ask <IoMdSend className="w-5 h-5" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
}

export default Chatbot;
