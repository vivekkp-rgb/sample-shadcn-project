import { Avatar, AvatarFallback } from "./ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
type AlertColor = "red" | "yellow" | "green";

const Patients:{
    initials: string;
    patient: string;
    msg: string;
    time: string;
    color: AlertColor;
    }[] = [
  {
    initials: "JS",
    patient: "John Smith",
    msg: "Blood pressure reading requires review.",
    time: "10 minutes ago",
    color: "red",
  },
  {
    initials: "MT",
    patient: "Maria Thomas",
    msg: "Follow-up appointment overdue.",
    time: "2 hours ago",
    color: "yellow",
  },
  {
    initials: "RL",
    patient: "Robert Lee",
    msg: "Lab results ready for review.",
    time: "3 hours ago",
    color: "green",
  },
];

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

export function ClinicalAlerts(){
    return(
        <Card className="h-full overflow-hidden rounded-xl border-slate-200 px-5 py-4.5">
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-base font-semibold text-slate-900 mb-4">
                    Clinical Alerts
                </CardTitle>
            </CardHeader>
            <div className="flex flex-col gap-3">
                {Patients.map(patient => {
                const styles = alertStyles[patient.color];
                return(

                <Card key={patient.patient} className={`border-0 ${styles.card} shadow-none rounded-xl`}>
                    <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                        <Avatar className="h-7 w-7 bg-white ">
                            <AvatarFallback className={`bg-white ${styles.avatar} text-[11px] font-semibold`}>
                            {patient.initials}
                            </AvatarFallback>
                        </Avatar>

                        <span className={`text-[13px] font-medium ${styles.name}`}>
                            {patient.patient}
                        </span>
                        </div>

                        <p className={`mt-2 text-[13px] ${styles.message}`}>
                        {patient.msg}
                        </p>

                        <p className={`mt-1 text-[11px] ${styles.time}`}>
                        {patient.time}
                        </p>
                    </CardContent>
                </Card>
                );
                })}
                
            </div>
        </Card>
    );
}