import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MoreHorizontal } from "lucide-react";

import { patients } from "@/data/patients";

import { PatientOverview } from "@/components/patient-overview";
import { MedicalHistory } from "@/components/medical-history";
import { RecentAppointments } from "@/components/recent-appointments";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

interface PatientDetailsProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PatientDetails({
  params,
}: PatientDetailsProps) {
  const { id } = await params;

  const patient = patients.find(
    (patient) => patient.id === id
  );

  if (!patient) {
    notFound();
  }

  return (
    <div>
      {/* Back button */}
      <Link href="/patients">
        <Button
          variant="ghost"
          className="mb-3.5 h-auto cursor-pointer gap-1.5 p-0 text-[13px] text-back-button hover:bg-transparent hover:text-back-button-hover"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Patients
        </Button>
      </Link>

      {/* Patient Header */}
      <Card className="mb-5 rounded-md p-6">
        <div className="flex items-center justify-between">

          {/* Left */}
          <div className="flex items-center gap-4">
            <Avatar className="h-14 w-14">
              <AvatarFallback className="bg-blue-100 text-[20px] font-bold text-blue-500">
                {patient.initials}
              </AvatarFallback>
            </Avatar>

            <div>
              <h2 className="text-xl font-semibold">
                {patient.name}
              </h2>

              <div className="flex items-center gap-4 text-[13px] text-gray-500">
                <span>{patient.id}</span>

                <span className="text-gray-300">·</span>

                <span>{patient.gender}</span>

                <span className="text-gray-300">·</span>

                <span>{patient.age} years</span>

                <span className="text-gray-300">·</span>

                <span>
                  Blood Group: {patient.bloodGroup}
                </span>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-2.5">
            <Badge className="rounded-xl bg-green-100 px-3 py-1 text-xs text-green-700 hover:bg-green-100">
              {patient.status}
            </Badge>

            <Button className="h-10 rounded-md bg-teal-500 px-5 text-[13px] font-medium hover:bg-teal-600">
              Edit Patient
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="h-10 w-11 rounded-md"
            >
              <MoreHorizontal />
            </Button>
          </div>
        </div>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="overview" className="w-full">

        <TabsList className="flex h-auto w-full justify-start rounded-b-none border-b-2 bg-transparent">

          <TabsTrigger
            value="overview"
            className="rounded-b-none px-5 py-2 text-sm font-normal text-muted-foreground
            data-[state=active]:border-b-2
            data-[state=active]:border-b-back-button
            data-[state=active]:font-medium
            data-[state=active]:text-back-button
            data-[state=active]:shadow-none"
          >
            Overview
          </TabsTrigger>

          <TabsTrigger
            value="medical-history"
            className="rounded-b-none px-5 py-2 text-sm font-normal text-muted-foreground
            data-[state=active]:border-b-2
            data-[state=active]:border-b-back-button
            data-[state=active]:font-medium
            data-[state=active]:text-back-button
            data-[state=active]:shadow-none"
          >
            Medical History
          </TabsTrigger>

          <TabsTrigger
            value="appointments"
            className="rounded-b-none px-5 py-2 text-sm font-normal text-muted-foreground
            data-[state=active]:border-b-2
            data-[state=active]:border-b-back-button
            data-[state=active]:font-medium
            data-[state=active]:text-back-button
            data-[state=active]:shadow-none"
          >
            Appointments
          </TabsTrigger>

          <TabsTrigger
            value="documents"
            className="rounded-b-none px-5 py-2 text-sm font-normal text-muted-foreground
            data-[state=active]:border-b-2
            data-[state=active]:border-b-back-button
            data-[state=active]:font-medium
            data-[state=active]:text-back-button
            data-[state=active]:shadow-none"
          >
            Documents
          </TabsTrigger>

        </TabsList>

        {/* Overview */}
        <TabsContent value="overview" className="mt-6">
          <PatientOverview patient={patient} />
        </TabsContent>

        {/* Medical History */}
        <TabsContent value="medical-history" className="mt-6">
          <MedicalHistory patient={patient} />
        </TabsContent>

        {/* Appointments */}
        <TabsContent value="appointments" className="mt-6">
          <RecentAppointments appointments={patient.appointments} />
        </TabsContent>

        {/* Documents */}
        <TabsContent value="documents" className="mt-6">
          <Card>
            <CardContent className="p-6">
              Documents
            </CardContent>
          </Card>
        </TabsContent>

      </Tabs>
    </div>
  );
}