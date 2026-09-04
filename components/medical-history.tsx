import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Patient } from "@/data/patients";

interface MedicalHistoryProps {
  patient: Patient;
}

export function MedicalHistory({ patient }: MedicalHistoryProps) {
  return (
    <Card className="mb-5 rounded-xl border-border shadow-none">
      <CardHeader className="px-6 pb-3 pt-6">
        <CardTitle className="text-[18px] font-semibold">
          Medical History
        </CardTitle>
      </CardHeader>

      <CardContent className="px-6 pb-6">
        <div className="relative">
          {patient.medicalHistory.map((item, index) => {
            const isLast =
              index === patient.medicalHistory.length - 1;

            return (
              <div
                key={`${item.date}-${item.title}`}
                className="relative flex gap-5"
              >
                {/* Timeline */}
                <div className="relative flex w-3 shrink-0 justify-center">
                  {!isLast && (
                    <div className="absolute top-3 h-full w-[2px] bg-border" />
                  )}

                  <div className="relative z-10 mt-1.5 h-3 w-3 rounded-full bg-primary" />
                </div>

                {/* Content */}
                <div className={isLast ? "pb-0" : "pb-6"}>
                  <p className="text-[14px] text-muted-foreground">
                    {item.date}
                  </p>

                  <p className="mt-1 text-[16px] font-medium text-foreground">
                    {item.title}
                  </p>

                  <p className="mt-0.5 text-[15px] text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}