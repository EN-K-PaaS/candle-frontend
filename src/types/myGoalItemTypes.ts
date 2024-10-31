export type MyGoalItemType = {
  id: number;
  title: string;
  goalDate: Date;
  progress: number;
};

export type NewGoalType = {
  userId: string;
  title: string;
  progress: number;
  goalDate: Date;
};

export type EditGoalType = {
  id: number;
  userId: string;
  title: string;
  progress: number;
  goalDate: Date;
  isFinished: boolean;
};
