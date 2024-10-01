import { useState } from "react";
import MyGoalCreator from "./components/MyGoalCreator";
import SearchBar from "./components/SearchBar";
import MyGoalList from "./components/MyGoalList";

export type MyGoalItemType = {
  no: number;
  goal: string;
  deadline: Date;
  progress: number;
};

const MyGoalContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showOngoingGoals, setShowOngoingGoals] = useState(true);
  const [showCompletedGoals, setShowCompletedGoals] = useState(true);

  const openMyGoalCreator = () => setIsOpen(true);
  const closeMyGoalCreator = () => setIsOpen(false);

  const [myGoals, setMyGoal] = useState<Array<MyGoalItemType>>([
    { no: 1, goal: "청소하기", deadline: new Date("2024-10-01"), progress: 20 },
    { no: 2, goal: "책 읽기", deadline: new Date("2024-10-05"), progress: 50 },
    { no: 3, goal: "과제하기", deadline: new Date("2024-09-30"), progress: 80 },
    {
      no: 4,
      goal: "운동하기",
      deadline: new Date("2024-10-02"),
      progress: 100,
    },
  ]);

  const addGoal = (inputGoal: string, inputDeadline: Date) => {
    const newMyGoal = [
      ...myGoals,
      {
        no: myGoals.length + 1,
        goal: inputGoal,
        deadline: inputDeadline,
        progress: 0,
      },
    ];
    setMyGoal(newMyGoal);
  };

  const deleteGoal = (no: number) => {
    const newMyGoal = myGoals.filter((goal) => goal.no !== no);
    setMyGoal(newMyGoal);
  };

  const editGoal = (selectedGoal: MyGoalItemType) => {
    const newMyGoals = myGoals.map((goal) =>
      goal.no === selectedGoal.no
        ? {
            ...goal,
            progress: selectedGoal.progress,
            deadline: selectedGoal.deadline,
          }
        : goal
    );
    setMyGoal(newMyGoals);
  };

  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
    const filteredGoals = myGoals.filter((item) =>
      item.goal.toLowerCase().includes(query.toLowerCase())
    );
    setMyGoal(filteredGoals);
  };

  const completedGoals = myGoals.filter((goal) => goal.progress === 100);
  const ongoingGoals = myGoals.filter((goal) => goal.progress < 100);

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="flex items-center justify-between px-20">
        <div className="text-2xl font-black text-black">나의 목표</div>
        <div>
          <button
            onClick={openMyGoalCreator}
            className="px-3 py-1 mr-4 text-white rounded-lg bg-buttonBlue"
          >
            + create New Goal
          </button>
        </div>
      </div>

      <div className="m-5 translate-x-14 ">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="w-2/3 px-10 pt-8 pb-10 mx-auto bg-white border border-gray-300 rounded-lg ">
        <MyGoalList
          status="PROCESSING"
          listLength={ongoingGoals.length}
          onClick={() => setShowOngoingGoals(!showOngoingGoals)}
          isUp={showOngoingGoals}
          goals={ongoingGoals}
          deleteGoal={deleteGoal}
          editGoal={editGoal}
        />
      </div>
      <div className="pt-[50px]">
        <div className="w-2/3 px-10 pt-8 pb-10 mx-auto bg-white border border-gray-300 rounded-lg ">
          <MyGoalList
            status="COMPLETED"
            listLength={completedGoals.length}
            onClick={() => setShowCompletedGoals(!showCompletedGoals)}
            isUp={showCompletedGoals}
            goals={completedGoals}
            deleteGoal={deleteGoal}
            editGoal={editGoal}
          />
        </div>
      </div>
      {isOpen && (
        <MyGoalCreator onClose={closeMyGoalCreator} addGoal={addGoal} />
      )}
    </div>
  );
};

export default MyGoalContainer;
