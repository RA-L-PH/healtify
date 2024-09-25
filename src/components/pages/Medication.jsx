function Medication({ messages }) {
    return (
      <div>
        {messages.map((message, index) => (
          <div key={index} className={message.sender === 'bot' ? 'bot-message' : 'user-message'}>
            <p>{message.text}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default Medication;
  