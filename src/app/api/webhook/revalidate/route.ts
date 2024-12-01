import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  console.log("Webhook payload:", request.body);

  const path = request.nextUrl.searchParams.get("path");
  const secretHeader = request.headers.get("secret");

  return NextResponse.json({ body: request.body, path, secretHeader });
  //
  // if (!secretHeader || secretHeader !== process.env.WEBHOOK_SECRET) {
  //   return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
  // }
  //
  // if (path) {
  //   try {
  //     await revalidatePath(path);
  //     return NextResponse.json(
  //       { revalidated: true, now: Date.now() },
  //       { status: 200 }
  //     );
  //   } catch (error) {
  //     return NextResponse.json(
  //       { error: 'Revalidation failed' },
  //       { status: 500 }
  //     );
  //   }
  // }
  //
  // return NextResponse.json(
  //   { error: 'Missing path to revalidate' },
  //   { status: 422 }
  // );
}
