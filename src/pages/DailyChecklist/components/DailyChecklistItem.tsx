import {
  DailyChecklistItemType,
  Importance,
} from '../../../types/dailyChecklistTypes';

type DailyChecklistItemProps = {
  dailyChecklist: Array<DailyChecklistItemType>;
  toggleDone: (id: number) => void;
  deletePlan: (id: number) => void;
};

const DailyChecklistItem = (props: DailyChecklistItemProps) => {
  const getImportanceColor = (importance: Importance, isFinished: boolean) => {
    if (isFinished) {
      return getIsDoneColor(importance);
    }

    switch (importance) {
      case 0:
        return 'text-blue-500 border-blue-500 w-16 px-5';
      case 1:
        return 'px-5 text-yellow-500 border-yellow-500 w-16';
      case 2:
        return 'px-3 text-red-500 border-red-500';
    }
  };

  const getIsDoneColor = (importance: Importance) => {
    switch (importance) {
      case 0:
        return 'text-gray-400 border-gray-400 w-16 px-5';
      case 1:
        return 'text-gray-400 border-gray-400 w-16 px-5';
      case 2:
        return 'text-gray-400 border-gray-400 px-3';
    }
  };

  return (
    <div>
      {props.dailyChecklist.map((item) => (
        <div
          key={item.id}
          className="relative flex items-center w-2/3 h-16 p-4 mx-auto bg-white border border-gray-300 rounded-sm">
          <div className="flex items-center">
            <button
              className="w-3 h-3 mr-2 bg-white border border-gray-400 rounded-sm"
              onClick={() => props.toggleDone(item.id)}></button>
            <span
              className={`${
                item.isFinished ? 'text-gray-400' : 'text-darkGray'
              } text-xs absolute left-14 font-semibold`}>
              {item.title}
            </span>
          </div>
          <span
            className={`${getImportanceColor(item.rank, item.isFinished)} 
                      border rounded-lg text-[10px] absolute right-20 `}>
            {['보통', '중요', '매우 중요'][item.rank]}
          </span>
          <img
            src="/icons/trash-icon.png"
            className="absolute w-3 h-3 cursor-pointer right-4"
            alt="삭제 아이콘"
            onClick={() => props.deletePlan(item.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default DailyChecklistItem;
