import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-6 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <p className="font-bold">Welcome to Mind Wellness Hub</p>
                    <p>Contact us at: motivemint@gmail.com</p>
                </div>
                <div>
                    <p className="font-bold">Quick Links</p>
                    <ul>
                        <li><a href="#test" className="hover:underline">Test</a></li>
                        <li><a href="#resources" className="hover:underline">Resources</a></li>
                        <li><a href="#programs" className="hover:underline">Self-help Programs</a></li>
                        <li><a href="#dashboard" className="hover:underline">Dashboard</a></li>
                        <li><a href="#interact" className="hover:underline">Interact with Professionals</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;