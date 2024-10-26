export type Importance = 0 | 1 | 2;

export type DailyChecklistItemType = {
  id: number;
  title: string;
  rank: Importance;
  isFinished: boolean;
};

export type NewPlanType = {
  userId: string;
  title: string;
  priority: Importance;
};
