import { render } from "@react-email/render";

import WelcomeTemplate from "../../../emails";

// import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";
import { sendEmailWithMailgun } from "@/lib/mailgun";
import { sendAlertEmail } from "@/lib/freeEmailService";
import { supabase } from "@/lib/supabase";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

const ratelimit = new Ratelimit({
  redis,
  // 2 requests per minute from the same IP address in a sliding window of 1 minute duration which means that the window slides forward every second and the rate limit is reset every minute for each IP address.
  limiter: Ratelimit.slidingWindow(2, "1 m"),
});

export async function POST(request: NextRequest, response: NextResponse) {
  const ip = request.ip ?? "127.0.0.1";

  const result = await ratelimit.limit(ip);

  if (!result.success) {
    return Response.json(
      {
        error: "Too many requests!!",
      },
      {
        status: 429,
      },
    );
  }

  const { email, firstname } = await request.json();

  const html = await render(WelcomeTemplate({ userFirstname: firstname }));

  try {
    // 1. Check if the email already exists in the Supabase database
    const { data, error: selectError } = await supabase
      .from("waitlist") // Replace 'waitlist_subscribers' with your actual table name
      .select("email")
      .eq("email", email)
      .single();

    if (selectError && selectError.code !== "PGRST116") {
      // PGRST116 means "No rows found", which is expected for a new email
      console.error("Supabase select error:", selectError);
      return NextResponse.json(
        { message: "Database query error." },
        { status: 500 },
      );
    }

    if (data) {
      // Email already exists in the database
      console.log(`Email ${email} already exists in the waitlist.`);
      return NextResponse.json(
        { message: "This email is already on the waitlist." },
        { status: 409 }, // 409 Conflict status code is appropriate for duplicate resource
      );
    }

    const sendResult = await sendEmailWithMailgun({
      to: email,
      subject: "Thank you for joining Newcondo waitlist!",
      html,
    });

    if (!sendResult.success) {
      console.error(
        "Mailgun email failed to send to subscriber:",
        sendResult.error,
      );
      return NextResponse.json(
        { message: "Failed to send email" },
        { status: 500 },
      );
    }

    // 2. Send an internal alert email to info@newcondo.homes using a "free email sender"
    const alertSubject = `New Waitlist Subscriber: ${firstname}`;
    const alertText = `A new subscriber has joined the waitlist!\n\nName: ${firstname}\nEmail: ${email}`;

    const alertResult = await sendAlertEmail({
      to: "info@newcondo.homes", // The specific email address for alerts
      subject: alertSubject,
      text: alertText,
    });

    if (!alertResult.success) {
      // Log a warning if the alert email fails, but don't prevent the primary success response
      // unless sending this alert is considered critical to your business logic.
      console.warn(
        "Failed to send internal alert email (mocked service):",
        alertResult.message,
      );
    } else {
      console.log("Internal alert email sent successfully (mocked service).");
    }
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    console.log("error overall");

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
