import React from 'react';

const WhyTestSection = () => {
    return (
        <div className="bg-cream text-center py-10 px-4">
            <h2 className="text-2xl font-bold mb-6">Why this test is important for you?</h2>
            <p className="mb-6">
                Taking this test can help you better understand your mental health condition and
                guide you toward the right resources and support.
            </p>
            <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800">
                TAKE TEST
            </button>
        </div>
    );
};

export default WhyTestSection;
