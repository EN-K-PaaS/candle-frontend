import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import useEmotionAnalysis from '../../hooks/useEmotionAnalysis';

const EmotionAnalysisContainer = () => {
  const userId = localStorage.getItem('userId') || 'Temp_ID'; // 사용자 ID 가져오기
  const { emotionsLastMonth, emotionsLastDay, dailyTaskRate, loading } = useEmotionAnalysis(userId);

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
          emotionsLastMonth?.positive || 0,
          emotionsLastMonth?.neutral || 0,
          emotionsLastMonth?.negative || 0,
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

  if (loading) {
    return <div>로딩 중...</div>; // 로딩 중 메시지
  }

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="w-3/4 p-6 mx-auto bg-white rounded-lg shadow-lg" style={{ height: '90vh' }}>
        <h1 className="mb-2 text-2xl font-extrabold">나의 감정변화 분석</h1>
        <h2 className="mb-6 text-lg font-bold text-left text-blue-500">ANALYSIS</h2>

        <div className="p-6 mb-8 bg-white border border-gray-300 rounded-lg shadow-md">
          <h2 className="mb-4 text-lg font-bold text-left" style={{ color: '#98C2CF' }}>
            체크리스트 달성률
          </h2>
          <div className="grid grid-cols-7 gap-2 text-center">
            {dailyTaskRate && Object.entries(dailyTaskRate).map(([day, completion]) => (
              <div key={day} className="p-4 bg-white border border-gray-300 rounded-xl">
                <p className="font-bold">{day}</p>
                <p className={`${getColorForCompletion(completion)} text-xl font-bold`}>{completion}%</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex-1 p-4 border rounded-lg shadow-md" style={{ height: '400px' }}>
            <h2 className="mb-4 text-lg font-bold text-left" style={{ color: '#98C2CF' }}>
              지난달의 감정 분석
            </h2>

            <div className="flex items-center">
              <ul className="mr-8 text-left">
                <li>
                  <div style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: '#3B82F6', marginRight: '8px' }}></div>
                  긍정: <span className="text-blue-500">{emotionsLastMonth?.positive || 0}%</span>
                </li>
                <li>
                  <div style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: '#A855F7', marginRight: '8px' }}></div>
                  중립: <span className="text-purple-500">{emotionsLastMonth?.neutral || 0}%</span>
                </li>
                <li>
                  <div style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: '#EC4899', marginRight: '8px' }}></div>
                  부정: <span className="text-pink-500">{emotionsLastMonth?.negative || 0}%</span>
                </li>
              </ul>

              <div style={{ width: '200px', height: '200px' }}>
                <Pie data={pieData} options={pieOptions} />
              </div>
            </div>
          </div>

          <div className="flex-1 p-4 border rounded-lg shadow-md">
            <h2 className="mb-4 text-lg font-bold text-left" style={{ color: '#98C2CF' }}>
              어제의 감정 분석
            </h2>

            <ul className="flex flex-col gap-2">
              <li className="flex items-center">
                <span className="w-20 mr-2">긍정:</span>
                <div className="relative w-full h-6 bg-gray-200 rounded-full">
                  <div className="h-6 text-center text-white bg-blue-500 rounded-full" style={{ width: `${emotionsLastDay?.positive || 0}%` }}>
                    {emotionsLastDay?.positive || 0}%
                  </div>
                </div>
              </li>

              <li className="flex items-center">
                <span className="w-20 mr-2">중립:</span>
                <div className="relative w-full h-6 bg-gray-200 rounded-full">
                  <div className="h-6 text-center text-white bg-yellow-500 rounded-full" style={{ width: `${emotionsLastDay?.neutral || 0}%` }}>
                    {emotionsLastDay?.neutral || 0}%
                  </div>
                </div>
              </li>

              <li className="flex items-center">
                <span className="w-20 mr-2">부정:</span>
                <div className="relative w-full h-6 bg-gray-200 rounded-full">
                  <div className="h-6 text-center text-white bg-red-500 rounded-full" style={{ width: `${emotionsLastDay?.negative || 0}%` }}>
                    {emotionsLastDay?.negative || 0}%
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex-1 p-4 border rounded-lg shadow-md">
            <h2 className="mb-4 text-lg font-bold text-left" style={{ color: '#98C2CF' }}>
              한줄 응원의 멘트
            </h2>
            <p className="text-left text-gray-700">{getSupportiveMessage()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmotionAnalysisContainer;
