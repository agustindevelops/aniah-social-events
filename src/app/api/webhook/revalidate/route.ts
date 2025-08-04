import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const token = request.headers.get("ASE_WEBHOOK_TOKEN");
  if (!token || token !== process.env.CONTENTFUL_WEBHOOK_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  try {
    revalidatePath("/");
    revalidatePath("/blog");
    revalidatePath("/about");

    return NextResponse.json(
      { revalidated: true, now: Date.now(), paths: ["/", "/blog", "/about"] },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Revalidation failed", details: (error as Error).message },
      { status: 500 }
    );
  }
}
