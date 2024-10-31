import { useState, useEffect } from 'react';
import { PostItemType, NewPostType } from '../types/postItemTypes';
import { getData, postData, checkForSlang } from '../util/api';

interface Comment {
  communityId: number;
  userId: string;
  content: string;
  image: string;
}

interface ApiResponse {
  userId: string;
  userName: string;
  id: number;
  title: string;
  content: string;
  image: string;
  createdAt: string;
  likeCount: number;
  comments: Comment[];
}

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
    const responseData = await getData<ApiResponse[]>('communities');

    const filteredData: PostItemType[] = responseData.map(
      ({ userName, content, id, comments }) => ({
        userName,
        content,
        id,
        comments,
      })
    );

    setPostList(filteredData);
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

    await postData<NewPostType, void>(`communities`, newPost);

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
