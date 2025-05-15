import React, { useState } from 'react';

const SelfCheckPage = () => {
    const [score, setScore] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    const questions = [
        {
            question: "How often have you felt little interest or pleasure in doing things?",
            options: ["Not at all", "Several days", "More than half the days", "Nearly every day"]
        },
        {
            question: "How often have you felt down, depressed, or hopeless?",
            options: ["Not at all", "Several days", "More than half the days", "Nearly every day"]
        },
        {
            question: "How often have you had trouble falling or staying asleep, or sleeping too much?",
            options: ["Not at all", "Several days", "More than half the days", "Nearly every day"]
        },
        {
            question: "How often have you felt tired or had little energy?",
            options: ["Not at all", "Several days", "More than half the days", "Nearly every day"]
        },
        {
            question: "How often have you had a poor appetite or overeating?",
            options: ["Not at all", "Several days", "More than half the days", "Nearly every day"]
        }
    ];

    const handleOptionChange = (event, index) => {
        const value = event.target.value;
        setScore(prevScore => prevScore + parseInt(value));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Mental Health Self-Check</h1>
            {!submitted ? (
                <form onSubmit={handleSubmit}>
                    {questions.map((q, index) => (
                        <div key={index} className="mb-4">
                            <p className="font-semibold">{q.question}</p>
                            {q.options.map((option, i) => (
                                <label key={i} className="block">
                                    <input
                                        type="radio"
                                        name={`question${index}`}
                                        value={i}
                                        onChange={(e) => handleOptionChange(e, index)}
                                        className="mr-2"
                                    />
                                    {option}
                                </label>
                            ))}
                        </div>
                    ))}
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                        Submit
                    </button>
                </form>
            ) : (
                <div className="mt-4">
                    <h2 className="text-xl font-semibold">Your Score: {score}</h2>
                    <p className="mt-2">
                        {score < 5 ? "You seem to be doing well!" : "Consider reaching out for support."}
                    </p>
                </div>
            )}
        </div>
    );
};

export default SelfCheckPage;