"use client";
import { useTransactionModal } from "@/hooks/use-transaction-modal";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

export const TransactionModal = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { isOpen, onClose } = useTransactionModal();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className={cn(isOpen == false && "hidden")} onClick={onClose}>
      This is Transaction Modal
    </div>
  );
};
