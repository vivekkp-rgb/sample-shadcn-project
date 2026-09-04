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

interface Appointment {
  date: string;
  doctor: string;
  type: string;
  status: "Completed" | "Scheduled";
  notes: string;
}

interface RecentAppointmentsProps {
  appointments: Appointment[];
}

const statusStyles = {
  Completed: "bg-green-100 text-green-700 hover:bg-green-100",
  Scheduled: "bg-blue-100 text-blue-700 hover:bg-blue-100",
};

export function RecentAppointments({
  appointments,
}: RecentAppointmentsProps) {
  return (
    <Card className="h-full overflow-hidden rounded-xl border-slate-200">
      <CardHeader className="flex flex-row items-center justify-between border-b border-slate-200 p-5">
        <CardTitle className="font-semibold text-foreground">
          Recent Appointments
        </CardTitle>
      </CardHeader>

      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-slate-200 hover:bg-transparent">
              <TableHead className="px-5 py-[10px] text-xs font-medium uppercase tracking-wide text-slate-500">
                Date
              </TableHead>

              <TableHead className="px-4 py-[10px] text-xs font-medium uppercase tracking-wide text-slate-400">
                Doctor
              </TableHead>

              <TableHead className="px-4 py-[10px] text-xs font-medium uppercase tracking-wide text-slate-400">
                Type
              </TableHead>

              <TableHead className="px-4 py-[10px] text-xs font-medium uppercase tracking-wide text-slate-400">
                Status
              </TableHead>

              <TableHead className="px-4 py-[10px] text-xs font-medium uppercase tracking-wide text-slate-400">
                Notes
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {appointments.map((appointment) => (
              <TableRow
                key={`${appointment.date}-${appointment.doctor}-${appointment.type}`}
                className="border-b border-slate-200 last:border-b-0 hover:bg-gray-50 dark:border-border dark:hover:bg-muted"
              >
                {/* Date */}
                <TableCell className="px-5 py-[14px]">
                  <span className="text-sm font-medium text-foreground">
                    {appointment.date}
                  </span>
                </TableCell>

                {/* Doctor */}
                <TableCell className="px-4 py-[14px] text-sm text-slate-600">
                  {appointment.doctor}
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

                {/* Notes */}
                <TableCell className="px-4 py-[14px] text-sm text-slate-600">
                  {appointment.notes}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}