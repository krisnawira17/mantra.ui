"use client";

import { ColumnDef } from "@tanstack/react-table";
import clsx from "clsx";

import { formatDate } from "@/globalFunc";
import { Star } from "lucide-react";

export type Manga = {
  id: string;
  name: string;
  status: "Reading" | "Read" | "Dropped" | "Plan to Read";
  currentChapter: number;
  lastRead: Date;
  ratings: number;
  readerId: string;
};

export const columns: ColumnDef<Manga>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "currentChapter",
    header: "Current Chapter",
    cell: ({ row }) => {
      const chapter = row.getValue("currentChapter") as number;
      return <div>Ch.{chapter}</div>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as
        | "Reading"
        | "Read"
        | "Dropped"
        | "Plan to Read";
      return (
        <div
          className={clsx(
            {
              "text-blue-500 bg-blue-200 text-sm font-medium p-0.5 rounded-xl w-[3rem]":
                status === "Read",
            },
            {
              "text-red-600 bg-red-200 font-medium p-0.5 rounded-xl w-[4.25rem]":
                status === "Dropped",
            },
            {
              "text-green-600 font-medium bg-green-200 p-0.5 rounded-xl w-[4.2rem]":
                status === "Reading",
            },
            {
              "text-gray-500 font-medium bg-gray-200 p-0.5 rounded-xl w-[6rem]":
                status === "Plan to Read",
            }
          )}
        >
          <p className="mx-1.5">{status}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "lastRead",
    header: "Last Read",
    cell: ({ row }) => {
      const lastRead = row.getValue("lastRead") as Date;
      const formatted = formatDate(lastRead);

      return <div className="">{formatted}</div>;
    },
  },
  {
    accessorKey: "ratings",
    header: "Ratings",
    cell: ({ row }) => {
      const rating = parseFloat(row.getValue("ratings")) as number;
      return (
        <div className="flex flex-row gap-2">
          <Star size={20} color="oklch(0.879 0.169 91.605)" />
          {rating}
        </div>
      );
    },
  },
];
