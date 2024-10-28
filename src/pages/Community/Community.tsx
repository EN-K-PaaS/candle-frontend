import { useState } from "react";
import Post from "./components/Post";
import CommentPage from "./components/CommentPage";
import { PostItemType } from "../../types/postItemTypes";
import { checkForSlang } from "../../util/api";

const Community = () => {
  const [showCommentPage, setShowCommentPage] = useState(false);
  const [selectedPost, setSelectedPost] = useState<PostItemType>(null);
  const [inputContent, setInputContent] = useState<string>("");

  const openCommentPage = (post: PostItemType) => {
    setSelectedPost(post);
    setShowCommentPage(true);
  };

  const closeCommentPage = () => {
    setSelectedPost(null);
    setShowCommentPage(false);
  };

  const [postList, setPostList] = useState<Array<PostItemType>>([
    {
      no: 1,
      nickname: "SunnyDay",
      content:
        "오늘은 맑고 시원한 날씨 덕분에 기분 좋은 하루를 보냈다. 아침에는 일찍 일어나 산책을 나갔는데, 가을 바람이 상쾌하게 불어와 하루를 상쾌하게 시작할 수 있었다. 업무는 바빴지만, 계획한 일을 차근차근 해내면서 성취감을 느꼈다. 점심으로는 동료들과 함께 맛있는 식사를 하며 잠시 여유를 즐겼다. 퇴근 후에는 집에서 간단히 요리를 해 저녁을 먹고, 남은 시간에는 좋아하는 책을 읽으며 힐링하는 시간을 가졌다. 오늘 하루도 이렇게 평온하고 만족스럽게 마무리할 수 있어 감사한 마음이다.",
      createdAt: new Date("2024-09-29T10:30:00"),
      likes: 25,
      imageURL: "https://example.com/image1.jpg",
      profileImageURL:
        "https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D​",
    },
    {
      no: 2,
      nickname: "BookLover",
      content: "최근에 읽은 책이 너무 재미있었어요. 여러분도 읽어보세요!",
      createdAt: new Date("2024-09-28T14:45:00"),
      likes: 10,
      imageURL: "https://example.com/image2.jpg",
      profileImageURL:
        "https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D​",
    },
    {
      no: 3,
      nickname: "TravelBug",
      content: "여행은 인생의 큰 즐거움 중 하나죠! 🌍",
      createdAt: new Date("2024-09-27T09:15:00"),
      likes: 42,
      imageURL: "https://example.com/image3.jpg",
      profileImageURL:
        "https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D​",
    },
  ]);

  const addPost = async () => {
    if (inputContent.trim() === "") return;

    try {
      const hasSlang = await checkForSlang(inputContent); // 비속어 검사

      if (hasSlang) {
        alert("비속어가 포함되어 있어 게시물을 등록할 수 없습니다.");
        return;
      }

      // 비속어가 없으면 게시물 추가
      const newPostList = [
        ...postList,
        {
          no: postList.length + 1,
          nickname: "nickname",
          content: inputContent,
          createdAt: new Date(),
          likes: 0,
          imageURL: null,
          profileImageURL:
            "https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D​",
        },
      ];
      setPostList(newPostList);
      setInputContent("");
    } catch (error) {
      console.error("비속어 검사를 실패했습니다:", error);
      alert("비속어 검사를 할 수 없습니다. 다시 시도해 주세요.");
    }
  };

  return (
    <div className="px-8 pt-8 bg-gray-100 min-h-screens">
      <div className="flex items-center justify-between">
        <div className="ml-16 text-2xl font-black text-black">마음 나누기</div>
      </div>

      <div className="w-1/2 mt-[-63px] p-10 mx-auto bg-white border border-gray-200">
        <div className="mb-3">
          <div className="flex p-1 mb-1">
            <div className="w-10 h-10 mx-[30px] bg-gray-300 rounded-full"></div>
            <textarea
              className="w-4/5 h-24 p-2 resize-none focus:outline-none"
              placeholder="글을 입력해주세요"
              value={inputContent}
              onChange={(e) => setInputContent(e.target.value)}
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              onClick={addPost}
              className="mr-[52px] text-xs px-3 py-1 text-white transition-colors duration-200 rounded-lg bg-buttonBlue w-[60px] border border-transparent hover:bg-white hover:text-buttonBlue hover:border-gray-300"
            >
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
