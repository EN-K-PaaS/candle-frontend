import { useState, useEffect } from "react";
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

  // 데일리체크리스트 get
  const fetchChecklist = async () => {
    const checklistData = await getData<DailyChecklistItemType[]>(
      "daily-tasks",
      { userId }
    );
    setDailyChecklist(checklistData);
  };

  useEffect(() => {
    fetchChecklist();
  }, [userId]);

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

  return { dailyChecklist, addPlan, deletePlan, toggleDone };
};

export default useDailyChecklist;
