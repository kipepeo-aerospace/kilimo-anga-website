const sgMail = require('@sendgrid/mail');

module.exports = async function (context, req) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const { name, organization, email, type, message } = req.body;

    const msg = {
        to: 'info@kipepeo.space',
        from: 'info@kipepeo.space',
        subject: `New Contact from ${name} - ${organization}`,
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
            body: { success: true },
        };
    } catch (error) {
        context.res = {
            status: 500,
            body: { error: error.message },
        };
    }
};
