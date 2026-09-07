import Link from "next/link";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "./ui/avatar";

import { todaysAppointments } from "@/data/patients";

const avatarStyles = {
  blue: "bg-blue-100 text-blue-500",
  green: "bg-green-100 text-green-500",
  purple: "bg-purple-100 text-purple-500",
  red: "bg-red-100 text-red-500",
};

const statusStyles = {
  Confirmed: "bg-green-100 text-green-700 hover:bg-green-100",
  Waiting: "bg-orange-100 text-orange-700 hover:bg-orange-100",
  Completed: "bg-blue-100 text-blue-700 hover:bg-blue-100",
  Scheduled : "bg-red-100 text-red-700 hover:bg-red-100",
};

export function TodaysAppointments() {
  return (
    <Card className="flex max-h-full h-[400px] flex-col overflow-hidden rounded-xl border-slate-200">
      <CardHeader className="shrink-0 flex flex-row items-center justify-between border-b border-slate-200 p-5">
        <CardTitle className="font-semibold text-foreground">
          Today's Appointments
        </CardTitle>

        <Link
          href="/appointments"
          className="text-[13px] font-medium text-teal-500 hover:text-teal-600"
        >
          View all
        </Link>
      </CardHeader>

      <CardContent className="min-h-0 flex-1 overflow-y-auto p-0">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-slate-200 hover:bg-transparent">
              <TableHead className="px-5 py-[10px] text-xs font-medium uppercase tracking-wide text-slate-500">
                Patient
              </TableHead>

              <TableHead className="px-4 py-[10px] text-xs font-medium uppercase tracking-wide text-slate-400">
                Time
              </TableHead>

              <TableHead className="px-4 py-[10px] text-xs font-medium uppercase tracking-wide text-slate-400">
                Type
              </TableHead>

              <TableHead className="px-4 py-[10px] text-xs font-medium uppercase tracking-wide text-slate-400">
                Status
              </TableHead>

              <TableHead className="px-4 py-[10px] text-right text-xs font-medium uppercase tracking-wide text-slate-500">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {todaysAppointments.map((appointment) => (
              <TableRow
                key={`${appointment.patientId}-${appointment.time}`}
                className="border-b border-slate-200 last:border-b-0 hover:bg-gray-50 dark:border-border dark:hover:bg-muted"
              >
                {/* Patient */}
                <TableCell className="px-5 py-[14px]">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback
                        className={`text-xs font-semibold ${
                          avatarStyles[appointment.avatarColor]
                        }`}
                      >
                        {appointment.initials}
                      </AvatarFallback>
                    </Avatar>

                    <span className="text-sm font-medium text-foreground">
                      {appointment.patient}
                    </span>
                  </div>
                </TableCell>

                {/* Time */}
                <TableCell className="px-4 py-[14px] text-sm text-slate-600">
                  {appointment.time}
                </TableCell>

                {/* Type */}
                <TableCell className="px-4 py-[14px] text-sm text-slate-600">
                  {appointment.type}
                </TableCell>

                {/* Status */}
                <TableCell className="px-4 py-[14px]">
                  <Badge
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      statusStyles[appointment.status]
                    }`}
                  >
                    {appointment.status}
                  </Badge>
                </TableCell>

                {/* Action */}
                <TableCell className="px-4 py-[14px] text-right">
                  <Link
                    href={`/patients/${appointment.patientId}`}
                    className="text-[13px] font-medium text-teal-500 hover:text-teal-600"
                  >
                    View
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}