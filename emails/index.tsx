import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailProps {
  userFirstname: string;
}

export const NewCondoWaitlistEmail = ({ userFirstname }: EmailProps) => (
  <Html>
    <Head />
    <Preview>You're on the waitlist, {userFirstname} — stay tuned!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={greeting}>Hi {userFirstname},</Text>
        <Text style={paragraph}>
          Thanks for signing up for the <strong>Newcondo</strong> waitlist — where renting and managing properties is about to get smarter.
        </Text>
        <Text style={paragraph}>
          We’re building a platform to simplify rentals, eliminate double bookings, and help agents work better as a team — with verified listings and no extra fees for renters.
        </Text>
        <Text style={paragraph}>
          You’ll be the first to know when we launch. In the meantime, feel free to reply to{" "}
          <a href="mailto:info@c.homes" style={link}>
            info@newcondo.homes
          </a>{" "}
          if you have any questions.
        </Text>
        <Text style={signOff}>
          – The Newcondo Team
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          You received this email because you joined the Newcondo waitlist.
        </Text>
      </Container>
    </Body>
  </Html>
);

NewCondoWaitlistEmail.PreviewProps = {
  userFirstname: "Ada",
} as EmailProps;

export default NewCondoWaitlistEmail;

// --- Styles ---

const main = {
  backgroundColor: "#ffffff",
  fontFamily: 'Figtree, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  padding: "40px 0",
  color: "#111111",
};

const container = {
  margin: "0 auto",
  padding: "32px 24px",
  maxWidth: "600px",
  backgroundColor: "#f9f9f9",
  borderRadius: "8px",
  border: "1px solid #e5e5e5",
};

const greeting = {
  fontSize: "18px",
  fontWeight: "600",
  marginBottom: "16px",
};

const paragraph = {
  fontSize: "15px",
  lineHeight: "24px",
  marginBottom: "20px",
};

const link = {
  color: "#000000",
  textDecoration: "underline",
};

const signOff = {
  fontSize: "15px",
  marginTop: "16px",
};

const hr = {
  borderColor: "#dddddd",
  margin: "24px 0",
};

const footer = {
  fontSize: "12px",
  color: "#555555",
};
