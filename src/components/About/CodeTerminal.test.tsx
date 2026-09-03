import { act, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { CodeTerminal } from "./CodeTerminal";

afterEach(() => {
  vi.useRealTimers();
  vi.mocked(window.matchMedia).mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }));
});

describe("CodeTerminal", () => {
  it("mostra imediatamente o primeiro trecho quando movimento reduzido está ativo", () => {
    vi.useFakeTimers();
    vi.mocked(window.matchMedia).mockImplementation((query: string) => ({
      matches: query.includes("prefers-reduced-motion"),
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    render(<CodeTerminal />);
    act(() => vi.runOnlyPendingTimers());

    expect(screen.getByLabelText(/código sendo digitado/i)).toHaveTextContent("const developer");
    expect(screen.getByText('"Dev Dan"')).toBeInTheDocument();
  });

  it("inicia a digitação progressiva no modo animado", () => {
    vi.useFakeTimers();
    render(<CodeTerminal />);

    act(() => vi.advanceTimersByTime(400));

    expect(screen.getByLabelText(/código sendo digitado/i)).toHaveTextContent("co");
  });
});
