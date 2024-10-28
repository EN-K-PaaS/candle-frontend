import { useState } from "react";
import { getData, postData, deleteData, putData } from "../util/api";
import {
  DailyChecklistItemType,
  NewPlanType,
  Importance,
} from "../types/dailyChecklistTypes";

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
  const fetchChecklist = async () => {
    const checklistData = await getData<DailyChecklistItemType[]>(
      "daily-tasks",
      { userId }
    );
    setDailyChecklist(checklistData);
  };

  // 데일리체크리스트 추가
  const addPlan = async (inputPlan: string, inputImportance: Importance) => {
    const newPlan = {
      userId: userId,
      title: inputPlan,
      priority: inputImportance,
    };

    await postData<NewPlanType, void>(`daily-tasks/${userId}`, newPlan);
    await fetchChecklist();
  };

  // 데일리체크리스트 삭제
  const deletePlan = async (no: number) => {
    await deleteData(`daily-tasks/${no}`, { userId });
    await fetchChecklist();
  };

  // 데일리체크리스트 토글
  const toggleDone = async (id: number) => {
    const data = { isFinished: true };

    await putData(`daily-tasks/${id}/complete`, data, { userId });
    await fetchChecklist();
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
