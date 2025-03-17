"use client";
import * as React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DataTable } from "./data-table";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { mangaData } from "@/hook/useDashboard";
import { columns } from "./columns";

const option: { value: string; label: string }[] = [
  {
    value: "reading",
    label: "Reading",
  },
  {
    value: "read",
    label: "Read",
  },
  {
    value: "dropped",
    label: "Dropped",
  },
  {
    value: "planToRead",
    label: "Plan to Read",
  },
];

const handleSort = (value: string) => {
  console.log(value);
};

export default function Page() {
  return (
    <div className="px-8 flex flex-col">
      <div className="flex flex-row justify-between">
        <Select onValueChange={handleSort}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {option.map((item, i) => (
                <SelectItem key={i} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <form>
          <Label htmlFor="search"></Label>
          <Input
            type="text"
            id="search"
            placeholder="search your saved manga"
          />
        </form>
      </div>
      <div className="mt-4">
        <DataTable columns={columns} data={mangaData} />
      </div>
    </div>
  );
}
