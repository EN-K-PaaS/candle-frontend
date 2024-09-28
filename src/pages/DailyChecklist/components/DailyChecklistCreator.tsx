import { useState } from "react";
<<<<<<< HEAD
import { Importance } from "../../../types/dailyChecklistTypes";
=======
import { Importance } from "../DailyChecklistContainer";
>>>>>>> 68dd3ce (Feat: tailwind.config.js에 색, 크기 custom한 것들 추가, DailyChecklist 화면 디자인 & 구성 전부 완료)

interface DailyChecklistCreatorProps {
  onClose: () => void;
  addPlan: (inputPlan: string, inputImportance: Importance) => void;
}

const DailyChecklistCreator = (props: DailyChecklistCreatorProps) => {
  const [plan, setPlan] = useState<string>("");
<<<<<<< HEAD
  const [selectedImportance, setImportance] = useState<number>(0);

  const importances = ["보통", "중요", "매우 중요"];

  const selectImportance = (index: number) => {
    setImportance(index);
  };

  const handleSubmit = () => {
    props.addPlan(plan, selectedImportance as Importance);
=======
  const [selectedImportance, setImportance] = useState<Importance>("보통");

  const importances = ["보통", "중요", "매우 중요"];

  const selectImportance = (importance: Importance) => {
    setImportance(importance);
  };

  const handleSubmit = () => {
    props.addPlan(plan, selectedImportance);
>>>>>>> 68dd3ce (Feat: tailwind.config.js에 색, 크기 custom한 것들 추가, DailyChecklist 화면 디자인 & 구성 전부 완료)
    props.onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
        <h1 className="mb-4 text-lg font-bold">Create New Plan</h1>

        <div className="w-30 h-0.5 my-4 bg-gray-200" />

        <div className="mb-4 mt-7">
          <label className="block mb-5 text-2xl font-extrabold text-textBlue">
            계획
          </label>
          <input
            type="text"
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
<<<<<<< HEAD
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none "
=======
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
>>>>>>> 68dd3ce (Feat: tailwind.config.js에 색, 크기 custom한 것들 추가, DailyChecklist 화면 디자인 & 구성 전부 완료)
            placeholder="Enter goal"
          />
        </div>

        <div className="mt-6 mb-6">
          <label className="block mb-2 text-2xl font-extrabold text-textBlue">
            중요도
          </label>
          <div className="flex justify-center mt-5">
<<<<<<< HEAD
            {importances.map((imp, index) => (
              <button
                key={imp}
                onClick={() => selectImportance(index)}
                className={`px-3 mx-5 border border-gray-300 rounded-lg text-gray-400 ${
                  selectedImportance === index
=======
            {importances.map((imp) => (
              <button
                key={imp}
                onClick={() => selectImportance(imp as Importance)}
                className={`px-3 mx-5 border border-gray-300 rounded-lg text-gray-400 ${
                  selectedImportance === imp
>>>>>>> 68dd3ce (Feat: tailwind.config.js에 색, 크기 custom한 것들 추가, DailyChecklist 화면 디자인 & 구성 전부 완료)
                    ? "bg-pastelPurple text-white"
                    : "bg-white"
                }`}
              >
                {imp}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={props.onClose}
            className="px-3 py-1 mr-5 transition-colors bg-white border border-gray-300 rounded-lg text-buttonBlue boreder w-15 hover:bg-buttonBlue hover:text-white"
          >
            취소
          </button>

          <button
            onClick={handleSubmit}
<<<<<<< HEAD
            className="px-3 py-1 text-white transition-colors duration-200 rounded-lg bg-buttonBlue w-[60px] border border-transparent hover:bg-white hover:text-buttonBlue hover:border-gray-300"
=======
            className="px-3 py-1 text-white transition-colors rounded-lg bg-buttonBlue w-15 hover:bg-white hover:text-buttonBlue hover:border hover:border-gray-300 "
>>>>>>> 68dd3ce (Feat: tailwind.config.js에 색, 크기 custom한 것들 추가, DailyChecklist 화면 디자인 & 구성 전부 완료)
          >
            등록
          </button>
        </div>
      </div>
    </div>
  );
};

export default DailyChecklistCreator;
