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

  it("oferece nomes acessíveis para todos os canais sociais", () => {
    render(<Hero />);

    for (const name of ["GitHub", "LinkedIn", "WhatsApp", "E-mail"]) {
      expect(screen.getByRole("link", { name })).toBeInTheDocument();
    }
  });
});
