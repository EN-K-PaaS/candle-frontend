import Comment from './Comment';
import { PostItemType } from '../../../types/postItemTypes';
import CommentInput from '../../Community/components/CommentInput';
import useCommentPage from '../../../hooks/useCommentPage';

interface CommentPageProps {
  post: PostItemType;
  onClose: () => void;
}

const CommentPage = (props: CommentPageProps, userId: string) => {
  const { inputComment, setInputComment, commentList, addComment } =
    useCommentPage(props.post, userId);

  return (
    <div
      onClick={props.onClose}
      className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex w-full max-w-5xl p-8 bg-white shadow-md rounded-xl h-[500px]">
        <div className="w-1/2 px-5 border-r">
          <div className="flex items-center mb-4 space-x-4">
            <div className="w-10 h-10 mb-2 mr-3 rounded-full">
              {/* <img
                src={props.post?.profileImageURL}
                alt={`${props.post?.userName}'s profile`}
                className="w-full h-full rounded-full"
              /> */}
              <div className="w-10 h-10 mb-2 mr-3 rounded-full bg-buttonBlue"></div>
            </div>
            <div className="text-lg font-bold">{props.post?.userName}</div>
          </div>
          <p className="pt-2 mb-4 text-gray-700">{props.post?.content}</p>
        </div>

        <div className="w-1/2">
          <div
            className="pl-8 space-y-6 overflow-y-auto"
            style={{ maxHeight: '400px' }}>
            {commentList.map((comment) =>
              comment != null ? (
                <Comment
                  no={comment.no}
                  nickname={comment.nickname}
                  content={comment.content}
                  profileImageURL={comment.profileImageURL}
                />
              ) : null
            )}
          </div>
          <CommentInput
            containerClassName="pt-3 space-x-4 pb-20"
            inputValue={inputComment}
            onInputChange={(e) => setInputComment(e.target.value)}
            onSubmit={addComment}
            heartButtonPosition="mt-1 mr-20"
          />
        </div>
      </div>
    </div>
  );
};

export default CommentPage;
