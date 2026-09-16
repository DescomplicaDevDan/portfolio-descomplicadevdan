import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";
describe("Home", () => {
  it("explica o serviço e oferece caminhos para projetos e contato", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { level: 1, name: /sites e sistemas que ajudam/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /o que você precisa resolver/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /você fala direto/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /ver projetos reais/i })).toHaveAttribute("href", "/projetos");
    expect(screen.getAllByRole("link", { name: /conversar com danilo/i })[0]).toHaveAttribute("href", expect.stringContaining("https://wa.me/"));
    expect(screen.getByRole("link", { name: /enviar e-mail/i })).toHaveAttribute("href", "mailto:descomplicadevdan@gmail.com");
  });
});
