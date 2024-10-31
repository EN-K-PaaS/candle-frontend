export type CommentItemType = {
  no: number;
  nickname: string;
  content: string;
  profileImageURL: string;
};

export type NewCommentType = {
  communityId: number;
  userId: string;
  content: string;
  // image: string;
};
