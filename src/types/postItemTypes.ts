export type PostItemType = {
  no: number;
  nickname: string;
  content: string;
  createdAt: Date;
  likes: number;
  imageURL: string | null;
  profileImageURL?: string;
} | null;
