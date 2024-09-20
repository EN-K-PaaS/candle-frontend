import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="flex items-center space-x-5">
          <img src="/images/candle_image.png" className="w-8 h-9" />
          <div className="text-black text-lg font-bold text-2xl">Candle</div>
        </div>
        <div className="space-x-0 md:space-x-4 mt-4 md:mt-0 font-medium text-sm">
          <ul className="flex flex-col md:flex-row list-none translate-y-1">
            <li className="px-3 py-1">
              <Link to="/dailyChecklist" className="flex hover:text-blue-300">
                <img
                  src="/icons/cheklist-icon.png"
                  className="w-5 h-5 mr-3"
                  alt="체크리스트 아이콘"
                />
                데일리 체크리스트
              </Link>
            </li>
            <li className="px-4 py-1">
              <Link to="/myGoal" className="flex hover:text-blue-300">
                <img
                  src="/icons/goal-icon.png"
                  className="w-5 h-5 mr-3"
                  alt="목표 아이콘"
                />
                나의 목표
              </Link>
            </li>
            <li className="px-4 py-1">
              <Link to="/diary" className="flex hover:text-blue-300">
                <img
                  src="/icons/diary-icon.png"
                  className="w-5 h-5 mr-3"
                  alt="일기 아이콘"
                />
                일기
              </Link>
            </li>
            <li className="px-4 py-1">
              <Link to="/emotionAnalysis" className="flex hover:text-blue-300">
                <img
                  src="/icons/analysis-icon.png"
                  className="w-5 h-5 mr-3"
                  alt="분석 아이콘"
                />
                나의 감정변화 분석
              </Link>
            </li>
            <li className="px-4 py-1">
              <Link to="/community" className="flex hover:text-blue-300">
                <img
                  src="/icons/community-icon.png"
                  className="w-5 h-5 mr-3"
                  alt="커뮤니티 아이콘"
                />
                마음 나누기
              </Link>
            </li>
            <div className="px-10"></div>
            <li className="px-5 py-2">
              <Link to="#">
                <img src="/icons/setting-icon.png" className="w-5 h-5" />
              </Link>
            </li>
            <li className="px-5 py-2">
              <Link to="#">
                <img src="/icons/bell-icon.png" className="w-5 h-5" />
              </Link>
            </li>
            <li className="px-5 py-0">
              <img src="/icons/profile-icon.png" className="w-8 h-" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
