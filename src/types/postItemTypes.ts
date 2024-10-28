export type PostItemType = {
  no: number;
  nickname: string;
  content: string;
  createdAt: Date;
  likes: number;
  imageURL: string | null;
  profileImageURL?: string;
} | null;

export type NewPostType = {
  userId: string;
  title: string;
  content: string;
  image: string;
};
