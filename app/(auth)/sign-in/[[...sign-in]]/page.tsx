import { SignIn } from "@clerk/nextjs";

export default function AuthPage() {
  return <SignIn path="/sign-in" />;
}
