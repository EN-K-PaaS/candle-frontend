import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

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
    return '오늘 하루를 성실하게 보내며 스스로를 돌본 당신, 내일은 조금씩 더 나아가는 모습이 정말 멋져요! 😊';
  };

  // 원형 차트를 위한 데이터
  const pieData = {
    labels: ['긍정', '중립', '부정'],
    datasets: [
      {
        data: [
          lastMonthEmotion.positive,
          lastMonthEmotion.neutral,
          lastMonthEmotion.negative,
        ],
        backgroundColor: ['#99CCFF', '#D3B8E3', '#FFB6C1'],
        borderColor: ['#FFFFFF'],
        borderWidth: 2,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-3/4 mx-auto"
        style={{ height: '90vh' }}>
        <h1 className="text-2xl font-extrabold mb-2">나의 감정변화 분석</h1>
        <h2 className="text-lg font-bold text-blue-500 mb-6 text-left">
          ANALYSIS
        </h2>

        <div className="border border-gray-300 bg-white p-6 rounded-lg shadow-md mb-8">
          <h2
            className="text-lg font-bold mb-4 text-left"
            style={{ color: '#98C2CF' }}>
            체크리스트 달성률
          </h2>
          <div className="grid grid-cols-7 gap-2 text-center">
            {Object.entries(checklistCompletion).map(([day, completion]) => (
              <div
                key={day}
                className="border border-gray-300 bg-white rounded-xl p-4">
                <p className="font-bold">{day}</p>
                <p
                  className={`${getColorForCompletion(completion)} text-xl font-bold`}>
                  {completion}%
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 p-4 border rounded-lg shadow-md style={{ height: '400px' }">
            <h2
              className="text-lg font-bold mb-4 text-left"
              style={{ color: '#98C2CF' }}>
              {' '}
              지난달의 감정 분석
            </h2>

            <div className="flex items-center">
              <ul className="mr-8 text-left">
                <li>
                  <div
                    style={{
                      display: 'inline-block',
                      width: '10px',
                      height: '10px',
                      backgroundColor: '#3B82F6',
                      marginRight: '8px',
                    }}></div>
                  긍정:{' '}
                  <span className="text-blue-500">
                    {lastMonthEmotion.positive}%
                  </span>
                </li>
                <li>
                  <div
                    style={{
                      display: 'inline-block',
                      width: '10px',
                      height: '10px',
                      backgroundColor: '#A855F7',
                      marginRight: '8px',
                    }}></div>
                  중립:{' '}
                  <span className="text-purple-500">
                    {lastMonthEmotion.neutral}%
                  </span>
                </li>
                <li>
                  <div
                    style={{
                      display: 'inline-block',
                      width: '10px',
                      height: '10px',
                      backgroundColor: '#EC4899',
                      marginRight: '8px',
                    }}></div>
                  부정:{' '}
                  <span className="text-pink-500">
                    {lastMonthEmotion.negative}%
                  </span>
                </li>
              </ul>

              <div style={{ width: '200px', height: '200px' }}>
                <Pie data={pieData} options={pieOptions} />
              </div>
            </div>
          </div>

          <div className="flex-1 p-4 border rounded-lg shadow-md">
            <h2
              className="text-lg font-bold mb-4 text-left"
              style={{ color: '#98C2CF' }}>
              어제의 감정 분석
            </h2>

            <ul className="flex flex-col gap-2">
              {/* 긍정 감정 막대 */}
              <li className="flex items-center">
                <span className="mr-2 w-20">긍정:</span>
                <div className="w-full h-6 bg-gray-200 rounded-full relative">
                  <div
                    className="h-6 bg-blue-500 rounded-full text-center text-white"
                    style={{ width: `${yesterdayEmotion.positive}%` }}>
                    {yesterdayEmotion.positive}%
                  </div>
                </div>
              </li>

              {/* 중립 감정 막대 */}
              <li className="flex items-center">
                <span className="mr-2 w-20">중립:</span>
                <div className="w-full h-6 bg-gray-200 rounded-full relative">
                  <div
                    className="h-6 bg-yellow-500 rounded-full text-center text-white"
                    style={{ width: `${yesterdayEmotion.neutral}%` }}>
                    {yesterdayEmotion.neutral}%
                  </div>
                </div>
              </li>

              {/* 부정 감정 막대 */}
              <li className="flex items-center">
                <span className="mr-2 w-20">부정:</span>
                <div className="w-full h-6 bg-gray-200 rounded-full relative">
                  <div
                    className="h-6 bg-red-500 rounded-full text-center text-white"
                    style={{ width: `${yesterdayEmotion.negative}%` }}>
                    {yesterdayEmotion.negative}%
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex-1 p-4 border rounded-lg shadow-md">
            <h2
              className="text-lg font-bold mb-4 text-left"
              style={{ color: '#98C2CF' }}>
              한줄 응원의 멘트
            </h2>
            <p className="text-gray-700 text-left">{getSupportiveMessage()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmotionAnalysis;
