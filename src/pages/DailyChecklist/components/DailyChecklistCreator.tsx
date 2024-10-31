import { useState } from 'react';

interface DailyChecklistCreatorProps {
  onClose: () => void;
  addPlan: (inputPlan: string, inputImportance: number) => void;
}

const DailyChecklistCreator = (props: DailyChecklistCreatorProps) => {
  const [plan, setPlan] = useState<string>('');
  const [selectedImportance, setImportance] = useState<number>(1);

  const selectImportance = (index: number) => {
    setImportance(index);
  };

  const handleSubmit = () => {
    props.addPlan(plan, selectedImportance);
    props.onClose();
  };

  const importances = ['숨김', '보통', '중요', '매우 중요'];

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
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none "
            placeholder="Enter goal"
          />
        </div>

        <div className="mt-6 mb-6">
          <label className="block mb-2 text-2xl font-extrabold text-textBlue">
            중요도
          </label>
          <div className="flex justify-center mt-5">
            {importances.map(
              (imp, index) =>
                index > 0 && (
                  <button
                    key={imp}
                    onClick={() => selectImportance(index)}
                    className={`px-3 mx-5 border border-gray-300 rounded-lg text-gray-400 ${
                      selectedImportance === index
                        ? 'bg-pastelPurple text-white'
                        : 'bg-white'
                    }`}>
                    {imp}
                  </button>
                )
            )}
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
            className="px-3 py-1 text-white transition-colors duration-200 rounded-lg bg-buttonBlue w-[60px] border border-transparent hover:bg-white hover:text-buttonBlue hover:border-gray-300">
            등록
          </button>
        </div>
      </div>
    </div>
  );
};

export default DailyChecklistCreator;
