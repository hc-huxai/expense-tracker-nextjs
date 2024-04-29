import { Header } from "@/components/header";
import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="w-screen">
      <UserButton />
    </div>
  );
}
