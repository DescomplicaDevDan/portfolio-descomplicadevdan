import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { CopyButton } from "./CopyButton";

describe("CopyButton", () => {
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
});

