"use client";

import React from "react";
import Link from "next/link";

import {
  Card,
  CardContent,
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
import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";

import {
  ChevronLeft,
  ChevronRight,
  Search,
} from "lucide-react";

import { patients } from "@/data/patients";
import { useTable } from "@/hooks/useTable";



const avatarStyles = {
  blue: "bg-blue-100 text-blue-500",
  green: "bg-green-100 text-green-500",
  purple: "bg-purple-100 text-purple-500",
  red: "bg-red-100 text-red-500",
};

const statusStyles = {
  Stable:
    "bg-green-100 text-green-700 hover:bg-green-100",

  "Follow-Up":
    "bg-orange-100 text-orange-700 hover:bg-orange-100",

  Critical:
    "bg-red-100 text-red-600 hover:bg-red-100",
};



type PatientStatus =
  | "All"
  | "Stable"
  | "Follow-Up"
  | "Critical";



export function PatientsTable() {
  

  const [status, setStatus] =
    React.useState<PatientStatus>("All");

  

  const {
    data: currentPatients,

    search,
    setSearch,

    currentPage,
    setCurrentPage,

    totalPages,
    totalItems,
    startIndex,

    visiblePages,
  } = useTable({
    data: patients,

    searchFields: [
      "name",
      "id",
    ],

    pageSize: 6,

    filterFn: (patient) => {
      if (status === "All") {
        return true;
      }

      return patient.status === status;
    },
  });



  function handleStatusChange(
    value: PatientStatus
  ) {
    setStatus(value);
    setCurrentPage(1);
  }



  return (
    <div>
      

      <div className="mb-5 flex items-center gap-3">
        {/* Search */}

        <div className="relative w-[400px]">
          <Search
            className="
              absolute
              left-3
              top-1/2
              h-4
              w-4
              -translate-y-1/2
              text-slate-400
            "
          />

          <input
            type="text"
            placeholder="Search by name or ID..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="
              h-11
              w-full
              rounded-lg
              border
              border-slate-200
              bg-white
              pl-10
              pr-4
              text-sm
              text-foreground
              outline-none
              placeholder:text-slate-400
              focus:border-teal-400
              focus:ring-1
              focus:ring-teal-400
            "
          />
        </div>

        {/* Filters */}

        <div className="flex items-center gap-2">
          <FilterButton
            active={status === "All"}
            onClick={() =>
              handleStatusChange("All")
            }
          >
            All
          </FilterButton>

          <FilterButton
            active={status === "Stable"}
            onClick={() =>
              handleStatusChange("Stable")
            }
          >
            Stable
          </FilterButton>

          <FilterButton
            active={status === "Follow-Up"}
            onClick={() =>
              handleStatusChange("Follow-Up")
            }
          >
            Follow-up
          </FilterButton>

          <FilterButton
            active={status === "Critical"}
            onClick={() =>
              handleStatusChange("Critical")
            }
          >
            Critical
          </FilterButton>
        </div>
      </div>

    

      <Card
        className="
          overflow-hidden
          rounded-xl
          border-slate-200
          shadow-none
        "
      >
        <CardContent className="p-0">
          <Table>
            {/* TABLE HEADER */}

            <TableHeader>
              <TableRow
                className="
                  border-b
                  border-slate-200
                  hover:bg-transparent
                "
              >
                <TableHead
                  className="
                    px-6
                    py-4
                    text-xs
                    font-medium
                    uppercase
                    tracking-wide
                    text-slate-500
                  "
                >
                  Patient
                </TableHead>

                <TableHead
                  className="
                    px-4
                    py-4
                    text-xs
                    font-medium
                    uppercase
                    tracking-wide
                    text-slate-500
                  "
                >
                  ID
                </TableHead>

                <TableHead
                  className="
                    px-4
                    py-4
                    text-xs
                    font-medium
                    uppercase
                    tracking-wide
                    text-slate-500
                  "
                >
                  Age / Gender
                </TableHead>

                <TableHead
                  className="
                    px-4
                    py-4
                    text-xs
                    font-medium
                    uppercase
                    tracking-wide
                    text-slate-500
                  "
                >
                  Condition
                </TableHead>

                <TableHead
                  className="
                    px-4
                    py-4
                    text-xs
                    font-medium
                    uppercase
                    tracking-wide
                    text-slate-500
                  "
                >
                  Last Visit
                </TableHead>

                <TableHead
                  className="
                    px-4
                    py-4
                    text-xs
                    font-medium
                    uppercase
                    tracking-wide
                    text-slate-500
                  "
                >
                  Status
                </TableHead>

                <TableHead
                  className="
                    px-6
                    py-4
                    text-right
                    text-xs
                    font-medium
                    uppercase
                    tracking-wide
                    text-slate-500
                  "
                >
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>

            {/* TABLE BODY */}

            <TableBody>
              {currentPatients.map(
                (patient) => (
                  <TableRow
                    key={patient.id}
                    className="
                      border-b
                      border-slate-200
                      last:border-b-0
                      hover:bg-gray-50
                    "
                  >
                    {/* Patient */}

                    <TableCell className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-9 w-9">
                          <AvatarFallback
                            className={`
                              text-xs
                              font-semibold
                              ${
                                avatarStyles[
                                  patient.avatarColor
                                ]
                              }
                            `}
                          >
                            {patient.initials}
                          </AvatarFallback>
                        </Avatar>

                        <span
                          className="
                            text-sm
                            font-medium
                            text-foreground
                          "
                        >
                          {patient.name}
                        </span>
                      </div>
                    </TableCell>

                    {/* ID */}

                    <TableCell
                      className="
                        px-4
                        py-4
                        text-sm
                        text-slate-500
                      "
                    >
                      {patient.id}
                    </TableCell>

                    {/* AGE / GENDER */}

                    <TableCell
                      className="
                        px-4
                        py-4
                        text-sm
                        text-slate-500
                      "
                    >
                      {patient.age} ·{" "}
                      {patient.gender}
                    </TableCell>

                    {/* CONDITION */}

                    <TableCell
                      className="
                        px-4
                        py-4
                        text-sm
                        text-slate-500
                      "
                    >
                      {patient.condition}
                    </TableCell>

                    {/* LAST VISIT */}

                    <TableCell
                      className="
                        px-4
                        py-4
                        text-sm
                        text-slate-500
                      "
                    >
                      {patient.medicalHistory[0]
                        ?.date ?? "—"}
                    </TableCell>

                    {/* STATUS */}

                    <TableCell className="px-4 py-4">
                      <Badge
                        className={`
                          rounded-full
                          px-3
                          py-1
                          text-xs
                          font-medium
                          ${
                            statusStyles[
                              patient.status
                            ]
                          }
                        `}
                      >
                        {patient.status}
                      </Badge>
                    </TableCell>

                    {/* ACTION */}

                    <TableCell
                      className="
                        px-6
                        py-4
                        text-right
                      "
                    >
                      <Link
                        href={`/patients/${patient.id}`}
                        className="
                          text-sm
                          font-medium
                          text-teal-500
                          hover:text-teal-600
                        "
                      >
                        View
                      </Link>
                    </TableCell>
                  </TableRow>
                )
              )}

              {/* EMPTY STATE */}

              {currentPatients.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={7}
                    className="
                      h-32
                      text-center
                      text-sm
                      text-muted-foreground
                    "
                  >
                    No patients found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>

        {/* ================================= */}
        {/* PAGINATION */}
        {/* ================================= */}

        <div
          className="
            flex
            items-center
            justify-between
            border-t
            border-slate-200
            px-6
            py-4
          "
        >
          {/* Showing X - Y */}

          <p className="text-sm text-slate-500">
            Showing{" "}
            {totalItems === 0
              ? 0
              : startIndex + 1}
            {" - "}
            {Math.min(
              startIndex + 6,
              totalItems
            )}{" "}
            of {totalItems} patients
          </p>

          {/* Pagination */}

          <div className="flex items-center gap-2">
            {/* Previous */}

            <Button
              variant="outline"
              size="icon"
              disabled={currentPage === 1}
              onClick={() =>
                setCurrentPage(
                  currentPage - 1
                )
              }
              className="h-10 w-10 rounded-lg"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* 3 PAGE CAROUSEL */}

            {visiblePages.map((page) => (
              <Button
                key={page}
                variant="outline"
                onClick={() =>
                  setCurrentPage(page)
                }
                className={`
                  h-10
                  w-10
                  rounded-lg
                  ${
                    currentPage === page
                      ? "border-teal-500 bg-teal-500 text-white hover:bg-teal-600 hover:text-white"
                      : ""
                  }
                `}
              >
                {page}
              </Button>
            ))}

            {/* Next */}

            <Button
              variant="outline"
              size="icon"
              disabled={
                currentPage === totalPages ||
                totalPages === 0
              }
              onClick={() =>
                setCurrentPage(
                  currentPage + 1
                )
              }
              className="h-10 w-10 rounded-lg"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

// =================================
// FILTER BUTTON
// =================================

function FilterButton({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`
        h-11
        rounded-lg
        border
        px-5
        text-sm
        font-medium
        transition
        ${
          active
            ? "border-teal-100 bg-teal-50 text-teal-500"
            : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
        }
      `}
    >
      {children}
    </button>
  );
}