import React, { useState } from 'react';


function Messaging() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    // Send message to backend
    setMessages([...messages, newMessage]);
    setNewMessage('');
  };

  return (
    <div className="messaging">
      <h3>Messaging</h3>
      <div className="message-list">
        {messages.map((message, index) => (
          <div key={index} className="message-item">
            <p>{message}</p>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
}

export default Messaging;
