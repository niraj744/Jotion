import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const token = await req.json();
  console.log(token);
  const fetchapi = await fetch("http://localhost:8000");
  const body = await fetchapi.json();
  console.log(body);
  return NextResponse.json(body);
};
