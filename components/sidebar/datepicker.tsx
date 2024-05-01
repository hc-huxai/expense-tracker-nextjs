"use client";

import { useEffect, useState } from "react";
import { format } from "date-fns";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DatePickerProps {
  isExpanded: boolean;
}

export const DatePicker = ({ isExpanded }: DatePickerProps) => {
  const [date, setDate] = useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"ghost"}
          className={cn(
            "w-full h-32 flex flex-col items-center justify-center gap-1 origin-top-left"
          )}
          asChild
        >
          <motion.button
            animate={{
              scale: isExpanded ? 1 : 0,
              opacity: isExpanded ? 1 : 0,
              width: isExpanded ? "100%" : 0,
              height: isExpanded ? 128 : 0,
            }}
            transition={{ ease: "easeInOut" }}
          >
            <span className="text-5xl font-bold">
              2:00 <span className="text-xl">AM</span>
            </span>

            <span className="text-xl font-bold text-muted-foreground">
              Thursday
            </span>
            <span className="text-base text-muted-foreground font-light">
              May 2, 2024
            </span>
          </motion.button>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};
