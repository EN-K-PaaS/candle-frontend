import { useState, useEffect } from 'react';
import { PostItemType, NewPostType } from '../types/postItemTypes';
import { getData, postData, checkForSlang } from '../util/api';

const useCommunity = (userId: string) => {
  const [showCommentPage, setShowCommentPage] = useState(false);
  const [selectedPost, setSelectedPost] = useState<PostItemType | null>(null);
  const [inputContent, setInputContent] = useState<string>('');

  const [postList, setPostList] = useState<Array<PostItemType>>([]);

  const openCommentPage = (post: PostItemType) => {
    setSelectedPost(post);
    setShowCommentPage(true);
  };

  const closeCommentPage = () => {
    setSelectedPost(null);
    setShowCommentPage(false);
  };

  const getPostList = async () => {
    const postData = await getData<PostItemType[]>('communities', { userId });
    setPostList(postData);
  };

  useEffect(() => {
    getPostList();
  }, [userId]);

  const addPost = async () => {
    if (inputContent.trim() === '') return;
    const hasSlang = await checkForSlang(inputContent); // 비속어 검사

    if (hasSlang) {
      alert('비속어가 포함되어 있어 게시물을 등록할 수 없습니다.');
      return;
    }

    const newPost = {
      userId: userId,
      title: '',
      content: inputContent,
      image: '',
    };

    await postData<NewPostType, void>(`communities/${userId}`, newPost);

    setInputContent('');

    await getPostList();
  };

  return {
    showCommentPage,
    selectedPost,
    inputContent,
    postList,
    openCommentPage,
    closeCommentPage,
    addPost,
    setInputContent,
  };
};

export default useCommunity;
