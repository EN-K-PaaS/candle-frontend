type ArrowButtonType = {
  onClick: () => void;
  isUp: boolean;
};

const ArrowButton = (props: ArrowButtonType) => {
  return (
    <div>
      <button
        onClick={props.onClick}
        className="px-3 py-1 text-2xl text-gray-600"
      >
        {props.isUp ? (
          <img src="/icons/up-icon.png" alt="up" className="w-8 h-9" />
        ) : (
          <img src="/icons/down-icon.png" alt="down" className="w-8 h-9" />
        )}
      </button>
    </div>
  );
};

export default ArrowButton;
