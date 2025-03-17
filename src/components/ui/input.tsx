import * as React from "react";

import { cn } from "@/lib/utils";

import { Search } from "lucide-react";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <div
      className={cn(
        "border-input file:text-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-mainText shadow-xs transition-[color,box-shadow]",
        "gap-2 my-auto items-center p-2",
        className
      )}
    >
      <Search size={16} />
      <input
        type={type}
        data-slot="input"
        className={cn(
          "placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
        )}
        {...props}
      />
    </div>
  );
}

export { Input };
