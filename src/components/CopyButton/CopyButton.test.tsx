import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { CopyButton } from "./CopyButton";

describe("CopyButton", () => {
  afterEach(() => vi.useRealTimers());

  it("copia o valor e confirma a ação de forma acessível", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    });

    render(
      <CopyButton value="contato@exemplo.com" label="Copiar e-mail" successLabel="E-mail copiado">
        Copiar
      </CopyButton>,
    );

    fireEvent.click(screen.getByRole("button", { name: "Copiar e-mail" }));

    await waitFor(() => expect(writeText).toHaveBeenCalledWith("contato@exemplo.com"));
    expect(screen.getByRole("button", { name: "E-mail copiado" })).toBeInTheDocument();
  });

  it("restaura o rótulo depois do período de confirmação", async () => {
    vi.useFakeTimers();
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText: vi.fn().mockResolvedValue(undefined) },
    });

    render(
      <CopyButton value="contato@exemplo.com" label="Copiar e-mail" successLabel="E-mail copiado">
        Copiar
      </CopyButton>,
    );

    fireEvent.click(screen.getByRole("button", { name: "Copiar e-mail" }));
    await act(async () => Promise.resolve());
    expect(screen.getByRole("button", { name: "E-mail copiado" })).toBeInTheDocument();

    act(() => vi.advanceTimersByTime(2_000));
    expect(screen.getByRole("button", { name: "Copiar e-mail" })).toBeInTheDocument();
  });
});
