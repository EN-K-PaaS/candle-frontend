import { useState, useEffect } from 'react';
import { getData, postData, putData, deleteData } from '../util/api';
import { Diary } from '../types/diaryTypes';

const useDiary = (userId: string) => {
    const [diaries, setDiaries] = useState<Diary[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const getDiaries = async () => {
        setLoading(true);
        try {
            const fetchedDiaries = await getData<Diary[]>(`diaries?userId=${userId}`);
            setDiaries(fetchedDiaries);
        } catch (error) {
            console.error('다이어리 조회 오류:', error);
        } finally {
            setLoading(false);
        }
    };

    const addDiary = async (newDiary: Omit<Diary, 'id' | 'createdAt'>) => {
        try {
            const createdDiary = await postData<Diary, Diary>('diaries', {
                ...newDiary,
                createdAt: new Date().toISOString(),
                id: ''
            });
            setDiaries((prev) => [...prev, createdDiary]);
        } catch (error) {
            console.error('다이어리 추가 오류:', error);
        }
    };

    const updateDiary = async (diaryId: string, updatedDiary: Omit<Diary, 'id' | 'createdAt'>) => {
        try {
            const updated = await putData<Diary>(`diaries/${diaryId}`, {
                ...updatedDiary,
                id: diaryId,
                createdAt: new Date().toISOString()
            });
            setDiaries((prev) => prev.map(diary => (diary.id === diaryId ? updated : diary) as Diary));
        } catch (error) {
            console.error('다이어리 수정 오류:', error);
        }
    };

    const deleteDiary = async (diaryId: string) => {
        try {
            await deleteData(`diaries/${diaryId}`);
            setDiaries((prev) => prev.filter(diary => diary.id !== diaryId));
        } catch (error) {
            console.error('다이어리 삭제 오류:', error);
        }
    };

    useEffect(() => {
        getDiaries();
    }, [userId]);

    return {
        diaries,
        loading,
        addDiary,
        updateDiary,
        deleteDiary,
    };
};

export default useDiary;



