import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const contentType = request.headers.get("content-type") || "";
    let form: URLSearchParams | null = null;

    if (contentType.includes("application/x-www-form-urlencoded")) {
      const text = await request.text();
      form = new URLSearchParams(text);
    } else if (contentType.includes("multipart/form-data")) {
      const data = await request.formData();
      form = new URLSearchParams();
      for (const [key, value] of data.entries()) {
        form.append(key, String(value));
      }
    } else if (contentType.includes("application/json")) {
      const json = await request.json();
      form = new URLSearchParams();
      Object.entries(json).forEach(([k, v]) => form!.append(k, String(v)));
    } else {
      return new Response(
        JSON.stringify({ error: "Unsupported content type" }),
        {
          status: 400,
          headers: { "content-type": "application/json" },
        }
      );
    }

    const name = form.get("name")?.trim() || "";
    const email = form.get("email")?.trim() || "";
    const phone = form.get("phone")?.trim() || "";
    const message = form.get("message")?.trim() || "";

    if (!name || !email || !phone || !message) {
      const acceptsHtml = (request.headers.get("accept") || "").includes(
        "text/html"
      );
      if (acceptsHtml) {
        return new Response(null, {
          status: 303,
          headers: { Location: "/clases?error=1" },
        });
      }
      return new Response(
        JSON.stringify({ error: "Faltan campos obligatorios" }),
        {
          status: 400,
          headers: { "content-type": "application/json" },
        }
      );
    }

    const to = import.meta.env.CLASSES_EMAIL_TO;
    if (!to) {
      const acceptsHtml = (request.headers.get("accept") || "").includes(
        "text/html"
      );
      if (acceptsHtml) {
        return new Response(null, {
          status: 303,
          headers: { Location: "/clases?error=1" },
        });
      }
      return new Response(
        JSON.stringify({ error: "CLASSES_EMAIL_TO no configurado" }),
        {
          status: 500,
          headers: { "content-type": "application/json" },
        }
      );
    }

    const subject = `Nueva solicitud de clases: ${name}`;
    const body = `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}\n\nMensaje:\n${message}`;

    // Basic mailto fallback if no SMTP configured
    const smtpHost = import.meta.env.SMTP_HOST;
    const smtpUser = import.meta.env.SMTP_USER;
    const smtpPass = import.meta.env.SMTP_PASS;
    const smtpPort = Number(import.meta.env.SMTP_PORT || 587);

    if (smtpHost && smtpUser && smtpPass) {
      const nodemailer = await import("nodemailer");
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: { user: smtpUser, pass: smtpPass },
      });

      await transporter.sendMail({
        from: `Web Clases <${smtpUser}>`,
        to,
        replyTo: email,
        subject,
        text: body,
      });
    } else {
      console.warn("SMTP no configurado, no se envió email");
    }

    const acceptsHtml = (request.headers.get("accept") || "").includes(
      "text/html"
    );
    if (acceptsHtml) {
      return new Response(null, {
        status: 303,
        headers: { Location: "/clases?enviado=1" },
      });
    }
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    const acceptsHtml = (request.headers.get("accept") || "").includes(
      "text/html"
    );
    if (acceptsHtml) {
      return new Response(null, {
        status: 303,
        headers: { Location: "/clases?error=1" },
      });
    }
    return new Response(JSON.stringify({ error: "Error interno" }), {
      status: 500,
      headers: { "content-type": "application/json" },
    });
  }
};
