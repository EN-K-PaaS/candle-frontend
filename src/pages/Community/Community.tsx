import { useLocation } from 'react-router-dom';
import useCommunity from '../../hooks/useCommunity';
import Post from './components/Post';
import CommentPage from './components/CommentPage';

const Community = () => {
  const { state } = useLocation();
  const userId = state?.userId || 'Temp_ID';
  const {
    showCommentPage,
    selectedPost,
    inputContent,
    postList,
    openCommentPage,
    closeCommentPage,
    addPost,
    setInputContent,
  } = useCommunity(userId);

  return (
    <div className="flex flex-col min-h-screen px-8 pt-8 bg-gray-100">
      <div className="flex items-center justify-between">
        <div className="ml-16 text-2xl font-black text-black">마음 나누기</div>
      </div>

      <div className="w-1/2 mt-[-63px] p-10 mx-auto bg-white border border-gray-200 flex-grow">
        <div className="mb-3">
          <div className="flex p-1 mb-1">
            <div className="w-10 h-10 mx-[30px] bg-gray-300 rounded-full"></div>
            <textarea
              className="w-4/5 h-24 p-2 resize-none focus:outline-none"
              placeholder="글을 입력해주세요"
              value={inputContent}
              onChange={(e) => setInputContent(e.target.value)}></textarea>
          </div>
          <div className="flex justify-end">
            <button
              onClick={addPost}
              className="mr-[52px] text-xs px-3 py-1 text-white transition-colors duration-200 rounded-lg bg-buttonBlue w-[60px] border border-transparent hover:bg-white hover:text-buttonBlue hover:border-gray-300">
              등록
            </button>
          </div>
        </div>

        <div className="h-2 -mx-10 bg-gray-100"></div>

        <div>
          {postList
            .slice()
            .reverse()
            .map((post, index) =>
              post != null ? (
                <div key={post.no}>
                  <Post
                    post={post}
                    onShowCommentPage={() => openCommentPage(post)}
                  />
                  {index !== postList.length - 1 && (
                    <div className="h-1 -mx-10 bg-gray-100"></div>
                  )}
                </div>
              ) : null
            )}
        </div>
      </div>

      {showCommentPage && (
        <CommentPage post={selectedPost} onClose={closeCommentPage} />
      )}
    </div>
  );
};

export default Community;
