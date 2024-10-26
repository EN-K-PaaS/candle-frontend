import CommentInput from "../../../components/CommentInput";
import { useState } from "react";
import { CommentItemType } from "../../../types/commentItemTypes";
import { PostItemType } from "../../../types/postItemTypes";

interface PostProps {
  post: PostItemType;
  onShowCommentPage: () => void;
}

const Post = (props: PostProps) => {
  const [inputComment, setInputComment] = useState<string>("");

  const [commentList, setCommentList] = useState<Array<CommentItemType>>([
    {
      no: 1,
      nickname: "NickName3",
      content:
        "오늘 하루도 고생 많으셨어요! 가을 바람 느끼면서 산책하는 시간, 참 좋을 것 같아요.",
      profileImageURL:
        "https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D​",
    },
  ]);

  const addComment = () => {
    if (inputComment.trim() === "") return;

    const newCommentList = [
      ...commentList,
      {
        no: commentList.length + 1,
        nickname: "nickname",
        content: inputComment,
        profileImageURL: "",
      },
    ];
    setCommentList(newCommentList);
    setInputComment("");
  };

  if (props.post === null) return <div>게시물이 없습니다</div>;

  return (
    <div className="bg-white py-7 px-9">
      <div className="flex items-center mb-2">
        <div className="w-10 h-10 mb-2 mr-3 rounded-full">
          <img
            src={props.post.profileImageURL}
            alt={`${props.post.nickname}'s profile`}
            className="w-full h-full rounded-full"
          />
        </div>
        <h2 className="ml-3 font-bold">{props.post.nickname}</h2>
      </div>

      <p className="text-gray-700">{props.post.content}</p>

      <div className="flex items-center justify-between mt-4 mb-4">
        <button
          onClick={props.onShowCommentPage}
          className="text-sm text-gray-300"
        >
          댓글 더보기
        </button>
      </div>
      <CommentInput
        containerClassName="pt-3 space-x-7"
        inputValue={inputComment}
        inputWidth="w-2/3"
        onInputChange={(e) => setInputComment(e.target.value)}
        onSubmit={addComment}
        heartButtonPosition="mt-[5px]"
      />
    </div>
  );
};

export default Post;
