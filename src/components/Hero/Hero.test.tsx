import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Hero } from "./Hero";

describe("Hero", () => {
  it("apresenta a proposta profissional e as ações principais", () => {
    render(<Hero />);

    expect(screen.getByRole("heading", { level: 1, name: /descomplica dev dan/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /conheça meus projetos/i })).toHaveAttribute("href", "/projetos");
    expect(screen.getByRole("link", { name: /sobre mim/i })).toHaveAttribute("href", "#sobre");
  });

  it("oferece links funcionais para os canais configurados", () => {
    render(<Hero />);

    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute("href", "https://github.com/DescomplicaDevDan");
    expect(screen.getByRole("link", { name: "WhatsApp" })).toHaveAttribute("href", expect.stringContaining("wa.me/5522992090717"));
    expect(screen.getByRole("button", { name: "Copiar e-mail" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/danilo-texeira-dev/",
    );
  });
});
