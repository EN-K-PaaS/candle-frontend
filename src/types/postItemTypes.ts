export type CommentType = {
  communityId: number;
  userId: string;
  content: string;
  image: string;
};

export type PostItemType = {
  id: number;
  userName: string;
  content: string;
  comments: CommentType[];
} | null;

export type NewPostType = {
  userId: string;
  title: string;
  content: string;
  image: string;
};
