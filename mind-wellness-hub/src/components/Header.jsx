import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Mind Wellness Hub</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><Link to="/" className="hover:underline">Home</Link></li>
                        <li><Link to="/self-check" className="hover:underline">Self-Check</Link></li>
                        <li><Link to="/chatbot" className="hover:underline">Chatbot</Link></li>
                        <li><Link to="/book-session" className="hover:underline">Book a Session</Link></li>
                        <li><Link to="/mindfulness-resources" className="hover:underline">Mindfulness Resources</Link></li>
                        <li><Link to="/community-forum" className="hover:underline">Community Forum</Link></li>
                        <li><Link to="/sos" className="hover:underline">SOS</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;