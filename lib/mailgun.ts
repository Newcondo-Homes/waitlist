import axios from 'axios';

export const sendEmailWithMailgun = async ({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) => {

  try {
    const mailgunDomain = process.env.MAILGUN_DOMAIN; // e.g., mg.newcondo.homes
    const apiKey = process.env.MAILGUN_API_KEY;

    const auth = Buffer.from(`api:${apiKey}`).toString('base64');

    const res = await axios.post(
      `https://api.mailgun.net/v3/${mailgunDomain}/messages`,
      new URLSearchParams({
        from: `Newcondo <noreply@${mailgunDomain}>`,
        to,
        subject,
        html,
      }),
      {
        headers: {
          Authorization: `Basic ${auth}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );

    return {
      success: true,
      data: res.data,
    };

  } catch (error: any) {
    return {
      success: false,
      error: error?.response?.data || error.message,
    };
  }
};
