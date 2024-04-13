import { NextResponse } from "next/server";
import fs from 'fs/promises'
import { headers } from "next/headers";


export async function POST(request){
    // const head = headers()
    const body = await request.json()
    console.log(body.user);
    return NextResponse.json({success: true, request})
}