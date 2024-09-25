import { useState } from 'react';
import { getChatbotResponse } from '../api/healthApi';
import MessageList from './MessageList';
import { Input } from "@/components/ui/input"


function Chatbot() {
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I assist with your health today?', sender: 'bot' },
  ]);

  const sendMessage = async (messageText) => {
    const newMessage = { text: messageText, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    try {
      const response = await getChatbotResponse(messageText);
      const botReply = { text: response.reply, sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botReply]);
    } catch (error) {
      console.error('Error getting chatbot response:', error);
    }
  };

  return (
    <div>
          <div className="flex flex-col h-[80vh]">
            <div className="flex-1 overflow-y-auto p-4">
              <MessageList messages={messages} />
            </div>
            <div className="p-4 border-t">
              <Input type="text" placeholder="Ask anything!!" />
            </div>
          </div>
    </div>
  );
}

export default Chatbot;
