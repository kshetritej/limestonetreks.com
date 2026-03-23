type InquiryEmailData = {
  fullName: string;
  email: string;
  phone?: string;
  destination: string;
  groupSize: string;
  startDate: string;
  experienceLevel?: string;
  message: string;
};

const LABEL: Record<string, string> = {
  // group size
  "1": "Solo (1 person)",
  "2": "Couple (2 people)",
  "3-5": "Small group (3–5 people)",
  "6-10": "Medium group (6–10 people)",
  "10+": "Large group (10+ people)",
  // experience
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
  expert: "Expert",
};

function row(icon: string, label: string, value: string) {
  return `
    <tr>
      <td style="padding:12px 0;border-bottom:1px solid #f0ede8;vertical-align:top;width:28px;font-size:16px;">${icon}</td>
      <td style="padding:12px 14px;border-bottom:1px solid #f0ede8;vertical-align:top;">
        <span style="display:block;font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#a8a099;margin-bottom:3px;">${label}</span>
        <span style="font-size:14px;color:#1c1917;font-weight:500;font-family:Georgia,'Times New Roman',serif;">${value}</span>
      </td>
    </tr>`;
}

export function buildInquiryEmail(data: InquiryEmailData): string {
  const groupLabel = LABEL[data.groupSize] ?? data.groupSize;
  const expLabel = data.experienceLevel
    ? (LABEL[data.experienceLevel] ?? data.experienceLevel)
    : "Not specified";

  const formattedDate = data.startDate
    ? new Date(data.startDate).toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Not specified";

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Booking Inquiry — Limestone Treks</title>
</head>
<body style="margin:0;padding:0;background-color:#f5f3ef;font-family:Georgia,'Times New Roman',serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f3ef;padding:40px 16px;">
    <tr>
      <td align="center">

        <!-- Card -->
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:4px;overflow:hidden;box-shadow:0 2px 16px rgba(0,0,0,0.07);">

          <!-- ── Header ── -->
          <tr>
            <td style="background:#1c1917;padding:36px 40px 28px;text-align:center;">
              <!-- Brand pill -->
              <div style="display:inline-block;border:1px solid rgba(251,191,36,0.4);border-radius:2px;padding:5px 16px;margin-bottom:22px;">
                <span style="color:#fbbf24;font-size:10px;letter-spacing:0.18em;text-transform:uppercase;font-family:Georgia,serif;">Limestone Treks</span>
              </div>
              <h1 style="margin:0 0 6px;color:#ffffff;font-size:24px;font-weight:700;letter-spacing:-0.3px;font-family:Georgia,serif;">
                New Booking Inquiry
              </h1>
              <p style="margin:0;color:rgba(255,255,255,0.5);font-size:13px;font-family:Georgia,serif;">
                A trekker is ready to hit the trail — details below.
              </p>
              <!-- Amber accent line -->
              <div style="width:40px;height:2px;background:#fbbf24;margin:20px auto 0;border-radius:1px;"></div>
            </td>
          </tr>

          <!-- ── Name highlight ── -->
          <tr>
            <td style="background:#fefce8;border-top:3px solid #fbbf24;border-bottom:1px solid #fef08a;padding:18px 40px;text-align:center;">
              <p style="margin:0;font-size:10px;letter-spacing:0.12em;text-transform:uppercase;color:#a8a099;font-family:Georgia,serif;">Inquiry from</p>
              <p style="margin:5px 0 0;font-size:22px;font-weight:700;color:#1c1917;font-family:Georgia,serif;">${data.fullName}</p>
            </td>
          </tr>

          <!-- ── Body ── -->
          <tr>
            <td style="padding:32px 40px;">

              <!-- Trek details -->
              <p style="margin:0 0 14px;font-size:10px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#78716c;font-family:Georgia,serif;">
                Trek Details
              </p>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:30px;">
                ${row("📍", "Destination", data.destination)}
                ${row("📅", "Start Date", formattedDate)}
                ${row("👥", "Group Size", groupLabel)}
                ${row("🧗", "Experience Level", expLabel)}
              </table>

              <!-- Contact -->
              <p style="margin:0 0 14px;font-size:10px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#78716c;font-family:Georgia,serif;">
                Contact Details
              </p>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:30px;">
                ${row("✉️", "Email", `<a href="mailto:${data.email}" style="color:#1c1917;text-decoration:underline;">${data.email}</a>`)}
                ${row("📞", "Phone", data.phone || "Not provided")}
              </table>

              <!-- Message -->
              <p style="margin:0 0 12px;font-size:10px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#78716c;font-family:Georgia,serif;">
                Message
              </p>
              <div style="background:#fafaf9;border:1px solid #e7e3dc;border-left:3px solid #fbbf24;border-radius:0 4px 4px 0;padding:16px 20px;margin-bottom:32px;">
                <p style="margin:0;font-size:14px;color:#44403c;line-height:1.75;font-family:Georgia,serif;">${data.message.replace(/\n/g, "<br/>")}</p>
              </div>

              <!-- CTA -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a
                      href="mailto:${data.email}?subject=Re: Your Trek Inquiry — ${data.destination}"
                      style="display:inline-block;background:#1c1917;color:#ffffff;font-size:13px;font-weight:600;text-decoration:none;padding:13px 32px;border-radius:2px;font-family:Georgia,serif;letter-spacing:0.05em;"
                    >
                      Reply to ${data.fullName.split(" ")[0]} →
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- ── Footer ── -->
          <tr>
            <td style="background:#1c1917;padding:22px 40px;text-align:center;">
              <p style="margin:0 0 4px;font-size:12px;font-weight:600;color:#d6d3d1;font-family:Georgia,serif;letter-spacing:0.06em;">LIMESTONE TREKS</p>
              <p style="margin:0;font-size:11px;color:#78716c;font-family:Georgia,serif;">
                Pokhara, Lakeside Rd, Kaski, Nepal
              </p>
              <p style="margin:14px 0 0;font-size:10px;color:#44403c;font-family:Georgia,serif;">
                Auto-generated from the booking inquiry form.
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
  `.trim();
}
