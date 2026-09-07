export type NotificationType =
  | "critical"
  | "appointment"
  | "lab"
  | "patient";

export type Notification = {
  id: string;
  type: NotificationType;
  title: string;
  description: string;
  time: string;
  read: boolean;
};

export const notifications: Notification[] = [
  {
    id: "1",
    type: "critical",
    title: "Critical BP reading",
    description: "John Smith's blood pressure requires review.",
    time: "10 minutes ago",
    read: false,
  },
  {
    id: "2",
    type: "appointment",
    title: "Overdue follow-up",
    description: "Maria Thomas's follow-up appointment is overdue.",
    time: "2 hours ago",
    read: false,
  },
  {
    id: "3",
    type: "lab",
    title: "Lab results ready",
    description: "Robert Lee's lab results are ready for review.",
    time: "3 hours ago",
    read: false,
  },
  {
    id: "4",
    type: "patient",
    title: "New patient registered",
    description: "Sophia Martinez was added to your list.",
    time: "Yesterday",
    read: true,
  },
];