import { useState } from 'react';
import axios from 'axios';
import { IoMdSend } from "react-icons/io";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// const apikey2 = process.env.GEMINI_API_KEY;
const apikey = 'AIzaSyAaCpF0HaZWTQuNCeqiRJQExSdgbHi7V5o';

function Chatbot() {
  const [userInput, setUserInput] = useState('');
  const [response, setResponse] = useState('');

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const generateAnswer = async () => {
    console.log("generateAnswer")
    if (!userInput.trim()) {
      alert('Please enter a question');
      return;
    }

    try {
      const response = await axios({
        url:`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apikey}`,
        method: 'POST',
        
        data:{
          contents: [
            {
              parts: [
                { text: "An essay on wild tiger" }
              ]
            }
          ]
        }
    })
      console.log(response['data']['candidates'][0]['content']["parts"][0]["text"]);
      setResponse(response['data']['candidates'][0]['content']["parts"][0]["text"])
    } catch (error) {
      console.error('Error generating response:', error);
    }
  };

  return (
    <div>
      <div className="flex w-full flex-col h-[80vh] p-4 space-y-4">
        {/* Display the chatbot's response */}
        <div className="bg-gray-100 p-4 rounded-lg h-full overflow-y-auto">
          {response && <p>{response}</p>}
        </div>

        <div className="w-full p-2 border-t flex items-center justify-between space-x-5">
          <Input
            type="text"
            placeholder="Ask anything!!"
            value={userInput}
            onChange={handleInputChange}
            className="h-10 w-full"
          />
          <Button
            variant="outline"
            className="flex justify-center items-center text-lg font-semibold cursor-pointer w-18 h-10 gap-2"
            onClick={generateAnswer}
          >
            Ask <IoMdSend className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
