import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';

const HomePage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow p-4">
                <section className="text-center mb-8">
                    <h1 className="text-4xl font-bold">Welcome to Mind Wellness Hub</h1>
                    <p className="mt-4 text-lg">Your journey to mental wellness starts here.</p>
                </section>
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Card title="Self-Check" description="Assess your mental health with our self-check tool." link="/self-check" />
                    <Card title="Chatbot" description="Get instant advice from our mental wellness chatbot." link="/chatbot" />
                    <Card title="Book a Session" description="Schedule a session with a professional counselor." link="/book-session" />
                    <Card title="Mindfulness Resources" description="Explore resources for mindfulness and relaxation." link="/mindfulness-resources" />
                    <Card title="Community Forum" description="Join discussions and share experiences with others." link="/community-forum" />
                    <Card title="SOS" description="Find emergency contacts and support resources." link="/sos" />
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;