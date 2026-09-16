import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";
describe("Home", () => {
  it("explica o serviço e oferece caminhos para projetos e contato", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { level: 1, name: /crio sites e sistemas web/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /o que posso fazer/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /você fala direto/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /ver projetos/i })).toHaveAttribute("href", "/projetos");
    expect(screen.getByRole("link", { name: /falar pelo whatsapp/i })).toHaveAttribute("href", expect.stringContaining("https://wa.me/"));
    expect(screen.getByRole("link", { name: /prefiro enviar/i })).toHaveAttribute("href", "mailto:descomplicadevdan@gmail.com");
  });
});
