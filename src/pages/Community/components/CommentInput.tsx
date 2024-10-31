import HeartButton from "./HeartButton";

type CommentInputType = {
  containerClassName: string;
  inputValue: string;
  inputWidth?: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  heartButtonPosition: string;
};

const CommentInput = (props: CommentInputType) => {
  return (
    <div className={`${props.containerClassName} flex`}>
      <input
        type="text"
        value={props.inputValue}
        onChange={props.onInputChange}
        placeholder="댓글을 입력해주세요"
        className={`w-2/3 px-3 py-2 text-sm  rounded focus:outline-none ${props.inputWidth}`}
      />
      <button
        onClick={props.onSubmit}
        className="text-xs px-3 py-1 h-8 text-white transition-colors duration-200 rounded-lg bg-buttonBlue w-[80px] border border-transparent hover:bg-white hover:text-buttonBlue hover:border-gray-300"
      >
        댓글 달기
      </button>
      <div className={`${props.heartButtonPosition}`}>
        <HeartButton size={20} />
      </div>
    </div>
  );
};

export default CommentInput;
