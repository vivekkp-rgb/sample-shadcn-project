import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, CalendarCheck, CheckSquare, TriangleAlert, Plus } from "lucide-react";
import { TodaysAppointments } from "@/components/todays-appointments";
import { ClinicalAlerts } from "@/components/clinical-alerts";
import { RecentPatients } from "@/components/recent-patients";
import { patients, todaysAppointments, clinicalAlerts } from "@/data/patients";

export default function DashboardPage() {
  return (
    <div>
      {/* Welcome Section */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold">
            Good morning, Dr. Sarah
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Here&apos;s your clinical overview for today.
          </p>
        </div>

        <Button className="h-9.5 w-full gap-1.5 rounded-md px-4 sm:w-auto">
          <Plus className="h-4 w-4" />
          New Patient
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Patients"
          value={String(patients.length)}
          subtitle="+12 this month"
          icon={
            <Users className="h-[18px] w-[18px] text-primary" />
          }
          iconBg="bg-accent"
          subtitleColor="text-primary"
        />

        <StatsCard
          title="Today's Appointments"
          value={String(todaysAppointments.length)}
          subtitle="8 remaining"
          icon={
            <CalendarCheck className="h-[18px] w-[18px] text-secondary-foreground" />
          }
          iconBg="bg-secondary"
          subtitleColor="text-secondary-foreground"
        />

        <StatsCard
          title="Follow-ups"
          value="12"
          subtitle="5 due today"
          icon={
            <CheckSquare className="h-[18px] w-[18px] text-[#9A83C4]" />
          }
          iconBg="bg-[#F0EAF8]"
          subtitleColor="text-[#9A83C4]"
        />

        <StatsCard
          title="Critical Alerts"
          value={String(clinicalAlerts.length)}
          subtitle="Requires attention"
          icon={
            <TriangleAlert className="h-[18px] w-[18px] text-destructive" />
          }
          iconBg="bg-[#FDE8E7]"
          subtitleColor="text-destructive"
        />
      </div>

      {/* Appointments + Alerts */}
      <div className="mb-6 flex flex-col gap-5 lg:flex-row">
        <div className="min-w-0 flex-[2.9]">
          <TodaysAppointments />
        </div>

        <div className="min-w-0 flex-[1.1]">
          <ClinicalAlerts />
        </div>
      </div>

      {/* Recent Patients */}
      <RecentPatients />
    </div>
  );
}

function StatsCard({
  title,
  value,
  subtitle,
  icon,
  iconBg,
  subtitleColor,
}: {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ReactNode;
  iconBg: string;
  subtitleColor: string;
}) {
  return (
    <Card className="rounded-xl">
      <CardContent className="p-5">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[13px] font-medium text-muted-foreground">
            {title}
          </span>
          <div
            className={`flex h-9 w-9 items-center justify-center rounded-lg ${iconBg}`}
          >
            {icon}
          </div>
        </div>
        <div className="text-[28px] font-semibold">{value}</div>
        <div className={`mt-1 text-xs ${subtitleColor}`}>{subtitle}</div>
      </CardContent>
    </Card>
  );
}
