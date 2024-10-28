import { useLocation } from 'react-router-dom';
import DailyChecklistCreator from './components/DailyChecklistCreator';
import DailyChecklistItem from './components/DailyChecklistItem';
import useDailyChecklist from '../../hooks/useDailychecklist';

const DailyChecklistContainer = () => {
  const { state } = useLocation();
  const userId = state?.userId || 'Temp_ID';

  const {
    sortedDailyChecklist,
    isOpen,
    openDailyChecklistCreator,
    closeDailyChecklistCreator,
    addPlan,
    deletePlan,
    toggleDone,
  } = useDailyChecklist(userId);

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="flex items-center justify-between px-20">
        <div className="text-2xl font-black text-black">데일리 체크리스트</div>
        <button
          onClick={openDailyChecklistCreator}
          className="px-3 py-1 mr-16 text-white rounded-lg x-30 bg-buttonBlue">
          + create New Plan
        </button>
      </div>

      <div className="w-2/3 px-10 pt-8 pb-10 mx-auto mt-8 bg-white border border-gray-300 rounded-lg">
        <div className="flex">
          <h1 className="text-2xl text-blue-400">TODO</h1>
          <div className="flex items-center justify-center p-2 ml-5 translate-y-2 bg-gray-200 rounded-2xl w-18 h-7">
            <span className="text-xs">
              {sortedDailyChecklist.length} DailyChecklist
            </span>
          </div>
        </div>
        <div>
          <div className="font-bold w-2/3 h-12 relative mx-auto mt-8 border border-gray-300 rounded-t-lg text-[13px] bg-alabaster text-darkGray">
            <span className="absolute pt-3 left-14">계획</span>
            <span className="absolute pt-3 right-22.5">우선순위</span>
          </div>
          <DailyChecklistItem
            dailyChecklist={sortedDailyChecklist}
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
