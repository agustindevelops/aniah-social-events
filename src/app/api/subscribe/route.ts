import mailchimp from "@mailchimp/mailchimp_marketing";
import { ErrorResponse } from "@/utils/server/types";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email || !email.includes("@")) {
    return new Response("Please provide a valid email address.", {
      status: 400,
    });
  }

  try {
    const listId = process.env.MAILCHIMP_LIST_ID || "";
    await mailchimp.lists.addListMember(listId, {
      email_address: email,
      status: "subscribed",
    });

    return new Response("Success! You are now subscribed.", {
      status: 200,
    });
  } catch (error) {
    const typedError = error as ErrorResponse;
    const errorMessage =
      typedError.response?.body?.detail ||
      "An error occurred during the subscription process.";

    return new Response(errorMessage, { status: 500 });
  }
}
