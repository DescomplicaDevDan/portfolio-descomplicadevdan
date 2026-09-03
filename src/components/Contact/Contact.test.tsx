import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { buildWhatsappHref, Contact } from "./Contact";

describe("Contact", () => {
  it("apresenta os canais profissionais configurados", () => {
    render(<Contact />);

    expect(screen.getByRole("heading", { level: 2, name: /vamos transformar sua ideia/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /copiar e-mail/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /\+55 \(22\) 99209-0717/i })).toHaveAttribute(
      "href",
      expect.stringContaining("wa.me/5522992090717"),
    );
    expect(screen.getByRole("link", { name: /@descomplicadevdan/i })).toHaveAttribute(
      "href",
      "https://github.com/DescomplicaDevDan",
    );
    expect(screen.getByRole("link", { name: /danilo-texeira-dev/i })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/danilo-texeira-dev/",
    );
  });

  it("exige os dados necessários para iniciar uma conversa", () => {
    render(<Contact />);

    expect(screen.getByLabelText(/seu nome/i)).toBeRequired();
    expect(screen.getByLabelText(/seu e-mail/i)).toBeRequired();
    expect(screen.getByLabelText(/seu whatsapp/i)).toBeRequired();
    expect(screen.getByLabelText(/assunto/i)).toBeRequired();
    expect(screen.getByLabelText(/mensagem/i)).toBeRequired();
    expect(screen.getByRole("button", { name: /enviar mensagem/i })).toHaveAttribute("type", "submit");
  });

  it("gera uma conversa de WhatsApp com os dados do formulário", () => {
    const formData = new FormData();
    formData.set("name", "Ana");
    formData.set("email", "ana@empresa.com");
    formData.set("whatsapp", "(22) 99999-0000");
    formData.set("subject", "Novo projeto");
    formData.set("message", "Gostaria de solicitar um orçamento.");

    const href = buildWhatsappHref(formData);

    expect(href).toContain("https://wa.me/5522992090717?text=");
    expect(decodeURIComponent(href)).toContain("Novo projeto");
    expect(decodeURIComponent(href)).toContain("Ana");
    expect(decodeURIComponent(href)).toContain("ana@empresa.com");
    expect(decodeURIComponent(href)).toContain("(22) 99999-0000");
  });
});
