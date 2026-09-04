import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

import { patients } from "@/data/patients";
import { PatientsTable } from "@/components/patients-table";

export default function PatientsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-foreground">
            Patients
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            {patients.length} total patients under your care.
          </p>
        </div>

        <Button className="h-11 rounded-lg bg-teal-500 px-5 text-sm font-medium hover:bg-teal-600">
          <Plus className="mr-2 h-4 w-4" />
          New Patient
        </Button>
      </div>

      {/* Patients table */}
      <PatientsTable />
    </div>
  );
}