import HeartButton from "../../../components/HeartButton";

export type CommentItemType = {
  no: number;
  nickname: string;
  content: string;
  profileImageURL: string;
};

const Comment = (props: CommentItemType) => {
  return (
    <div className="flex items-start space-x-3">
      <div className="w-[57px] h-10 mb-2 mr-3 rounded-full">
        <img
          src={props.profileImageURL}
          alt={`${props.nickname}'s profile`}
          className="w-full h-full rounded-full"
        />
      </div>
      <div className="flex items-start">
        <div>
          <div className="text-sm font-bold">{props.nickname}</div>
          <p className="inline text-sm text-gray-600">{props.content}</p>{" "}
        </div>
        <div className="ml-2 translate-y-[22px]">
          {" "}
          <HeartButton size={20} />
        </div>
      </div>
    </div>
  );
};

export default Comment;
