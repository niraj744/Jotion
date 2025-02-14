import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const token = await req.text();
    await axios.post(
      "https://jotion-backend.osc-fr1.scalingo.io/api/auth/CreateUser",
      {
        token,
      },
      {
        withCredentials: true,
      }
    );
    return NextResponse.json("actions performed successfully");
  } catch (error) {
    console.log(error);
  }
};
