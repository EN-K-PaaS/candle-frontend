import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import DailyChecklistContainer from './pages/DailyChecklist/DailyChecklistContainer';
import MyGoal from './pages/MyGoal/MyGoalContainer';
import Diary from './pages/Diary/index';
import EmotionAnalysis from './pages/Emotion_Analysis/index';
import Community from './pages/Community/Community';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar></NavBar>
        <Routes>
          <Route path="/dailyChecklist" element={<DailyChecklistContainer />} />
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
