import { X } from "lucide-react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

import type { Notification } from "@/data/notification";
import { NotificationItem } from "./NotificationItem";

type NotificationDrawerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;

  notifications: Notification[];

  onNotificationClick?: (notification: Notification) => void;
  onMarkAllAsRead?: () => void;
};

export function NotificationDrawer({
  open,
  onOpenChange,
  notifications,
  onNotificationClick,
  onMarkAllAsRead,
}: NotificationDrawerProps) {
  const unreadCount = notifications.filter(
    (notification) => !notification.read
  ).length;

  return (
    <Drawer
      open={open}
      onOpenChange={onOpenChange}
      swipeDirection="right"
    >
      <DrawerContent className="h-full w-[420px] max-w-[90vw]">
        {/* Header */}
        <DrawerHeader className="border-b border-slate-200 px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <DrawerTitle className="text-xl">
                Notifications
              </DrawerTitle>

              {unreadCount > 0 && (
                <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-500">
                  {unreadCount} new
                </span>
              )}
            </div>

            <DrawerClose
              render={
                    <button
                    type="button"
                    className="rounded-md p-1 text-slate-500 hover:bg-slate-100"
                    >
                    <X className="h-5 w-5" />
                    </button>
                }
            />
          </div>
        </DrawerHeader>

        {/* Notifications */}
        <div className="flex-1 overflow-y-auto px-4 py-4">
          {notifications.length === 0 ? (
            <div className="flex h-full items-center justify-center text-sm text-slate-500">
              No notifications
            </div>
          ) : (
            <div className="space-y-1">
              {notifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  notification={notification}
                  onClick={() =>
                    onNotificationClick?.(notification)
                  }
                />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {unreadCount > 0 && (
          <div className="border-t border-slate-200 p-4">
            <button
              type="button"
              onClick={onMarkAllAsRead}
              className="w-full text-sm font-medium text-teal-500 hover:text-teal-600"
            >
              Mark all as read
            </button>
          </div>
        )}
      </DrawerContent>
    </Drawer>
  );
}