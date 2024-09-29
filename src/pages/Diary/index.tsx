import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Diary = () => {
    const [diaryEntries, setDiaryEntries] = useState([
        { id: 1, title: '더미 제목 1', content: '더미 본문 1', date: '2024-09-13' },
        { id: 2, title: '더미 제목 2', content: '더미 본문 2', date: '2024-09-14' },
        { id: 3, title: '더미 제목 3', content: '더미 본문 3', date: '2024-09-13' },
        { id: 4, title: '더미 제목 4', content: '더미 본문 4', date: '2024-09-14' },
        { id: 5, title: '더미 제목 5', content: '더미 본문 5', date: '2024-09-13' },
        { id: 6, title: '더미 제목 6', content: '더미 본문 6', date: '2024-09-14' },
        { id: 7, title: '더미 제목 7', content: '더미 본문 7', date: '2024-09-13' },
        { id: 8, title: '더미 제목 8', content: '더미 본문 8', date: '2024-09-14' },
        { id: 9, title: '더미 제목 9', content: '더미 본문 9', date: '2024-09-13' },
        { id: 10, title: '더미 제목 10', content: '더미 본문 10', date: '2024-09-14' },
    ]);
    const [selectedEntry, setSelectedEntry] = useState<number | null>(null);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        // Fetch all diary entries when the component mounts
        const fetchDiaryEntries = async () => {
            try {
                const response = await axios.get('/api/post/diary', {
                    params: { userId: '회원 아이디' },
                });
                setDiaryEntries(response.data);
            } catch (error) {
                console.error('Error fetching diary entries:', error);
            }
        };

        fetchDiaryEntries();
    }, []);

    const handleEntryClick = (index: number) => {
        const entry = diaryEntries[index];
        setSelectedEntry(index);
        setTitle(entry.title);
        setContent(entry.content);
        setCurrentDate(entry.date);
    };

    const handleSave = async () => {
        try {
            const response = await axios.post('/api/post/diary', {
                userId: '회원 아이디',
                title,
                content,
                date: currentDate,
                // Add photo parameter if needed
            });
            console.log('Diary saved with ID:', response.data.diaryId);
        } catch (error) {
            console.error('Error saving diary entry:', error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 mx-auto" style={{ height: '90vh' }}>
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-extrabold mb-2">일기</h1>
                    <h2 className="text-lg font-bold text-blue-500 mb-6 text-left">Diary</h2>
                </div>

                <div className="flex">
                    {/* Diary List */}
                    <div className="w-1/4 border-r pr-4">
                        <h2 className="text-lg font-bold mb-4" style={{ color: '#B2B2B2' }}>
                            List
                        </h2>

                        <ul className="h-64 overflow-y-scroll">
                            {diaryEntries.map((entry, index) => (
                                <li
                                    key={entry.id}
                                    onClick={() => handleEntryClick(index)}
                                    className={`p-2 cursor-pointer ${selectedEntry === index ? 'bg-blue-100' : ''}`}
                                    style={{ color: '#2E4EA6' }}
                                >
                                    {entry.title}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Diary Content */}
                    <div className="w-3/4 pl-4">
                        <div className="border p-4 rounded-lg">
                            <p className="text-gray-500 mb-2 text-left">
                                {currentDate || 'List에서 제목을 선택해주세요'}
                            </p>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder=""
                                className="w-full p-2 mb-4 border-b focus:outline-none focus:border-blue-500"
                            />
                            <textarea
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                placeholder=""
                                className="w-full h-40 p-2 border rounded-md resize-none focus:outline-none focus:border-blue-500"
                            />
                            <div className="text-right mt-4">
                                <button
                                    onClick={handleSave}
                                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                                >
                                    저장
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Diary;
