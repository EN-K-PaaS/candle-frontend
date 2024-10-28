import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Diary = () => {
  const [diaryEntries, setDiaryEntries] = useState<
    Array<{
      id: number;
      title: string;
      content: string;
      image: string;
      createdAt: string;
    }>
  >([]);
  const [selectedEntry, setSelectedEntry] = useState<number | null>(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const fetchDiaryEntries = async () => {
      try {
        const response = await axios.get('/api/v1/diaries', {
          params: { userId: '회원 아이디' },
        });
        setDiaryEntries(response.data);
      } catch (error) {
        console.error('다이어리 항목 가져오기 오류:', error);
      }
    };

    fetchDiaryEntries();
  }, []);

  const handleEntryClick = (index: number) => {
    const entry = diaryEntries[index];
    setSelectedEntry(index);
    setTitle(entry.title);
    setContent(entry.content);
    setCurrentDate(new Date(entry.createdAt).toLocaleDateString());
  };

  const handleSave = async () => {
    try {
      const newEntry = {
        id: Date.now(),
        title,
        content,
        image: '',
        createdAt: new Date().toISOString(),
      };
      setDiaryEntries([...diaryEntries, newEntry]);
      setIsPopupOpen(false);
      console.log('다이어리가 로컬에 저장되었습니다. ID:', newEntry.id);

      // 실제 서버와의 통신 (API 구현 시 주석 해제)
      // const response = await axios.post('/api/v1/diaries', newEntry);
      // setDiaryEntries([...diaryEntries, response.data]);
      // setIsPopupOpen(false);
    } catch (error) {
      console.error('다이어리 항목 저장 오류:', error);
    }
  };

  const handleAddNewEntry = () => {
    setSelectedEntry(null);
    setTitle('');
    setContent('');
    setCurrentDate(new Date().toISOString().split('T')[0]);
    setIsPopupOpen(true);
  };

  const handleDelete = async () => {
    if (selectedEntry === null) {
      alert('삭제할 일기를 선택해주세요.');
      return;
    }

    const entryToDelete = diaryEntries[selectedEntry];

    if (window.confirm('정말로 이 일기를 삭제하시겠습니까?')) {
      try {
        await axios.delete(`/api/v1/diaries/${entryToDelete.id}`);

        const newEntries = diaryEntries.filter(
          (entry) => entry.id !== entryToDelete.id
        );
        setDiaryEntries(newEntries);
        setSelectedEntry(null);
        setTitle('');
        setContent('');
        setCurrentDate('');

        alert('일기가 성공적으로 삭제되었습니다.');
      } catch (error) {
        console.error('일기 삭제 중 오류 발생:', error);
        alert('일기 삭제 중 오류가 발생했습니다.');
      }
    }
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="w-3/4 p-6 mx-auto bg-white rounded-lg shadow-lg">
        <div className="flex flex-col items-center mb-6">
          <h1 className="mb-2 text-2xl font-extrabold text-center">일기</h1>
          <h2 className="w-full mb-6 text-lg font-bold text-left text-blue-500">
            Diary
          </h2>
        </div>

        <div className="p-4 border rounded-lg">
          <div className="flex">
            <div className="w-1/4 pr-4 border-r">
              <h2
                className="mb-4 text-lg font-bold"
                style={{ color: '#B2B2B2' }}>
                List
              </h2>

              <ul className="h-64 overflow-y-scroll">
                {diaryEntries.map((entry, index) => (
                  <li
                    key={entry.id}
                    onClick={() => handleEntryClick(index)}
                    className={`p-2 cursor-pointer ${selectedEntry === index ? 'bg-blue-100' : ''}`}
                    style={{ color: '#2E4EA6' }}>
                    {entry.title}
                  </li>
                ))}
              </ul>
              <button
                onClick={handleAddNewEntry}
                className="w-full px-4 py-2 mt-4 text-white transition bg-green-500 rounded-md hover:bg-green-600">
                새로운 일기 작성
              </button>
            </div>

            <div className="w-3/4 pl-4">
              <div className="p-4 border rounded-lg">
                <p className="mb-2 text-left text-gray-500">
                  {currentDate || '날짜를 선택하세요'}
                </p>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="제목을 입력하세요"
                  className="w-full p-2 mb-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="내용을 입력하세요"
                  className="w-full h-40 p-2 border rounded-md resize-none focus:outline-none focus:border-blue-500"
                />
                <div className="mt-4 text-right">
                  <button
                    onClick={handleSave}
                    className="px-4 py-2 mr-2 text-white transition bg-blue-500 rounded-md hover:bg-blue-600">
                    수정
                  </button>
                  <button
                    onClick={handleDelete}
                    className="px-4 py-2 text-white transition bg-red-500 rounded-md hover:bg-red-600">
                    삭제
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
          <div className="w-1/3 p-6 bg-white rounded-lg shadow-lg">
            <h2 className="mb-4 text-lg font-bold">새로운 일기 작성</h2>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="제목을 입력하세요"
              className="w-full p-2 mb-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="내용을 입력하세요"
              className="w-full h-40 p-2 border rounded-md resize-none focus:outline-none focus:border-blue-500"
            />
            <div className="mt-4 text-right">
              <button
                onClick={() => setIsPopupOpen(false)}
                className="px-4 py-2 mr-2 text-white transition bg-gray-500 rounded-md hover:bg-gray-600">
                취소
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 text-white transition bg-blue-500 rounded-md hover:bg-blue-600">
                저장
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Diary;
