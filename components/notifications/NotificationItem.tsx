import {
  AlertTriangle,
  CalendarDays,
  CheckSquare,
  UserRound,
} from "lucide-react";

import type { Notification } from "@/data/notification";

type NotificationItemProps = {
  notification: Notification;
  onClick?: () => void;
};

const iconMap = {
  critical: {
    icon: AlertTriangle,
    bg: "bg-red-50",
    color: "text-red-400",
  },

  appointment: {
    icon: CalendarDays,
    bg: "bg-amber-50",
    color: "text-amber-400",
  },

  lab: {
    icon: CheckSquare,
    bg: "bg-teal-50",
    color: "text-teal-400",
  },

  patient: {
    icon: UserRound,
    bg: "bg-blue-50",
    color: "text-blue-400",
  },
};

export function NotificationItem({
  notification,
  onClick,
}: NotificationItemProps) {
  const { icon: Icon, bg, color } = iconMap[notification.type];

  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-start gap-3 rounded-lg p-4 text-left hover:bg-slate-50"
    >
      {/* Icon */}
      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${bg}`}
      >
        <Icon className={`h-5 w-5 ${color}`} />
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-medium text-slate-900">
            {notification.title}
          </h3>

          {/* Unread dot */}
          {!notification.read && (
            <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-teal-500" />
          )}
        </div>

        <p className="mt-0.5 text-sm text-slate-500">
          {notification.description}
        </p>

        <p className="mt-1 text-xs text-slate-400">
          {notification.time}
        </p>
      </div>
    </button>
  );
}