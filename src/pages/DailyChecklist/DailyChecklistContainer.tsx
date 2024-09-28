import { useState } from "react";
import DailyChecklistCreator from "./components/DailyChecklistCreator";
import DailyChecklist from "./components/DailyChecklist";

export type Importance = "보통" | "중요" | "매우 중요";

export type DailyChecklistItemType = {
  no: number;
  plan: string;
  importance: Importance;
  done: boolean;
};

const DailyChecklistContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDailyChecklistCreator = () => setIsOpen(true);
  const closeDailyChecklistCreator = () => setIsOpen(false);

  const [dailyChecklist, setDailyChecklist] = useState<
    Array<DailyChecklistItemType>
  >([
    { no: 1, plan: "청소하기", importance: "매우 중요", done: false },
    { no: 2, plan: "책 읽기", importance: "매우 중요", done: false },
    { no: 3, plan: "과제하기", importance: "중요", done: false },
    { no: 4, plan: "과제하기", importance: "보통", done: false },
  ]);

  const addPlan = (inputPlan: string, inputImportance: Importance) => {
    const newChecklist = [
      ...dailyChecklist,
      {
        no: dailyChecklist.length + 1,
        plan: inputPlan,
        importance: inputImportance,
        done: false,
      },
    ];
    setDailyChecklist(newChecklist);
  };

  const deletePlan = (no: number) => {
    const newChecklist = dailyChecklist.filter((plan) => plan.no !== no);
    setDailyChecklist(newChecklist);
  };

  const toggleDone = (no: number) => {
    const newChecklist = dailyChecklist.map((plan) =>
      plan.no === no ? { ...plan, done: !plan.done } : plan
    );
    setDailyChecklist(newChecklist);
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-black text-black">데일리 체크리스트</div>
        <div>
          <button
            onClick={openDailyChecklistCreator}
            className="px-3 py-1 mr-16 text-white rounded-lg x-30 bg-buttonBlue"
          >
            + create New Plan
          </button>
        </div>
      </div>

      <div className="w-2/3 p-10 mx-auto bg-white border border-gray-300 rounded-lg translate-y-7">
        <div className="flex">
          <h1 className="text-2xl text-blue-400">TODO</h1>
          <div className="flex items-center justify-center p-2 ml-5 translate-y-2 bg-gray-200 rounded-2xl w-18 h-7">
            <span className="text-xs ">
              {dailyChecklist.length} DailyChecklist
            </span>
          </div>
        </div>
        <div>
          <div className="font-bold w-2/3 h-12 relative mx-auto mt-5 border border-gray-300 rounded-t-lg text-[13px] bg-alabaster text-darkGray">
            <span className="absolute pt-3 left-14">계획</span>
            <span className="absolute pt-3 right-22.5">우선순위</span>
          </div>
          <DailyChecklist
            dailyChecklist={dailyChecklist}
            deletePlan={deletePlan}
            toggleDone={toggleDone}
          />
        </div>
      </div>

      {isOpen && (
        <DailyChecklistCreator
          onClose={closeDailyChecklistCreator}
          addPlan={addPlan}
        />
      )}
    </div>
  );
};

export default DailyChecklistContainer;
