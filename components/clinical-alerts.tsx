import { Avatar, AvatarFallback } from "./ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

import { clinicalAlerts } from "@/data/patients";

const alertStyles = {
  red: {
    card: "bg-red-50",
    name: "text-red-700",
    message: "text-red-700",
    time: "text-red-500",
    avatar: "text-red-500",
  },
  yellow: {
    card: "bg-yellow-50",
    name: "text-yellow-700",
    message: "text-yellow-700",
    time: "text-yellow-500",
    avatar: "text-yellow-500",
  },
  green: {
    card: "bg-green-50",
    name: "text-green-700",
    message: "text-green-700",
    time: "text-green-500",
    avatar: "text-green-500",
  },
};

export function ClinicalAlerts() {
  return (
    <Card className="h-full overflow-hidden rounded-xl border-slate-200 px-5 py-4.5">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="mb-4 text-base font-semibold text-slate-900">
          Clinical Alerts
        </CardTitle>
      </CardHeader>

      <div className="flex flex-col gap-3">
        {clinicalAlerts.map((alert) => {
          const styles = alertStyles[alert.color];

          return (
            <Card
              key={alert.patient}
              className={`rounded-xl border-0 ${styles.card} shadow-none`}
            >
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Avatar className="h-7 w-7 bg-white">
                    <AvatarFallback
                      className={`bg-white ${styles.avatar} text-[11px] font-semibold`}
                    >
                      {alert.initials}
                    </AvatarFallback>
                  </Avatar>

                  <span
                    className={`text-[13px] font-medium ${styles.name}`}
                  >
                    {alert.patient}
                  </span>
                </div>

                <p className={`mt-2 text-[13px] ${styles.message}`}>
                  {alert.msg}
                </p>

                <p className={`mt-1 text-[11px] ${styles.time}`}>
                  {alert.time}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Card>
  );
}