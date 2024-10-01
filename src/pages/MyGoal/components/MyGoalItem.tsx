import { useState } from "react";
import { MyGoalItemType } from "../MyGoalContainer";
import MyGoalEditor from "./MyGoalEditor";

type MyGoalItemProps = {
  myGoals: Array<MyGoalItemType>;
  deleteGoal: (no: number) => void;
  editGoal: (goal: MyGoalItemType) => void;
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
    if (progress < 100) return "processing";
    return "completed";
  };

  const setStatusColor = (progress: number) => {
    if (progress < 100) return "text-gold border border-gold";
    return "text-darkGreen border border-darkGreen";
  };

  return (
    <div>
      {props.myGoals.map((item) => (
        <div
          key={item.no}
          className="relative flex items-center w-2/3 h-16 p-4 mx-auto bg-white border border-gray-300 rounded-sm"
        >
          <div className="flex items-center">
            <span className={"text-xs absolute left-7 font-semibold"}>
              {item.goal}
            </span>
          </div>
          <span
            className={
              "border rounded-lg text-[10px] absolute right-72 font-balck"
            }
          >
            {item.deadline.toLocaleDateString()}
          </span>

          <span
            className={`${setStatusColor(
              item.progress
            )} rounded-xl text-[10px] absolute right-45 p-1 `}
          >
            {setStatus(item.progress)}
          </span>

          <div className="absolute w-20 h-1 rounded-lg right-16 bg-neutral-200 bg-pastelBlue">
            <div
              className={`h-1 bg-blue-500 rounded-lg`}
              style={{ width: `${item.progress}%` }}
            ></div>
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
          goal={selectedGoal}
          onClose={closeMyGoalEditor}
          deleteGoal={props.deleteGoal}
          editGoal={props.editGoal}
        />
      )}
    </div>
  );
};

export default MyGoalItem;
