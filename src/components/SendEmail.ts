import { Resend } from "resend";
import { redirect } from  'next/navigation'


// EMAIL SENDING FUNCTIONALITY 
// ADD RESEND_API_KEY IN YOUR .ENV FILE 
export const SendEmail = async (formdata: FormData) => {
  const message = formdata.get("message");
  const name = formdata.get("name");
  const SenderEmail = formdata.get("SenderEmail");

  if (!message) {
    return { error: "Invalid message" };
  }

  const apiKey = process.env.RESEND_API_KEY;

  // Safe fallback: if no API key, skip sending but don't crash in dev
  if (!apiKey) {
    console.warn("RESEND_API_KEY missing. Skipping email send.");
    return redirect('/');
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: `mdtaqui.jhar@gmail.com`,
      subject: `${name} From Contact Form.`,
      reply_to: `${SenderEmail}`,
      text: `sender email: ${SenderEmail} \n ${message}`,
    });
  } catch (error) {
    console.error("Failed to send email via Resend:", error);
    // Do not crash the app; just continue
  }

  return redirect('/')
};
