import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // useLocation 임포트
import useDiary from '../../hooks/useDiary'; // useDiary 훅 임포트
import { Diary } from '../../types/diaryTypes'; // Diary 타입 임포트

const DiaryContainer = () => {
    const { state } = useLocation(); // useLocation을 사용하여 state 가져오기
    const userId = state?.userId || 'Temp_ID'; // 사용자 ID 가져오기
    const { diaries, loading, addDiary, updateDiary, deleteDiary } = useDiary(userId);
    
    const [selectedEntry, setSelectedEntry] = useState<number | null>(null);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [currentDate, setCurrentDate] = useState('');
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleEntryClick = (index: number) => {
        const entry = diaries[index];
        setSelectedEntry(index);
        setTitle(entry.title);
        setContent(entry.content);
        setCurrentDate(new Date(entry.createdAt).toLocaleDateString());
    };

    const handleSave = async () => {
        try {
            if (selectedEntry !== null) {
                // 선택된 일기를 업데이트
                const updatedEntry: Omit<Diary, 'id' | 'createdAt'> = {
                    title,
                    content,
                };

                await updateDiary(diaries[selectedEntry].id, updatedEntry);
                setIsPopupOpen(false);
                console.log('일기가 수정되었습니다. ID:', diaries[selectedEntry].id);
            } else {
                // 새로운 일기 추가
                const newEntry: Omit<Diary, 'id' | 'createdAt'> = {
                    title,
                    content,
                };
                await addDiary(newEntry);
                setIsPopupOpen(false);
                console.log('다이어리가 추가되었습니다.');
            }
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

        const entryToDelete = diaries[selectedEntry];

        if (window.confirm('정말로 이 일기를 삭제하시겠습니까?')) {
            try {
                await deleteDiary(entryToDelete.id);
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

    const handleEditEntry = () => {
        if (selectedEntry === null) {
            alert('수정할 일기를 선택해주세요.');
            return;
        }

        // 선택된 일기의 정보를 팝업에 설정
        setTitle(diaries[selectedEntry].title);
        setContent(diaries[selectedEntry].content);
        setCurrentDate(new Date(diaries[selectedEntry].createdAt).toLocaleDateString());
        setIsPopupOpen(true); // 팝업 열기
    };

    return (
        <div className="min-h-screen p-12 bg-gray-100">
            <div className="w-5/6 h-[90vh] p-8 mx-auto bg-white rounded-lg shadow-lg">
                <div className="flex flex-col items-center mb-6">
                    <h1 className="mb-2 text-2xl font-extrabold text-center">일기</h1>
                    <h2 className="w-full mb-6 font-poppins font-normal text-[24px] leading-[36px] text-left" style={{ color: '#379AE6' }}>
                        Diary
                    </h2>
                </div>

                <div className="p-4 border rounded-lg h-[80%]">
                    <div className="flex h-full">
                        <div className="w-1/4 h-full pr-4 border-r">
                            <h2 className="mb-4 text-lg font-bold text-left" style={{ color: '#B2B2B2' }}>
                                List
                            </h2>

                            <ul className="h-[calc(100%-6rem)] overflow-y-auto">
                                {diaries.map((entry, index) => (
                                    <li
                                        key={entry.id}
                                        onClick={() => handleEntryClick(index)}
                                        className={`p-2 cursor-pointer font-poppins font-semibold text-[17px] ${selectedEntry === index ? 'bg-[#D3D3D3] shadow-text' : ''}`}
                                        style={{ color: '#2E4EA6', textAlign: 'left' }}>
                                        {entry.title}
                                    </li>
                                ))}
                            </ul>
                            <button
                                onClick={handleAddNewEntry}
                                className="w-full px-4 py-2 mt-4 text-white transition rounded-md hover:bg-blue-300"
                                style={{ backgroundColor: '#ADD8E6' }}>
                                새로운 일기 작성
                            </button>
                        </div>

                        <div className="w-3/4 h-full pl-4">
                            <div className="flex flex-col h-full p-4 border rounded-lg">
                                <p className="mb-2 text-left text-gray-500 font-poppins font-semibold text-[14px]">
                                    {currentDate || '날짜를 선택하세요'}
                                </p>
                                <input
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)} // 제목 수정 가능
                                    className="w-full p-2 mb-2 border rounded-md focus:outline-none font-poppins font-bold text-[25px] text-[#00227E]"
                                />
                                <textarea
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)} // 내용 수정 가능
                                    className="w-full flex-grow p-2 border rounded-md resize-none focus:outline-none font-poppins font-medium text-[17px] text-[#62697D]"
                                />
                                <div className="mt-4 text-right">
                                    <button
                                        onClick={handleEditEntry}
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

export default DiaryContainer;
