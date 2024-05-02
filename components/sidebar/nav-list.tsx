import { NavItemType } from "@/types/nav-item";
import {
  Banknote,
  CalendarCheck2,
  CalendarClock,
  Goal,
  HandCoins,
  Home,
  PieChart,
  ReceiptText,
} from "lucide-react";
import { Button } from "../ui/button";

export const NavList = () => {
  const navList: NavItemType[] = [
    { label: "Home", icon: <Home />, onClick: () => {} },
    { label: "Transactions", icon: <Banknote />, onClick: () => {} },
    { label: "Budgets", icon: <PieChart />, onClick: () => {} },
    { label: "Goals", icon: <Goal />, onClick: () => {} },
    { label: "Subscriptions", icon: <CalendarClock />, onClick: () => {} },
    { label: "Scheduled", icon: <CalendarCheck2 />, onClick: () => {} },
    { label: "Loans", icon: <HandCoins />, onClick: () => {} },
    { label: "All Spending", icon: <ReceiptText />, onClick: () => {} },
  ];

  return (
    <nav className="flex flex-col gap-0.5 w-full">
      {navList.map((item: NavItemType) => (
        <Button
          key={item.label}
          className="w-full flex items-center justify-start gap-4 h-12 rounded-3xl px-6 "
          variant={"ghost"}
        >
          <div className="*:w-5 *:h-5">{item.icon}</div>
          <span>{item.label}</span>
        </Button>
      ))}
    </nav>
  );
};
