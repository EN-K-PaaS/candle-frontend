<<<<<<< HEAD
import { useState } from 'react';
import { MyGoalItemType } from '../MyGoalContainer';
import MyGoalEditor from './MyGoalEditor';

type MyGoalItemProps = {
  myGoals: Array<MyGoalItemType>;
  deleteGoal: (no: number) => void;
  editGoal: (goal: MyGoalItemType) => void;
=======
import { useState } from "react";
import { MyGoalItemType } from "../MyGoalContainer";
import MyGoalEditor from "./MyGoalEditor";

type MyGoalItemProps = {
  myGoals: Array<MyGoalItemType>;
  deleteGoal: (no: number) => void;
<<<<<<< HEAD
  editGoal: (no: number, progress: number, deadline: Date) => void;
>>>>>>> e3ca5d8 (Refactor: MyGoal.tsx를 MyGoalItem.tsx로 수정함)
=======
  editGoal: (goal: MyGoalItemType) => void;
>>>>>>> d6785cd (Feat: ArrowButton, MyGoalList파일 추가, MyGoalContainer에 processing과 completed나눌 수 있도록 하는 부분 추가)
};

const MyGoalItem = (props: MyGoalItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState<MyGoalItemType | null>(null);

  const openMyGoalEditor = (item: MyGoalItemType) => {
    setSelectedGoal(item);
    setIsOpen(true);
  };
  const closeMyGoalEditor = () => {
    setIsOpen(false);
    setSelectedGoal(null);
  };

  const setStatus = (progress: number) => {
<<<<<<< HEAD
    if (progress < 100) return 'processing';
    return 'completed';
  };

  const setStatusColor = (progress: number) => {
    if (progress < 100) return 'text-gold border border-gold';
    return 'text-darkGreen border border-darkGreen';
=======
    if (progress < 100) return "processing";
    return "completed";
  };

  const setStatusColor = (progress: number) => {
    if (progress < 100) return "text-gold border border-gold";
    return "text-darkGreen border border-darkGreen";
>>>>>>> e3ca5d8 (Refactor: MyGoal.tsx를 MyGoalItem.tsx로 수정함)
  };

  return (
    <div>
<<<<<<< HEAD
<<<<<<< HEAD
      {props.myGoals.map((item) => (
        <div
          key={item.no}
          className="relative flex items-center w-2/3 h-16 p-4 mx-auto bg-white border border-gray-300 rounded-sm">
          <div className="flex items-center">
            <span className={'text-xs absolute left-7 font-semibold'}>
=======
      {props.myGoal.map((item) => (
=======
      {props.myGoals.map((item) => (
>>>>>>> d6785cd (Feat: ArrowButton, MyGoalList파일 추가, MyGoalContainer에 processing과 completed나눌 수 있도록 하는 부분 추가)
        <div
          key={item.no}
          className="relative flex items-center w-2/3 h-16 p-4 mx-auto bg-white border border-gray-300 rounded-sm"
        >
          <div className="flex items-center">
            <span className={"text-xs absolute left-7 font-semibold"}>
>>>>>>> e3ca5d8 (Refactor: MyGoal.tsx를 MyGoalItem.tsx로 수정함)
              {item.goal}
            </span>
          </div>
          <span
            className={
<<<<<<< HEAD
              'border rounded-lg text-[10px] absolute right-72 font-balck'
            }>
=======
              "border rounded-lg text-[10px] absolute right-72 font-balck"
            }
          >
>>>>>>> e3ca5d8 (Refactor: MyGoal.tsx를 MyGoalItem.tsx로 수정함)
            {item.deadline.toLocaleDateString()}
          </span>

          <span
            className={`${setStatusColor(
              item.progress
<<<<<<< HEAD
            )} rounded-xl text-[10px] absolute right-45 p-1 `}>
=======
            )} rounded-xl text-[10px] absolute right-45 p-1 `}
          >
>>>>>>> e3ca5d8 (Refactor: MyGoal.tsx를 MyGoalItem.tsx로 수정함)
            {setStatus(item.progress)}
          </span>

          <div className="absolute w-20 h-1 rounded-lg right-16 bg-neutral-200 bg-pastelBlue">
            <div
              className={`h-1 bg-blue-500 rounded-lg`}
<<<<<<< HEAD
              style={{ width: `${item.progress}%` }}></div>
=======
              style={{ width: `${item.progress}%` }}
            ></div>
>>>>>>> e3ca5d8 (Refactor: MyGoal.tsx를 MyGoalItem.tsx로 수정함)
          </div>

          <img
            src="/icons/pencil-icon.png"
            className="absolute w-3 h-3 cursor-pointer right-4"
            alt="편집 아이콘"
            onClick={() => openMyGoalEditor(item)}
          />
        </div>
      ))}

      {isOpen && selectedGoal && (
        <MyGoalEditor
<<<<<<< HEAD
<<<<<<< HEAD
          goal={selectedGoal}
=======
          no={selectedGoal.no}
          progress={selectedGoal.progress}
          deadline={selectedGoal.deadline}
>>>>>>> e3ca5d8 (Refactor: MyGoal.tsx를 MyGoalItem.tsx로 수정함)
=======
          goal={selectedGoal}
>>>>>>> d6785cd (Feat: ArrowButton, MyGoalList파일 추가, MyGoalContainer에 processing과 completed나눌 수 있도록 하는 부분 추가)
          onClose={closeMyGoalEditor}
          deleteGoal={props.deleteGoal}
          editGoal={props.editGoal}
        />
      )}
    </div>
  );
};

export default MyGoalItem;
