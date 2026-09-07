import {
  CircleHelp,
  LogOut,
  Settings,
  UserRound,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type UserMenuProps = {
  name: string;
  email: string;
  initials: string;

  onProfile?: () => void;
  onSettings?: () => void;
  onHelp?: () => void;
  onSignOut?: () => void;
};

export function UserMenu({
  name,
  email,
  initials,
  onProfile,
  onSettings,
  onHelp,
  onSignOut,
}: UserMenuProps) {
  return (
    <DropdownMenu>
      {/* Avatar */}
      <DropdownMenuTrigger
        render={
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-sm font-medium text-teal-600 outline-none transition-colors "
          >
            {initials}
          </button>
        }
      />

      {/* Menu */}
      <DropdownMenuContent
        align="end"
        className="w-[300px] p-0"
      >
        {/* User information */}
        <div className="flex items-center gap-3 px-5 py-5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-100 font-medium text-teal-600">
            {initials}
          </div>

          <div className="min-w-0">
            <p className="truncate font-medium text-slate-900">
              {name}
            </p>

            <p className="truncate text-sm text-slate-500">
              {email}
            </p>
          </div>
        </div>

        <DropdownMenuSeparator />

        {/* My Profile */}
        <DropdownMenuItem
          onClick={onProfile}
          className="mx-2 gap-3 px-3 py-3"
        >
          <UserRound className="h-5 w-5 text-slate-500" />

          <span>My Profile</span>
        </DropdownMenuItem>

        {/* Account Settings */}
        <DropdownMenuItem
          onClick={onSettings}
          className="mx-2 gap-3 px-3 py-3"
        >
          <Settings className="h-5 w-5 text-slate-500" />

          <span>Account Settings</span>
        </DropdownMenuItem>

        {/* Help & Support */}
        <DropdownMenuItem
          onClick={onHelp}
          className="mx-2 gap-3 px-3 py-3"
        >
          <CircleHelp className="h-5 w-5 text-slate-500" />

          <span>Help & Support</span>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        {/* Sign Out */}
        <DropdownMenuItem
          onClick={onSignOut}
          className="mx-2 mb-2 gap-3 px-3 py-3 text-red-500 focus:text-red-500"
        >
          <LogOut className="h-5 w-5" />

          <span>Sign Out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}