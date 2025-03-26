import React from 'react';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import MainContent from '../organisms/MainContent';

const Home = ({ signOut }) => {
    return (
        <div className="app-container">
            <Header signOut={signOut} />
            <MainContent />
            <Footer />
        </div>
    );
};

export default Home;