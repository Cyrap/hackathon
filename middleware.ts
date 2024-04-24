import { NextRequest } from "next/server";
import { updateSession } from "@/app/lib/login";
export async function middleware(request:NextRequest) {
    return await updateSession(request);
}