import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Patient } from "@/data/patients";

interface PatientOverviewProps {
  patient: Patient;
}

export function PatientOverview({ patient }: PatientOverviewProps) {
  return (
    <div className="mb-5 grid grid-cols-2 gap-6">
      <PatientInformation patient={patient} />
      <CurrentVitals patient={patient} />
    </div>
  );
}

function PatientInformation({ patient }: PatientOverviewProps) {
  return (
    <Card className="rounded-xl border-border shadow-none">
      <CardHeader className="px-6 pb-3 pt-6">
        <CardTitle className="text-[18px] font-semibold">
          Patient Information
        </CardTitle>
      </CardHeader>

      <CardContent className="px-6 pb-6">
        <div className="grid grid-cols-2 gap-x-10 gap-y-5">
          <InfoItem
            label="Full Name"
            value={patient.name}
          />

          <InfoItem
            label="Date of Birth"
            value={patient.dateOfBirth}
          />

          <InfoItem
            label="Gender"
            value={patient.gender}
          />

          <InfoItem
            label="Blood Group"
            value={patient.bloodGroup}
          />

          <InfoItem
            label="Phone"
            value={patient.phone}
          />

          <InfoItem
            label="Email"
            value={patient.email}
          />

          <div className="col-span-2">
            <InfoItem
              label="Address"
              value={patient.address}
            />
          </div>
        </div>

        <div className="my-5 border-t border-border" />

        <h3 className="mb-4 text-[15px] font-semibold">
          Emergency Contact
        </h3>

        <div className="grid grid-cols-2 gap-x-10 gap-y-5">
          <InfoItem
            label="Name"
            value={patient.emergencyContact.name}
          />

          <InfoItem
            label="Relationship"
            value={patient.emergencyContact.relationship}
          />

          <InfoItem
            label="Phone"
            value={patient.emergencyContact.phone}
          />
        </div>
      </CardContent>
    </Card>
  );
}

function InfoItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="mb-1 text-[13px] text-muted-foreground">
        {label}
      </p>

      <p className="text-[15px] text-foreground">
        {value}
      </p>
    </div>
  );
}

function CurrentVitals({ patient }: PatientOverviewProps) {
  return (
    <Card className="rounded-xl border-border shadow-none">
      <CardHeader className="px-6 pb-3 pt-6">
        <CardTitle className="text-[18px] font-semibold">
          Current Vitals
        </CardTitle>
      </CardHeader>

      <CardContent className="px-6 pb-6">
        <div className="grid grid-cols-2 gap-4">
          <VitalCard
            title="Blood Pressure"
            value={patient.vitals.bloodPressure}
            unit="mmHg"
          />

          <VitalCard
            title="Heart Rate"
            value={patient.vitals.heartRate}
            unit="bpm"
          />

          <VitalCard
            title="Temperature"
            value={patient.vitals.temperature}
            unit="°F"
          />

          <VitalCard
            title="SpO₂"
            value={patient.vitals.spo2}
            unit="Oxygen"
          />
        </div>
      </CardContent>
    </Card>
  );
}

function VitalCard({
  title,
  value,
  unit,
}: {
  title: string;
  value: string;
  unit: string;
}) {
  return (
    <div className="rounded-xl bg-green-50 p-5">
      <p className="text-[12px] font-medium text-green-700">
        {title}
      </p>

      <p className="mt-2 text-[22px] font-semibold leading-none text-black">
        {value}
      </p>

      <p className="mt-1 text-[12px] text-muted-foreground">
        {unit}
      </p>

      <Badge className="mt-2 rounded-full bg-white px-2.5 py-0.5 text-[12px] font-medium text-green-700 hover:bg-white">
        Normal
      </Badge>
    </div>
  );
}