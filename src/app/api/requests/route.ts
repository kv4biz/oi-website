import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const supabase = await createClient();
  const body = await request.json();
  const { name, email, company, demo_id, message, discover_source } = body;

  if (!name || !email || !demo_id) {
    return NextResponse.json(
      { error: "Missing required fields: name, email, demo_id" },
      { status: 400 },
    );
  }

  const { data, error } = await supabase
    .from("requests")
    .insert({
      name,
      email,
      company: company || null,
      demo_id,
      message: message || null,
      discover_source: discover_source || null,
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json(data, { status: 201 });
}
