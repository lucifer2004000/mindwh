import React, { useState } from 'react';

const ChatbotPage = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (input.trim()) {
            setMessages([...messages, { text: input, sender: 'user' }]);
            setInput('');
            // Simulate a bot response
            setTimeout(() => {
                setMessages(prevMessages => [
                    ...prevMessages,
                    { text: "I'm here to help! How can I assist you today?", sender: 'bot' }
                ]);
            }, 1000);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Mental Wellness Chatbot</h1>
            <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-md">
                <div className="h-64 overflow-y-auto mb-4">
                    {messages.map((msg, index) => (
                        <div key={index} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                            <span className={`inline-block p-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
                                {msg.text}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="flex">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="border rounded-l-lg p-2 w-full"
                        placeholder="Type your message..."
                    />
                    <button onClick={handleSend} className="bg-blue-500 text-white rounded-r-lg p-2">
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatbotPage;