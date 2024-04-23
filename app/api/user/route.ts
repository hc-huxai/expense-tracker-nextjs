import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { email, name, password } = body;

    if (!email) {
      return new NextResponse("Email is required", { status: 400 });
    }

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    if (!password) {
      return new NextResponse("Password is required", { status: 400 });
    }

    const user = await prismadb.user.create({
      data: {
        email: email,
        name: name,
        password: password,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.log("[USER_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
