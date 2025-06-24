const sgMail = require('@sendgrid/mail');

module.exports = async function (context, req) {
    // Log presence of the API key
    context.log("SENDGRID_API_KEY exists:", !!process.env.SENDGRID_API_KEY);

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const { name, organization, email, type, message } = req.body;

    if (!name || !email || !message) {
        context.res = {
            status: 400,
            body: { error: "Missing required fields." }
        };
        return;
    }

    const msg = {
        to: 'info@kipepeo.space',
        from: 'noreply@kipepeo.space', // Must be verified in SendGrid
        subject: `New Contact from ${name} - ${organization || 'No org provided'}`,
        html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Organization:</strong> ${organization}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Type:</strong> ${type}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `,
    };

    try {
        await sgMail.send(msg);
        context.res = {
            status: 200,
            body: { success: true, message: "Email sent successfully!" },
        };
    } catch (error) {
        context.log("SendGrid error:", error);
        context.res = {
            status: 500,
            body: {
                error: "Failed to send email.",
                message: error.message,
                details: error.response?.body || "No response body"
            }
        };
    }
};
