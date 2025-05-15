import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-black text-white p-4 flex justify-between items-center">
            <div className="text-xl font-bold">Mind Wellness Hub</div>
            <div className="space-x-4">
                <a href="#test" className="hover:underline">Test</a>
                <a href="#resources" className="hover:underline">Resources</a>
                <a href="#programs" className="hover:underline">Self-help Programs</a>
                <a href="#dashboard" className="hover:underline">Dashboard</a>
                <a href="#login" className="hover:underline">Login</a>
                <a href="#interact" className="hover:underline">Interact with Professionals</a>
            </div>
        </nav>
    );
};

export default Navbar;