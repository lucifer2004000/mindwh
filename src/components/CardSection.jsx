import React from 'react';

const CardSection = () => {
    const cards = [
        { title: 'Depression', description: 'Learn about symptoms and treatments.', link: '#' },
        { title: 'Anxiety', description: 'Understand anxiety and how to manage it.', link: '#' },
        { title: 'PTSD', description: 'Explore resources for PTSD recovery.', link: '#' },
    ];

    return (
        <div className="bg-white py-10 px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card, index) => (
                <div
                    key={index}
                    className="shadow-lg p-6 rounded hover:shadow-xl transition-shadow"
                >
                    <h2 className="text-xl font-bold mb-4">{card.title}</h2>
                    <p className="mb-4">{card.description}</p>
                    <a href={card.link} className="text-blue-500 hover:underline">
                        LEARN MORE...
                    </a>
                </div>
            ))}
        </div>
    );
};

export default CardSection;
