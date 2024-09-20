import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import DailyChecklist from "./pages/DailyChecklist";
import MyGoal from "./pages/MyGoal";
import Diary from "./pages/Diary";
import EmotionAnalysis from "./pages/EmotionAnalysis";
import Community from "./pages/Community";
import NavBar from "./components/NavBar";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <NavBar></NavBar>
        <Routes>
          <Route path="/dailyChecklist" element={<DailyChecklist />} />
          <Route path="/myGoal" element={<MyGoal />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/emotionAnalysis" element={<EmotionAnalysis />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
