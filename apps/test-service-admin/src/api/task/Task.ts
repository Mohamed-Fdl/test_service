export type Task = {
  createdAt: Date;
  id: string;
  status?: "NEW" | "PENDING";
  updatedAt: Date;
};
