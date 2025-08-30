import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, email, phone, message } = data;

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          message: 'Faltan campos requeridos.',
        }),
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: 'onboarding@resend.dev', // Replace with your verified sending email
      to: 'henrri.us@gmail.com', // Replace with your destination email
      subject: `Nuevo mensaje de contacto de ${name}`,
      html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone || 'No proporcionado'}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });

    return new Response(
      JSON.stringify({
        message: 'Mensaje enviado exitosamente.',
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({
        message: 'Ocurrió un error al enviar el mensaje.',
      }),
      { status: 500 }
    );
  }
};
