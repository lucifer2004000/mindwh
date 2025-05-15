import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SelfCheckPage from './pages/SelfCheckPage';
import ChatbotPage from './pages/ChatbotPage';
import BookSessionPage from './pages/BookSessionPage';
import MindfulnessResourcesPage from './pages/MindfulnessResourcesPage';
import CommunityForumPage from './pages/CommunityForumPage';
import SOSPage from './pages/SOSPage';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/self-check" component={SelfCheckPage} />
            <Route path="/chatbot" component={ChatbotPage} />
            <Route path="/book-session" component={BookSessionPage} />
            <Route path="/mindfulness-resources" component={MindfulnessResourcesPage} />
            <Route path="/community-forum" component={CommunityForumPage} />
            <Route path="/sos" component={SOSPage} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;