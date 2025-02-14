import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const token = await req.text();
    // const res = await fetch("http://localhost:8000/api/auth/CreateUser", {
    //   method: "POST",
    //   credentials: "include",
    //   body: JSON.stringify(token),
    // });
    // const body = await res.json();
    // console.log(body);
    console.log(token);
    return NextResponse.json("hello");
  } catch (error) {
    console.log(error);
  }
};
