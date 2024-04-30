"use client";

import { ChevronRight, Wallet } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const Sidebar = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <motion.aside
      className="border-r h-screen flex flex-col items-center py-4 px-2 fixed bg-white z-10"
      initial={{ width: "64px" }}
      animate={{ width: isExpanded ? "200px" : "64px" }}
      transition={{ type: "spring" }}
    >
      <Button
        size={"icon"}
        variant={"outline"}
        className="w-5 h-5 rounded-full absolute top-2 right-[-10px]"
        onClick={() => setIsExpanded(!isExpanded)}
        asChild
      >
        <motion.button
          initial={{ scaleX: 1 }}
          animate={{ scaleX: isExpanded ? -1 : 1 }}
        >
          <ChevronRight className="w-4 h-4" />
        </motion.button>
      </Button>
      <Button size={"icon"} variant={"ghost"}>
        <Wallet className="w-6 h-6" />
      </Button>
    </motion.aside>
  );
};
