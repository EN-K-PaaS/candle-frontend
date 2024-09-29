import { useState } from "react";
import MyGoalCreator from "./components/MyGoalCreator";
import MyGoal from "./components/MyGoal";
import SearchBar from "./components/SearchBar";

export type MyGoalItemType = {
  no: number;
  goal: string;
  deadline: Date;
  progress: number;
};

const MyGoalContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMyGoalCreator = () => setIsOpen(true);
  const closeMyGoalCreator = () => setIsOpen(false);

  const [myGoal, setMyGoal] = useState<Array<MyGoalItemType>>([
    { no: 1, goal: "청소하기", deadline: new Date("2024-10-01"), progress: 20 },
    { no: 2, goal: "책 읽기", deadline: new Date("2024-10-05"), progress: 50 },
    { no: 3, goal: "과제하기", deadline: new Date("2024-09-30"), progress: 80 },
    { no: 4, goal: "운동하기", deadline: new Date("2024-10-02"), progress: 10 },
  ]);

  const addGoal = (inputGoal: string, inputDeadline: Date) => {
    const newMyGoal = [
      ...myGoal,
      {
        no: myGoal.length + 1,
        goal: inputGoal,
        deadline: inputDeadline,
        progress: 0,
      },
    ];
    setMyGoal(newMyGoal);
  };

  const deleteGoal = (no: number) => {
    const newMyGoal = myGoal.filter((goal) => goal.no !== no);
    setMyGoal(newMyGoal);
  };

  const editGoal = (no: number, progress: number, deadline: Date) => {
    const newMyGoals = myGoal.map((goal) =>
      goal.no === no ? { ...goal, progress, deadline } : goal
    );
    setMyGoal(newMyGoals);
  };

  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
    const filteredGoals = myGoal.filter((item) =>
      item.goal.toLowerCase().includes(query.toLowerCase())
    );
    setMyGoal(filteredGoals);
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="flex items-center justify-between px-20">
        {" "}
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
      <div className="w-2/3 p-10 mx-auto bg-white border border-gray-300 rounded-lg ">
        <div className="flex">
          <h1 className="text-2xl text-yellow-500">Processing</h1>
          <div className="flex items-center justify-center p-2 ml-5 translate-y-2 bg-gray-200 rounded-2xl w-18 h-7">
            <span className="text-xs ">{myGoal.length} Goals</span>
          </div>
        </div>
        <div>
          <div className="font-bold w-2/3 h-12 relative mx-auto mt-5 border border-gray-300 rounded-t-lg text-[13px] bg-alabaster text-darkGray">
            <span className="absolute pt-3 left-7">이름</span>
            <span className="absolute pt-3 right-72">목표 날짜</span>
            <span className="absolute pt-3 right-48">상태</span>
            <span className="absolute pt-3 right-20">진행상황</span>
          </div>
          <MyGoal myGoal={myGoal} deleteGoal={deleteGoal} editGoal={editGoal} />
        </div>
      </div>

      {isOpen && (
        <MyGoalCreator onClose={closeMyGoalCreator} addGoal={addGoal} />
      )}
    </div>
  );
};

export default MyGoalContainer;
