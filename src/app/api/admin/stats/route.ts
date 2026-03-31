import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET() {
  const supabase = await createClient();

  // Check authentication
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Get totals
  const [
    { count: demosCount },
    { count: requestsCount },
    { count: subscribersCount },
  ] = await Promise.all([
    supabase.from("demos").select("*", { count: "exact", head: true }),
    supabase.from("requests").select("*", { count: "exact", head: true }),
    supabase.from("subscribers").select("*", { count: "exact", head: true }),
  ]);

  // Get requests per day for the last 90 days
  const ninetyDaysAgo = new Date();
  ninetyDaysAgo.setDate(ninetyDaysAgo.getDate() - 90);
  const { data: requests, error } = await supabase
    .from("requests")
    .select("created_at")
    .gte("created_at", ninetyDaysAgo.toISOString())
    .order("created_at", { ascending: true });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Group by date
  const requestsByDate: Record<string, number> = {};
  requests?.forEach((req) => {
    const date = new Date(req.created_at).toISOString().split("T")[0];
    requestsByDate[date] = (requestsByDate[date] || 0) + 1;
  });

  // Fill in missing dates
  const dateArray: { date: string; count: number }[] = [];
  const currentDate = new Date(ninetyDaysAgo);
  const today = new Date();
  while (currentDate <= today) {
    const dateStr = currentDate.toISOString().split("T")[0];
    dateArray.push({
      date: dateStr,
      count: requestsByDate[dateStr] || 0,
    });
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return NextResponse.json({
    totals: {
      demos: demosCount ?? 0,
      requests: requestsCount ?? 0,
      subscribers: subscribersCount ?? 0,
    },
    requestsByDate: dateArray,
  });
}
