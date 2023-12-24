import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const reqBody = await request.json();
  return NextResponse.json(reqBody, { status: 200 });
}
