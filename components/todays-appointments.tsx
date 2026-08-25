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




const appointments = [
  {
    initials: "EJ",
    patient: "Emily Johnson",
    time: "09:30 AM",
    type: "Follow-up",
    status: "Confirmed",
  },
  {
    initials: "MB",
    patient: "Michael Brown",
    time: "10:15 AM",
    type: "Consultation",
    status: "Waiting",
  },
  {
    initials: "OD",
    patient: "Olivia Davis",
    time: "11:00 AM",
    type: "Check-up",
    status: "Confirmed",
  },
  {
    initials: "JW",
    patient: "James Wilson",
    time: "11:45 AM",
    type: "Follow-up",
    status: "Completed",
  },
];

const statusStyles = {
  Confirmed: "bg-green-100 text-green-700 hover:bg-green-100",
  Waiting: "bg-orange-100 text-orange-700 hover:bg-orange-100",
  Completed: "bg-blue-100 text-blue-700 hover:bg-blue-100",
};

export function TodaysAppointments() {
  return (
    <Card className="overflow-hidden rounded-xl border border-slate-200">
      <CardHeader className="flex flex-row items-center justify-between border-b border-slate-200 p-5">
        <CardTitle className="text-xl font-semibold text-slate-900">
          Today's Appointments
        </CardTitle>

        <Link
          href="/appointments"
          className="text-base font-medium text-teal-500 hover:text-teal-600"
        >
          View all
        </Link>
      </CardHeader>

      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-slate-200 hover:bg-transparent">
              <TableHead className="px-5 py-[10px] text-sm font-medium uppercase tracking-wide text-slate-500">
                Patient
              </TableHead>

              <TableHead className="px-4 py-[10px] text-sm font-medium uppercase tracking-wide text-slate-400">
                Time
              </TableHead>

              <TableHead className="px-4 py-[10px] text-sm font-medium uppercase tracking-wide text-slate-400">
                Type
              </TableHead>

              <TableHead className="px-4 py-[10px] text-sm font-medium uppercase tracking-wide text-slate-400">
                Status
              </TableHead>

              <TableHead className="px-4 py-[10px] text-right text-sm font-medium uppercase tracking-wide text-slate-500">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {appointments.map((appointment) => (
              <TableRow
                key={appointment.patient}
                className="border-b border-slate-200 last:border-b-0 hover:bg-transparent"
              >
                {/* Patient */}
                <TableCell className="px-5 py-[14px]">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9 cursor-pointer">
                        <AvatarFallback className="bg-accent text-sm font-semibold text-accent-foreground">
                            {appointment.initials}
                        </AvatarFallback>
                    </Avatar>

                    <span className="text-base font-medium text-slate-900">
                      {appointment.patient}
                    </span>
                  </div>
                </TableCell>

                {/* Time */}
                <TableCell className="px-4 py-[14px] text-base text-slate-600">
                  {appointment.time}
                </TableCell>

                {/* Type */}
                <TableCell className="px-4 py-[14px] text-base text-slate-600">
                  {appointment.type}
                </TableCell>

                {/* Status */}
                <TableCell className="px-4 py-[14px]">
                  <Badge
                    className={`rounded-full px-3 py-1 text-sm font-medium ${
                      statusStyles[
                        appointment.status as keyof typeof statusStyles
                      ]
                    }`}
                  >
                    {appointment.status}
                  </Badge>
                </TableCell>

                {/* Action */}
                <TableCell className="px-4 py-[14px] text-right">
                  <Link
                    href="/appointments"
                    className="text-base font-medium text-teal-500 hover:text-teal-600"
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