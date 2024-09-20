import React, { useState } from 'react';

const EmotionAnalysis = () => {
  const [checklistCompletion, setChecklistCompletion] = useState({
    MON: 50,
    TUE: 70,
    WED: 40,
    THU: 0,
    FRI: 0,
    SAT: 0,
    SUN: 0,
  });

  const [yesterdayEmotion] = useState({
    positive: 40,
    neutral: 40,
    negative: 20,
  });

  const [lastMonthEmotion] = useState({
    positive: 40,
    neutral: 40,
    negative: 20,
  });

  const getColorForCompletion = (value: number) => {
    return value >= 70 ? 'text-blue-500' : 'text-gray-500';
  };

  const getSupportiveMessage = () => {
    return "오늘 하루를 성실하게 보내며 스스로를 돌본 당신, 내일은 조금씩 더 나아가는 모습이 정말 멋져요! 😊";
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 mx-auto" style={{ height: '90vh' }}>
        <h1 className="text-2xl font-extrabold mb-2">나의 감정변화 분석</h1>
        <h2 className="text-lg font-bold text-blue-500 mb-6 text-left">ANALYSIS</h2>

        <div className="border border-gray-300 bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-lg font-bold mb-4 text-left" style={{ color: '#98C2CF' }}>체크리스트 달성률</h2>
          <div className="grid grid-cols-7 gap-2 text-center">
            {Object.entries(checklistCompletion).map(([day, completion]) => (
              <div
                key={day}
                className="border border-gray-300 bg-white rounded-xl p-4"
              >
                <p className="font-bold">{day}</p>
                <p className={`${getColorForCompletion(completion)} text-xl font-bold`}>
                  {completion}%
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
  {/* Left Section: Last Month's Emotion Analysis */}
  <div className="flex-1 p-4 border rounded-lg shadow-md" style={{ height: '400px' }}>
    <h2 className="text-lg font-bold mb-4 text-left" style={{ color: '#98C2CF' }}>지난 달의 감정 분석</h2>
    <div className="flex justify-center">
      
    </div>
  </div>
  

          {/* Right Section: Yesterday's Emotion Analysis and Encouragement */}
          <div className="flex-1 p-4 border rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-4 text-left" style={{ color: '#98C2CF' }}>어제의 감정 분석</h2>
            <ul>
              <li>긍정: <span className="text-blue-500">{yesterdayEmotion.positive}%</span></li>
              <li>중립: <span className="text-yellow-500">{yesterdayEmotion.neutral}%</span></li>
              <li>부정: <span className="text-red-500">{yesterdayEmotion.negative}%</span></li>
            </ul>
            <div className="mt-4">
              <h2 className="text-lg font-bold mb-4 text-left" style={{ color: '#98C2CF' }}>한줄 응원의 멘트</h2>
              <p className="text-gray-700">오늘도 힘내세요! 당신은 할 수 있습니다!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmotionAnalysis;