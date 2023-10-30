/* import { Resend } from 'resend';
import Environment from '../../environments/index';

type FormDataType = {
  fullName: string;
  email: string;
  phone: string;
  message: string;
};

type emailType = {
  userEmail: string;
  subject: string;
  formData: FormDataType;
};

async function sendEmail({userEmail, subject, formData,}: emailType): Promise<any | Error> {
  const sendEmail = new Resend(Environment.EMAIL_API_TOKEN);

  const templateEmail = `
        <h2>Contacto desde Landing Page</h2>
        <p>Mi nombre es <strong>${formData.fullName}</strong>,
        y me pongo en contacto con ustedes desde su landing page. Aquí les dejo mis datos:</p>
        <ul>
            <li><strong>Nombre Completo:</strong> ${formData.fullName}</li>
            <li><strong>Correo Electrónico:</strong> ${formData.email}</li>
            <li><strong>Teléfono:</strong> ${formData.phone}</li>
            <li><strong>Mensaje:</strong> ${formData.message}</li>
        </ul>
        <p>Espero su pronta respuesta.</p>
        <p>¡Saludos!</p>
  `;

  try {
    const sendEmailOptions: any = {
      from: Environment.EMAIL_FROM,
      to: userEmail,
      subject,
      html: templateEmail,
    };

    const res = await sendEmail.emails.send(sendEmailOptions);
    return res;
  } catch (err: any) {
    throw new Error(err);
  }
}

export default sendEmail;
 */