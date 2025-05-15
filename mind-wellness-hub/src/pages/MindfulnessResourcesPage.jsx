import React from 'react';

const MindfulnessResourcesPage = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Mindfulness Resources</h1>
            <p className="mb-4">
                Explore our curated list of mindfulness resources to help you find calm and balance in your daily life.
            </p>
            <h2 className="text-2xl font-semibold mb-2">Calming Music Playlists</h2>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <a href="https://example.com/playlist1" className="text-blue-500 hover:underline">Relaxing Piano Music</a>
                </li>
                <li>
                    <a href="https://example.com/playlist2" className="text-blue-500 hover:underline">Nature Sounds</a>
                </li>
                <li>
                    <a href="https://example.com/playlist3" className="text-blue-500 hover:underline">Meditation Music</a>
                </li>
            </ul>
            <h2 className="text-2xl font-semibold mb-2">Guided Meditations</h2>
            <ul className="list-disc list-inside">
                <li>
                    <a href="https://example.com/meditation1" className="text-blue-500 hover:underline">10-Minute Guided Meditation</a>
                </li>
                <li>
                    <a href="https://example.com/meditation2" className="text-blue-500 hover:underline">Body Scan Meditation</a>
                </li>
                <li>
                    <a href="https://example.com/meditation3" className="text-blue-500 hover:underline">Mindfulness Meditation</a>
                </li>
            </ul>
        </div>
    );
};

export default MindfulnessResourcesPage;