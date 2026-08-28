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

type AvatarColor = "blue" | "green" | "purple" | "red";
type PatientStatus = "Stable" | "Follow-Up";

interface RecentPatient {
  initials: string;
  patient: string;
  id: string;
  ageGenter: string;
  lastVisit: string;
  status: PatientStatus;
  avatarColor: AvatarColor;
}

const recentPatients: RecentPatient[] = [
  {
    initials: "EJ",
    patient: "Emily Johnson",
    id: "PT-10245",
    ageGenter: "32 · Female",
    lastVisit: "Aug 18",
    status: "Stable",
    avatarColor: "blue",
  },
  {
    initials: "MB",
    patient: "Michael Brown",
    id: "PT-10312",
    ageGenter: "45 · Male",
    lastVisit: "Aug 16",
    status: "Follow-Up",
    avatarColor: "green",
  },
  {
    initials: "OD",
    patient: "Olivia Davis",
    id: "PT-10198",
    ageGenter: "28 · Female",
    lastVisit: "Aug 14",
    status: "Stable",
    avatarColor: "purple",
  },
];

const avatarStyles = {
  blue: "bg-blue-100 text-blue-500",
  green: "bg-green-100 text-green-500",
  purple: "bg-purple-100 text-purple-500",
  red: "bg-red-100 text-red-500",
};

const statusStyles = {
  Stable: "bg-green-100 text-green-700 hover:bg-green-100",
  "Follow-Up": "bg-orange-100 text-orange-700 hover:bg-orange-100",
};

export function RecentPatients() {
  return (
    <Card className="h-full overflow-hidden rounded-xl border-slate-200">
      <CardHeader className="flex flex-row items-center justify-between border-b border-slate-200 p-5">
        <CardTitle className="font-semibold text-slate-900">
          Recent Patients
        </CardTitle>

        <Link
          href="/appointments"
          className="text-[13px] font-medium text-teal-500 hover:text-teal-600"
        >
          View all
        </Link>
      </CardHeader>

      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-slate-200 hover:bg-transparent">
              <TableHead className="px-5 py-[10px] text-xs font-medium uppercase tracking-wide text-slate-500">
                Patient
              </TableHead>

              <TableHead className="px-4 py-[10px] text-xs font-medium uppercase tracking-wide text-slate-400">
                ID
              </TableHead>

              <TableHead className="px-4 py-[10px] text-xs font-medium uppercase tracking-wide text-slate-400">
                Age / Gender
              </TableHead>

              <TableHead className="px-4 py-[10px] text-xs font-medium uppercase tracking-wide text-slate-400">
                Last Visit
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
            {recentPatients.map((recentPatient) => (
              <TableRow
                key={recentPatient.patient}
                className="border-b border-slate-200 last:border-b-0 hover:bg-transparent"
              >
                {/* Patient */}
                <TableCell className="px-5 py-[14px]">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8 cursor-pointer">
                      <AvatarFallback
                        className={`text-xs font-semibold ${
                          avatarStyles[recentPatient.avatarColor]
                        }`}
                      >
                        {recentPatient.initials}
                      </AvatarFallback>
                    </Avatar>

                    <span className="text-sm font-medium text-foreground">
                      {recentPatient.patient}
                    </span>
                  </div>
                </TableCell>

                {/* ID */}
                <TableCell className="px-4 py-[14px] text-sm text-slate-600">
                  {recentPatient.id}
                </TableCell>

                {/* Age / Gender */}
                <TableCell className="px-4 py-[14px] text-sm text-slate-600">
                  {recentPatient.ageGenter}
                </TableCell>

                {/* Last Visit */}
                <TableCell className="px-4 py-[14px] text-sm text-slate-600">
                  {recentPatient.lastVisit}
                </TableCell>

                {/* Status */}
                <TableCell className="px-4 py-[14px]">
                  <Badge
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      statusStyles[recentPatient.status]
                    }`}
                  >
                    {recentPatient.status}
                  </Badge>
                </TableCell>

                {/* Action */}
                <TableCell className="px-4 py-[14px] text-right">
                  <Link
                    href="/appointments"
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