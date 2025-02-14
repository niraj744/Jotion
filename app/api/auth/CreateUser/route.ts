import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const token = await req.text();
    console.log(token);
    const res = await axios.post(
      "https://jotion-backend.osc-fr1.scalingo.io/api/auth/CreateUser",
      {
        token,
      },
      {
        withCredentials: true,
      }
    );
    console.log(res);
    return NextResponse.json(res);
  } catch (error) {
    console.log(error);
  }
};
