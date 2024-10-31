import { useState } from 'react';
import { CommentItemType, NewCommentType } from '../types/commentItemTypes';
import { getData, postData } from '../util/api';
import { PostItemType } from '../types/postItemTypes';

const useCommentPage = (post: PostItemType, userId: string) => {
  const [inputComment, setInputComment] = useState<string>('');
  const [commentList, setCommentList] = useState<Array<CommentItemType>>([]);

  const getCommentList = async () => {
    const commentListData = await getData<CommentItemType[]>(
      `community/comments/${post?.id!}`,
      { userId }
    );
    setCommentList(commentListData);
  };

  const addComment = async () => {
    if (inputComment.trim() === '') return;

    const newComment = {
      communityId: post?.id!,
      userId: userId,
      content: post?.content || '',
      image: '',
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
