export interface ITask {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
  priority: "high" | "low" | "medium";
  assignedTo: string | null;
}

export interface IUser {
  name: string;
  id: string;
}
