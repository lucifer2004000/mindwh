import React from 'react';

const Card = ({ title, description, onClick }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 m-2 cursor-pointer hover:shadow-lg transition-shadow duration-300" onClick={onClick}>
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-700">{description}</p>
        </div>
    );
};

export default Card;