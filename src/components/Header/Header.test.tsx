import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";
import { Header } from "./Header";

describe("Header", () => {
  beforeEach(() => {
    window.localStorage.clear();
    delete document.documentElement.dataset.theme;
  });

  it("expõe a navegação principal com nomes acessíveis", () => {
    render(<Header />);

    expect(screen.getByRole("navigation", { name: /navegação principal/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Início" })).toHaveAttribute("href", "/#inicio");
    expect(screen.getByRole("link", { name: "Projetos" })).toHaveAttribute("href", "/projetos");
  });

  it("abre e fecha o menu móvel pelo controle acessível", async () => {
    const user = userEvent.setup();
    render(<Header />);

    const button = screen.getByRole("button", { name: /abrir menu/i });
    expect(button).toHaveAttribute("aria-expanded", "false");

    await user.click(button);
    expect(screen.getByRole("button", { name: /fechar menu/i })).toHaveAttribute("aria-expanded", "true");
  });

  it("persiste a preferência de tema", async () => {
    const user = userEvent.setup();
    render(<Header />);

    await waitFor(() => expect(document.documentElement.dataset.theme).toBe("dark"));
    await user.click(screen.getByRole("button", { name: /ativar tema claro/i }));

    expect(document.documentElement.dataset.theme).toBe("light");
    expect(window.localStorage.getItem("portfolio-theme")).toBe("light");
  });
});
