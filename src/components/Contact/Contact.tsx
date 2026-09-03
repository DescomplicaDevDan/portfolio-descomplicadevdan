"use client";

import type { FormEvent } from "react";
import { CopyButton } from "@/components/CopyButton/CopyButton";
import { contact } from "@/config/contact";
import styles from "./Contact.module.css";

export function buildWhatsappHref(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const senderEmail = String(formData.get("email") ?? "").trim();
  const senderWhatsapp = String(formData.get("whatsapp") ?? "").trim();
  const subject = String(formData.get("subject") ?? "Contato pelo portfólio").trim();
  const message = String(formData.get("message") ?? "").trim();
  const body = [
    "Olá, Danilo! Encontrei seu portfólio e gostaria de conversar.",
    "",
    `*Assunto:* ${subject}`,
    `*Mensagem:* ${message}`,
    "",
    `*Nome:* ${name}`,
    `*E-mail:* ${senderEmail}`,
    `*WhatsApp:* ${senderWhatsapp}`,
  ].join("\n");

  return `${contact.phone.whatsappBaseUrl}?text=${encodeURIComponent(body)}`;
}

function ContactIcon({ type }: { type: "email" | "whatsapp" | "github" | "linkedin" }) {
  const paths = {
    email: "M2.5 4.5h19v15h-19z M3.5 6l8.5 6 8.5-6",
    whatsapp: "M12 2.5a9.25 9.25 0 0 0-7.94 14l-1.31 4.75 4.87-1.28A9.25 9.25 0 1 0 12 2.5Zm4.13 13.05c-.17.48-.98.92-1.35.98-.36.07-.82.1-1.33-.06-.31-.1-.71-.23-1.22-.45-2.15-.93-3.55-3.1-3.66-3.24-.1-.14-.87-1.16-.87-2.22 0-1.06.56-1.58.75-1.8.2-.2.43-.25.57-.25h.4c.13 0 .3-.05.47.36.17.42.59 1.45.64 1.56.05.1.09.23.02.37-.07.14-.1.26-.21.38-.1.13-.22.28-.32.37-.1.1-.2.21-.09.42.12.21.5.83 1.08 1.35.74.66 1.37.87 1.58.97.21.1.34.09.46-.05.13-.14.54-.63.68-.84.14-.21.28-.17.47-.1.2.07 1.25.59 1.46.7.21.1.35.15.4.24.06.09.06.5-.1.98Z",
    github: "M12 2a10 10 0 0 0-3.16 19.49c.5.09.69-.22.69-.48v-1.87c-2.8.61-3.39-1.19-3.39-1.19-.46-1.16-1.12-1.47-1.12-1.47-.91-.63.07-.62.07-.62 1.01.07 1.54 1.04 1.54 1.04.9 1.53 2.35 1.09 2.93.83.09-.65.35-1.09.64-1.34-2.24-.25-4.59-1.12-4.59-4.99 0-1.1.4-2 1.04-2.7-.1-.25-.45-1.28.1-2.66 0 0 .84-.27 2.75 1.03A9.57 9.57 0 0 1 12 6.73a9.6 9.6 0 0 1 2.5.34c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.41.1 2.66.65.7 1.04 1.6 1.04 2.7 0 3.88-2.36 4.73-4.6 4.98.36.31.68.92.68 1.86v2.77c0 .27.18.58.69.48A10 10 0 0 0 12 2Z",
    linkedin: "M5.1 3.5A1.6 1.6 0 1 1 1.9 3.5a1.6 1.6 0 0 1 3.2 0ZM2.2 7h2.65v14H2.2V7Zm5 0h2.54v1.91h.04c.35-.67 1.22-1.38 2.5-1.38 2.68 0 4.52 1.76 4.52 5.46V21h-2.64v-6.96c0-1.65-.59-2.78-2.07-2.78-1.13 0-1.8.76-2.1 1.5-.1.27-.14.63-.14 1V21H7.2V7Z",
  };

  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d={paths[type]} /></svg>;
}

