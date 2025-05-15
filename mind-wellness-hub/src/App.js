import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CardSection from './components/CardSection';
import WhyTestSection from './components/WhyTestSection';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <CardSection />
            <WhyTestSection />
            <Footer />
        </div>
    );
}

export default App;
