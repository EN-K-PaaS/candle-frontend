import React, { useState } from "react";

const Diary = () => {
  const [diaryEntries, setDiaryEntries] = useState([
    "네 내리는 날의 젖은 하늘",
    "느려진 구름같은 하루",
    "조용한 날, 집중의 시간",
    "작은 행복을 찾은 하루",
  ]);
  const [selectedEntry, setSelectedEntry] = useState(2);
  const [title, setTitle] = useState("조용한 날, 집중의 시간");
  const [content, setContent] = useState(
    "오늘 하루는 집중과 다짐이 시작되었다. 그러나 조용한 집중은 내게 많은 생각과 계획을 정리해주었다..."
  );
  const [popupOpen, setPopupOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState("");

  const handleSave = () => {
    setPopupOpen(true);
  };

  const handleAddEntry = () => {
    const today = new Date().toISOString().split("T")[0];
    setCurrentDate(today);
    setTitle("");
    setContent("");
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="w-3/4 p-6 mx-auto bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">일기</h1>
          <button
            onClick={handleAddEntry}
            className="px-4 py-2 text-white transition bg-blue-500 rounded-md hover:bg-blue-600"
          >
            +
          </button>
        </div>

        <div className="flex">
          {/* Diary List */}
          <div className="w-1/4 pr-4 border-r">
            <h2 className="mb-4 text-lg font-bold">List</h2>
            <ul className="h-64 overflow-y-scroll">
              {diaryEntries.map((entry, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setSelectedEntry(index);
                    setTitle(entry);
                  }}
                  className={`p-2 cursor-pointer ${
                    selectedEntry === index ? "bg-blue-100" : ""
                  }`}
                >
                  {entry}
                </li>
              ))}
            </ul>
          </div>

          {/* Diary Content */}
          <div className="w-3/4 pl-4">
            <h2 className="mb-4 text-lg font-bold">DIARY</h2>
            <div className="p-4 border rounded-lg">
              <p className="mb-2 text-gray-500">
                {currentDate || "2024-09-13"}
              </p>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="제목을 입력하세요"
                className="w-full p-2 mb-4 border-b focus:outline-none "
              />
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="내용을 입력하세요"
                className="w-full h-40 p-2 border rounded-md resize-none focus:outline-none "
              />
              <div className="mt-4 text-right">
                <button
                  onClick={handleSave}
                  className="px-4 py-2 text-white transition bg-blue-500 rounded-md hover:bg-blue-600"
                >
                  저장
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Popup for Emotional Analysis */}
        {popupOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h2 className="mb-4 text-lg font-bold">감정 분석</h2>
              <p>
                오늘은 차분함과 집중력이 높은 하루였네요! 스스로에게 위로와
                격려를 주세요.
              </p>
              <div className="mt-4 text-right">
                <button
                  onClick={() => setPopupOpen(false)}
                  className="px-4 py-2 text-white transition bg-blue-500 rounded-md hover:bg-blue-600"
                >
                  닫기
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Diary;
