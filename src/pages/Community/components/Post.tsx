import CommentInput from '../../../components/CommentInput';
import { useState } from 'react';
import { PostItemType } from '../../../types/postItemTypes';

interface PostProps {
  post: PostItemType;
  onShowCommentPage: () => void;
}

const Post = (props: PostProps) => {
  const [inputComment, setInputComment] = useState<string>('');

  const addComment = () => {
    if (inputComment.trim() === '') return;

    setInputComment('');
  };

  if (props.post === null) return <div>게시물이 없습니다</div>;

  return (
    <div className="bg-white py-7 px-9">
      <div className="flex items-center mb-2">
        <div className="w-10 h-10 mb-2 mr-3 rounded-full">
          {/* <img
            src={props.post.profileImageURL}
            alt={`${props.post.userName}'s profile`}
            className="w-full h-full rounded-full"
          /> */}
          <div className="w-10 h-10 mb-2 mr-3 rounded-full bg-buttonBlue"></div>
        </div>
        <h2 className="ml-3 font-bold">{props.post.userName}</h2>
      </div>

      <p className="text-gray-700">{props.post.content}</p>

      <div className="flex items-center justify-between mt-4 mb-4">
        <button
          onClick={props.onShowCommentPage}
          className="text-sm text-gray-300">
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
