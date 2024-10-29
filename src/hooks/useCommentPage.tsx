import { useState } from 'react';
import { CommentItemType, NewCommentType } from '../types/commentItemTypes';
import { getData, postData, deleteData, putData } from '../util/api';
import { PostItemType } from '../types/postItemTypes';

interface CommentResponseType {
  id: number;
  post: {
    content: string;
    image: string;
    createdAt: string;
  };
  likes: Array<{
    id: number;
  }>;
}

const useCommentPage = (post: PostItemType, userId: string) => {
  const [inputComment, setInputComment] = useState<string>('');
  const [commentList, setCommentList] = useState<Array<CommentItemType>>([]);

  const getCommentList = async () => {
    const commentListData = await getData<CommentItemType[]>(
      `community/comments/${post?.no!}`,
      { userId }
    );
    setCommentList(commentListData);
  };

  const addComment = async () => {
    if (inputComment.trim() === '') return;

    const newComment = {
      communityId: post?.no!,
      userId: userId,
      content: post?.content || '',
      image: post?.imageURL || '',
    };

    await postData<NewCommentType, void>(`community/comments`, newComment);
    await getCommentList();
    setInputComment('');
  };

  return {
    inputComment,
    setInputComment,
    commentList,
    addComment,
  };
};

export default useCommentPage;
