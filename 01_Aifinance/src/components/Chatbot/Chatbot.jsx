import { useState } from "react";
import "./Chatbot.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const newMessage = { text: input, sender: "user" };
    setMessages([...messages, newMessage]);

    // Simple chatbot logic
    const botReplies = {
      "hello": "Hey there! What do you need help with?",
      "how are you": "I’m doing great! Thanks for asking.",
      "bye": "Goodbye! Have a wonderful day!"
    };

    const responseText = botReplies[input.toLowerCase()] || "I’m not sure, but I'm learning!";
    setTimeout(() => {
      setMessages([...messages, newMessage, { text: responseText, sender: "bot" }]);
    }, 800);

    setInput("");
  };

  return (
    <div className="chatbot">
      <h2>AI Chat Assistant</h2>
      <div className="chatbox">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Type a message..." 
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default Chatbot;