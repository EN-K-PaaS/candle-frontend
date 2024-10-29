import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import DailyChecklistContainer from './pages/DailyChecklist/DailyChecklistContainer';
import MyGoal from './pages/MyGoal/MyGoalContainer';
import Diary from './pages/Diary/DiaryContainer';
import EmotionAnalysis from './pages/Emotion_Analysis/EmotionAnalysisContainer';
import Community from './pages/Community/Community';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
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
