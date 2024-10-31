import { useState, useEffect } from 'react';
import { MyGoalItemType, NewGoalType } from '../types/myGoalItemTypes';
import { getData, postData, deleteData, putData } from '../util/api';

interface ApiResponse {
  id: number;
  userId: string;
  title: string;
  isFinished: boolean;
  progress: number;
  goalDate: Date;
}

const useMyGoal = (userId: string) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showOngoingGoals, setShowOngoingGoals] = useState(true);
  const [showCompletedGoals, setShowCompletedGoals] = useState(true);
  const [myGoals, setMyGoal] = useState<Array<MyGoalItemType>>([]);

  const openMyGoalCreator = () => setIsOpen(true);
  const closeMyGoalCreator = () => setIsOpen(false);

  // 목표 get
  const getMyGoal = async () => {
    try {
      const responseData = await getData<ApiResponse[]>('goals', {
        userId,
      });

      const filteredData: MyGoalItemType[] = responseData.map(
        ({ id, goalDate, title, progress }) => ({
          id,
          goalDate,
          title,
          progress,
        })
      );
      setMyGoal(filteredData);
    } catch {
      setMyGoal([]);
    }
  };

  useEffect(() => {
    getMyGoal();
  }, [userId]);

  // 목표 추가
  const addGoal = async (inputGoal: string, inputDeadline: Date) => {
    const newGoal = {
      userId: userId,
      title: inputGoal,
      progress: 0,
      goalDate: inputDeadline,
    };
    await postData<NewGoalType, void>(`goals`, newGoal);

    await getMyGoal();
  };

  // 목표 삭제
  const deleteGoal = async (no: number) => {
    await deleteData(`goals/${no}`, {});
    await getMyGoal();
  };

  // 목표 수정
  const editGoal = async (selectedGoal: MyGoalItemType) => {
    const editData = {
      id: selectedGoal.id,
      userId: userId,
      title: selectedGoal.title,
      progress: selectedGoal.progress,
      goalDate: selectedGoal.goalDate,
      isFinished: false,
    };
    await putData(`goals`, editData);
    await getMyGoal();
  };

  const handleSearch = (query: string) => {
    // const filteredGoals = initialGoals.filter((item) =>
    //   item.goal.toLowerCase().includes(query.toLowerCase())
    // );
    // setMyGoal(filteredGoals);
  };

  const completedGoals = myGoals.filter((goal) => goal.progress === 100);
  const ongoingGoals = myGoals.filter((goal) => goal.progress < 100);

  return {
    isOpen,
    openMyGoalCreator,
    closeMyGoalCreator,
    addGoal,
    deleteGoal,
    editGoal,
    handleSearch,
    showOngoingGoals,
    setShowOngoingGoals,
    showCompletedGoals,
    setShowCompletedGoals,
    completedGoals,
    ongoingGoals,
  };
};

export default useMyGoal;
