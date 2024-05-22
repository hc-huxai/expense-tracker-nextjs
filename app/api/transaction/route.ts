import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();

    const { category, amount, type, title, description } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!category) {
      return new NextResponse("Category is required", { status: 400 });
    }

    if (!amount) {
      return new NextResponse("Amount is required", { status: 400 });
    }

    if (!type) {
      return new NextResponse("Type is required", { status: 400 });
    }

    if (!title) {
      return new NextResponse("Title is required", { status: 400 });
    }

    if (!description) {
      return new NextResponse("Description is required", { status: 400 });
    }

    const transaction = await prismadb.transaction.create({
      data: {
        title,
        description,
      },
    });

    return NextResponse.json(transaction);
  } catch (error) {
    console.log("[TRANSACTION_POST]", error);
    return new NextResponse("Something went wrong", { status: 500 });
  }
}
