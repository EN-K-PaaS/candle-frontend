import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Diary from './pages/Diary';
import './App.css';
import EmotionAnalysis from './pages/Emotion_Analysis';

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/diary" element={<Diary />} />
                    <Route path="/emotionanalysis" element={<EmotionAnalysis />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
