import ArrowButton from './ArrowButton';
import MyGoalItem from './MyGoalItem';
import { MyGoalItemType } from '../../../types/myGoalItemTypes';

interface MyGoalListprops {
  status: string;
  listLength: number;
  onClick: () => void;
  isUp: boolean;
  goals: Array<MyGoalItemType>;
  deleteGoal: (no: number) => void;
  editGoal: (goal: MyGoalItemType) => void;
}

const MyGoalList = (props: MyGoalListprops) => {
  const setStatusColor = () => {
    return props.status === 'PROCESSING' ? 'text-yellow-500' : 'text-green-400';
  };

  return (
    <div>
      <div className="flex">
        <h1 className={`text-2xl ${setStatusColor()}`}>{props.status}</h1>
        <div className="flex items-center justify-center p-2 ml-5 bg-gray-200 rounded-2xl w-18 h-7">
          <span className="text-xs ">{props.listLength} Goals</span>
        </div>
        <div className="ml-auto ">
          <ArrowButton onClick={props.onClick} isUp={props.isUp} />
        </div>
      </div>
      {props.isUp && (
        <div>
          <div className="font-bold w-2/3 h-12 flex items-center mx-auto mt-8 border border-gray-300 rounded-t-lg text-[13px] bg-alabaster text-darkGray">
            <span className="w-1/4 ml-4">이름</span>
            <span className="w-1/4 ml-8">목표 날짜</span>
            <span className="w-1/4 ml-8">상태</span>
            <span className="w-1/4 ml-8">진행상황</span>
          </div>
          <MyGoalItem
            myGoals={props.goals}
            deleteGoal={props.deleteGoal}
            editGoal={props.editGoal}
          />
        </div>
      )}
    </div>
  );
};

export default MyGoalList;
