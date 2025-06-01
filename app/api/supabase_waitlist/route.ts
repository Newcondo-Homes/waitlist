// app/api/waitlist/route.ts
import { supabase } from "@/lib/supabase";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { email, firstname } = await req.json();

  const { data, error } = await supabase
    .from("waitlist")
    .insert([{ email, firstname }]);

  if (error) {
    console.error("Supabase insert error:", error); 
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ message: "Email added successfully", data });
}
