import { useState, useEffect } from 'react';
import { getData } from '../util/api'; 

const useEmotionAnalysis = (userId: string) => {
    const [emotionsLastMonth, setEmotionsLastMonth] = useState<{ positive: number; neutral: number; negative: number } | null>(null);
    const [emotionsLastDay, setEmotionsLastDay] = useState<{ positive: number; neutral: number; negative: number } | null>(null);
    const [dailyTaskRate, setDailyTaskRate] = useState<{ monday: number; tuesday: number; wednesday: number; thursday: number; friday: number; saturday: number; sunday: number } | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const getEmotionsLastMonth = async () => {
        setLoading(true);
        try {
            const fetchedEmotions = await getData<{ positive: number; neutral: number; negative: number }>(`api/v1/emotions/last-month/${userId}`);
            console.log('Fetched Emotions Last Month:', fetchedEmotions);
            setEmotionsLastMonth(fetchedEmotions);
        } catch (error) {
            console.error('감정 분석(지난 한 달) 조회 오류:', error);
        } finally {
            setLoading(false);
        }
    };

    const getEmotionsLastDay = async () => {
        setLoading(true);
        try {
            const fetchedEmotions = await getData<{ positive: number; neutral: number; negative: number }>(`api/v1/emotions/last_day/${userId}`);
            console.log('Fetched Emotions Last Day:', fetchedEmotions);
            setEmotionsLastDay(fetchedEmotions);
        } catch (error) {
            console.error('감정 분석(지난 하루) 조회 오류:', error);
        } finally {
            setLoading(false);
        }
    };

    const getDailyTaskRate = async () => {
        setLoading(true);
        try {
            const fetchedRate = await getData<{ monday: number; tuesday: number; wednesday: number; thursday: number; friday: number; saturday: number; sunday: number }>(`api/v1/daily-tasks/rate/${userId}`);
            console.log('Fetched Daily Task Rate:', fetchedRate);
            setDailyTaskRate(fetchedRate);
        } catch (error) {
            console.error('체크리스트 달성률 조회 오류:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getEmotionsLastMonth();
        getEmotionsLastDay();
        getDailyTaskRate();
    }, [userId]);

    return {
        emotionsLastMonth,
        emotionsLastDay,
        dailyTaskRate,
        loading,
    };
};

export default useEmotionAnalysis;
