import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";
describe("Home", () => {
  it("explica o posicionamento e oferece caminhos para projetos e contato", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { level: 1, name: /desenvolvedor front-end júnior/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /stack e como desenvolvo/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /sobre mim/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /^ver projetos/i })).toHaveAttribute("href", "/projetos");
    expect(screen.getAllByRole("link", { name: /conversar com danilo/i })[0]).toHaveAttribute("href", expect.stringContaining("https://wa.me/"));
    expect(screen.getByRole("link", { name: /enviar e-mail/i })).toHaveAttribute("href", "mailto:descomplicadevdan@gmail.com");
  });
});
