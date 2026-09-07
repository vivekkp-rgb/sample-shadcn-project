import { Bell } from "lucide-react";
import { Button } from "../ui/button";

type NotificationBellProps = {
  unreadCount: number;
  onClick: () => void;
};

export function NotificationBell({
  unreadCount,
  onClick,
}: NotificationBellProps) {
  return (
    <Button
      variant="outline"
      onClick={onClick}
      className="relative h-10 w-10 rounded-md border-border hover:bg-slate-100 bg-background"
    >
      <Bell className="h-8 w-8 text-slate-600" />

      {unreadCount > 0 && (
        <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-amber-700" />
      )}
    </Button>
  );
}