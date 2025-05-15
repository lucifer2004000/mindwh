import React from 'react';

const SOSPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-3xl font-bold mb-4">Emergency Support</h1>
            <p className="text-lg mb-8">If you are in crisis or need immediate support, please contact one of the following resources:</p>
            <ul className="list-disc list-inside mb-8">
                <li className="mb-2">National Suicide Prevention Lifeline: <a href="tel:1-800-273-8255" className="text-blue-500">1-800-273-8255</a></li>
                <li className="mb-2">Crisis Text Line: Text "HELLO" to <span className="text-blue-500">741741</span></li>
                <li className="mb-2">SAMHSA National Helpline: <a href="tel:1-800-662-HELP" className="text-blue-500">1-800-662-HELP (4357)</a></li>
                <li className="mb-2">Emergency Services: Dial <span className="text-blue-500">911</span></li>
            </ul>
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                Panic Button
            </button>
        </div>
    );
};

export default SOSPage;