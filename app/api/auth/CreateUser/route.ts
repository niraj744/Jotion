import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const token = await req.text();
    const res = await axios.post(
      "http://localhost:8000/api/auth/CreateUser",
      {
        token,
      },
      {
        withCredentials: true,
      }
    );
    return NextResponse.json(res);
  } catch (error) {
    console.log(error);
  }
};
