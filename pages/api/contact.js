import sgMail from "@sendgrid/mail";

export default async (req, res) => {
  const { name, email, message } = JSON.parse(req.body);

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: process.env.SENDGRID_TO,
    from: process.env.SENDGRID_FROM,
    subject: "Contact form submission",
    html: `<p>You Have a new contact form submission</p><br>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>`,
  };

  (async () => {
    try {
      await sgMail.send(msg);
      res.status(200).json(req.body);
    } catch (error) {
      res.status(error.code).json(req.body);
    }
  })();
};
