import Comment from './Comment';
import { PostItemType } from '../../../types/postItemTypes';
import { CommentItemType } from '../../../types/commentItemTypes';
import { useState } from 'react';
import CommentInput from '../../../components/CommentInput';

interface CommentPageProps {
  post: PostItemType;
  onClose: () => void;
}

const CommentPage = (props: CommentPageProps) => {
  const [inputComment, setInputComment] = useState<string>('');
  const [commentList, setCommentList] = useState<Array<CommentItemType>>([
    {
      no: 1,
      nickname: 'NickName3',
      content:
        '오늘 하루도 고생 많으셨어요! 가을 바람 느끼면서 산책하는 시간, 참 좋을 것 같아요.',
      profileImageURL:
        'https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D​',
    },
    {
      no: 2,
      nickname: 'NickName4',
      content:
        '점심 맛있게 드신 것만으로도 기분이 확 좋아지셨을 것 같아요! 무슨 음식 드셨는지 궁금해요~',
      profileImageURL: '',
    },
    {
      no: 3,
      nickname: 'NickName5',
      content:
        '드라마 보면서 하루를 마무리하는 거 너무 좋죠! 어떤 드라마 보시는지 추천해 주세요!',
      profileImageURL: '',
    },
    {
      no: 4,
      nickname: 'NickName6',
      content:
        '가을 바람 맞으면서 산책하니까 행복하고 기분도 좋아졌겠어요! 저도 산책하러 다녀와야겠어요!',
      profileImageURL: '',
    },
    {
      no: 5,
      nickname: 'NickName8',
      content:
        '스트레스 받는 일도 있었지만, 긍정적으로 하루를 보내신 것 같아서 보기 좋아요!',
      profileImageURL: '',
    },
  ]);

  const addComment = () => {
    if (inputComment.trim() === '') return;

    const newCommentList = [
      ...commentList,
      {
        no: commentList.length + 1,
        nickname: 'nickname',
        content: inputComment,
        profileImageURL: '',
      },
    ];
    setCommentList(newCommentList);
    setInputComment('');
  };

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
              <img
                src={props.post?.profileImageURL}
                alt={`${props.post?.nickname}'s profile`}
                className="w-full h-full rounded-full"
              />
            </div>
            <div className="text-lg font-bold">{props.post?.nickname}</div>
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
            containerClassName="pt-3 space-x-4"
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
