import { useState, useEffect } from 'react';
import { getData, postData, deleteData, putData } from '../util/api';
import {
  DailyChecklistItemType,
  NewPlanType,
} from '../types/dailyChecklistTypes';

const useDailyChecklist = (userId: string) => {
  const [dailyChecklist, setDailyChecklist] = useState<
    Array<DailyChecklistItemType>
  >([]);
  const [isOpen, setIsOpen] = useState(false);

  // 체크리스트 생성기 열기/닫기
  const openDailyChecklistCreator = () => setIsOpen(true);
  const closeDailyChecklistCreator = () => setIsOpen(false);

  // 정렬된 체크리스트 반환
  const sortedDailyChecklist = [...dailyChecklist].sort(
    (a, b) => Number(a.isFinished) - Number(b.isFinished)
  );

  // 데일리체크리스트 get
  const getChecklist = async () => {
    const checklistData = await getData<DailyChecklistItemType[]>(
      'daily-tasks',
      { userId }
    );
    setDailyChecklist(checklistData);
  };

  useEffect(() => {
    getChecklist();
  }, [userId]);

  // 데일리체크리스트 추가
  const addPlan = async (inputPlan: string, inputImportance: number) => {
    const newPlan = {
      userId: userId,
      title: inputPlan,
      priority: inputImportance,
    };
    await postData<NewPlanType, void>(`daily-tasks`, newPlan);

    await getChecklist();
  };

  // 데일리체크리스트 삭제
  const deletePlan = async (no: number) => {
    await deleteData(`daily-tasks/${no}`, {});
    await getChecklist();
  };

  // 데일리체크리스트 토글
  const toggleDone = async (id: number) => {
    await putData(`daily-tasks/${id}/complete`, {});
    await getChecklist();
  };

  return {
    dailyChecklist,
    sortedDailyChecklist,
    isOpen,
    openDailyChecklistCreator,
    closeDailyChecklistCreator,
    addPlan,
    deletePlan,
    toggleDone,
  };
};

export default useDailyChecklist;
