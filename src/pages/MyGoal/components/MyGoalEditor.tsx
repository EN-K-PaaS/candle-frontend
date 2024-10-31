import { useState } from 'react';
import { MyGoalItemType } from '../../../types/myGoalItemTypes';

interface MyGoalEditorProps {
  goal: MyGoalItemType;
  onClose: () => void;
  editGoal: (goal: MyGoalItemType) => void;
  deleteGoal: (no: number) => void;
}

const MyGoalEditor = (props: MyGoalEditorProps) => {
  const [progress, setProgress] = useState<number>(props.goal.progress);
  const [deadline, setDeadline] = useState<Date>(props.goal.goalDate);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeadline(new Date(e.target.value));
  };

  const handleProgress = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.startsWith('0') && e.target.value.length > 1) {
      e.target.value = e.target.value.slice(1);
    }

    const value = Math.max(0, Math.min(100, Number(e.target.value)));
    setProgress(value);
  };

  const handleSubmit = () => {
    props.goal.progress = progress;
    props.goal.goalDate = deadline;
    props.editGoal(props.goal);
    props.onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
        <h1 className="mb-4 text-lg font-bold">Edit Goal</h1>
        <div className="w-30 h-0.5 my-4 bg-gray-200" />
        <div className="mb-4 mt-7">
          <label className="block mb-5 text-2xl font-extrabold text-textBlue">
            진행 정도
          </label>
          <input
            type="number"
            value={progress}
            min={0}
            max={100}
            onChange={handleProgress}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none "
            placeholder="Enter goal"
          />
        </div>
        <div className="mt-6 mb-6">
          <label className="block mb-2 text-2xl font-extrabold text-textBlue">
            목표 날짜
          </label>
          <div className="">
            <input
              type="date"
              value={new Date(deadline).toISOString().split('T')[0]}
              onChange={handleDateChange}
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button
            onClick={props.onClose}
            className="px-3 py-1 mr-5 transition-colors bg-white border border-gray-300 rounded-lg text-buttonBlue boreder w-15 hover:bg-buttonBlue hover:text-white">
            취소
          </button>
          <button
            onClick={handleSubmit}
            className="px-3 py-1 text-white transition-colors rounded-lg bg-buttonBlue w-15 hover:bg-white hover:text-buttonBlue hover:border hover:border-gray-300 ">
            수정
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyGoalEditor;