export function Contact() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.href = buildWhatsappHref(new FormData(event.currentTarget));
  }

  return (
    <section className={styles.contact} id="contato" aria-labelledby="contact-title">
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.container}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>developer@portfolio:~$ contact <i /></p>
          <h2 id="contact-title">Vamos transformar sua ideia em <span>uma solução real?</span></h2>
          <p className={styles.description}>
            Conte um pouco sobre seu projeto, desafio ou oportunidade. Responderei assim que possível para alinharmos os próximos passos.
          </p>

          <div className={styles.channels} aria-label="Canais de contato">
            <CopyButton
              value={contact.email}
              label={`Copiar e-mail ${contact.email}`}
              successLabel="E-mail copiado"
              className={`${styles.channel} ${styles.copyChannel}`}
            >
              {(copied) => <>
                <span className={styles.channelIcon}><ContactIcon type="email" /></span>
                <span><small>E-mail</small><strong>{contact.email}</strong></span>
                <span className={styles.copyHint} aria-hidden="true">
                  {copied ? "✓ Copiado" : "Copiar"}
                </span>
              </>}
            </CopyButton>
            <div className={styles.channel}>
              <a href={contact.phone.whatsappUrl} className={styles.channelMain} target="_blank" rel="noreferrer">
                <span className={styles.channelIcon}><ContactIcon type="whatsapp" /></span>
                <span><small>WhatsApp</small><strong>{contact.phone.display}</strong></span>
              </a>
              <CopyButton
                value={contact.phone.copyValue}
                label={`Copiar WhatsApp ${contact.phone.display}`}
                successLabel="WhatsApp copiado"
                className={styles.copyAction}
              >
                {(copied) => <span aria-hidden="true">{copied ? "✓ Copiado" : "Copiar"}</span>}
              </CopyButton>
            </div>
            <a href={contact.githubUrl} className={styles.channel} target="_blank" rel="noreferrer">
              <span className={styles.channelIcon}><ContactIcon type="github" /></span>
              <span><small>GitHub</small><strong>@DescomplicaDevDan</strong></span>
            </a>
            <a href={contact.linkedinUrl} className={styles.channel} target="_blank" rel="noreferrer">
              <span className={styles.channelIcon}><ContactIcon type="linkedin" /></span>
              <span><small>LinkedIn</small><strong>danilo-texeira-dev</strong></span>
            </a>
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit} aria-describedby="contact-form-help">
          <div className={styles.formHeader}>
            <span aria-hidden="true">● ● ●</span>
            <p>nova_mensagem.ts</p>
          </div>
          <div className={styles.formBody}>
            <div className={styles.fieldRow}>
              <label className={styles.field}>
                <span>Seu nome</span>
                <input name="name" type="text" autoComplete="name" placeholder="Como posso te chamar?" required />
              </label>
              <label className={styles.field}>
                <span>Seu e-mail</span>
                <input name="email" type="email" autoComplete="email" placeholder="voce@empresa.com" required />
              </label>
            </div>
            <div className={styles.fieldRow}>
              <label className={styles.field}>
                <span>Seu WhatsApp</span>
                <input name="whatsapp" type="tel" autoComplete="tel" inputMode="tel" placeholder="(00) 00000-0000" required />
              </label>
              <label className={styles.field}>
                <span>Assunto</span>
                <input name="subject" type="text" placeholder="Sobre o que vamos conversar?" required />
              </label>
            </div>
            <label className={styles.field}>
              <span>Mensagem</span>
              <textarea name="message" rows={6} placeholder="Descreva brevemente sua ideia ou necessidade..." required />
            </label>
            <p className={styles.formHelp} id="contact-form-help">
              O envio abrirá uma conversa no WhatsApp com a mensagem preenchida.
            </p>
            <button className={styles.submit} type="submit">
              Enviar mensagem <span aria-hidden="true">→</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
