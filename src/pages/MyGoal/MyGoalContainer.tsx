import React from 'react';
import MyGoalCreator from './components/MyGoalCreator';
import SearchBar from './components/SearchBar';
import MyGoalList from './components/MyGoalList';
import useMyGoal from '../../hooks/useMygoal';

const MyGoalContainer = () => {
  const userId = localStorage.getItem('userId')!;

  const {
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
  } = useMyGoal(userId);

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="flex items-center justify-between px-20">
        <div className="text-2xl font-black text-black">나의 목표</div>
        <div>
          <button
            onClick={openMyGoalCreator}
            className="px-3 py-1 mr-4 text-white rounded-lg bg-buttonBlue">
            + create New Goal
          </button>
        </div>
      </div>

      <div className="m-5 translate-x-14">
        <SearchBar onSearch={handleSearch} />
      </div>

      <div className="w-2/3 px-10 pt-8 pb-10 mx-auto bg-white border border-gray-300 rounded-lg">
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
        <div className="w-2/3 px-10 pt-8 pb-10 mx-auto bg-white border border-gray-300 rounded-lg">
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
