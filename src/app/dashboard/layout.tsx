"use client";
import { TitleLogo } from "@/assets";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [page, setPage] = useState(0);
  return (
    <>
      <div className="flex flex-row shadow-md p-8 sh mb-8 items-center">
        <div className="flex flex-row gap-4">
          <Image src={TitleLogo} alt="Title-logo" />
          <h1 className="font-bold text-2xl text-mainPurple">Mantra</h1>
        </div>
        <nav className="flex flex-row gap-12 mx-auto text-lg">
          <ul
            className={clsx(
              {
                "text-mainPurple": page === 0,
                "text-mainText": page !== 0,
              },
              "cursor-pointer transition-colors"
            )}
            onClick={() => setPage(0)}
          >
            <span
              className={clsx({
                "hover:underline hover:decoration-2 decoration-underlined-hover hover:underline-offset-8 transition-all":
                  page !== 0,
                "underline decoration-2 decoration-mainPurple underline-offset-8 transition-all":
                  page === 0,
              })}
            >
              Dashboard
            </span>
          </ul>
          <ul
            className={clsx(
              {
                "text-mainPurple": page === 1,
                "text-mainText": page !== 1,
              },
              "cursor-pointer transition-colors"
            )}
            onClick={() => setPage(1)}
          >
            <span
              className={clsx({
                "hover:underline hover:decoration-2 decoration-underlined-hover hover:underline-offset-8 transition-all":
                  page !== 1,
                "underline decoration-2 decoration-mainPurple underline-offset-8 transition-all":
                  page === 1,
              })}
            >
              Stats
            </span>
          </ul>
          <ul
            className={clsx(
              {
                "text-mainPurple": page === 2,
                "text-mainText": page !== 2,
              },
              "cursor-pointer transition-colors"
            )}
            onClick={() => setPage(2)}
          >
            <span
              className={clsx({
                "hover:underline hover:decoration-2 decoration-underlined-hover hover:underline-offset-8 transition-all":
                  page !== 2,
                "underline decoration-2 decoration-mainPurple underline-offset-8 transition-all":
                  page === 2,
              })}
            >
              Browse
            </span>
          </ul>
        </nav>
        <Avatar>
          <AvatarImage src="https://res.lootbar.gg/pic/20241213/8852dc0c-9a65-4e6f-b4b4-bd5f6234fb0c.jpg" />
          <AvatarFallback>ZN</AvatarFallback>
        </Avatar>
      </div>
      <div className="p-8">{children}</div>
    </>
  );
}
