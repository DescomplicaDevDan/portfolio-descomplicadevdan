import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { About } from "./About";

describe("About", () => {
  it("apresenta a trajetória, especialidades e contato", () => {
    render(<About />);

    expect(screen.getByRole("heading", { level: 2, name: /tecnologia com propósito/i })).toBeInTheDocument();
    expect(screen.getByText("Descomplica Dev Dan")).toBeInTheDocument();
    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(3);
    expect(screen.getByRole("link", { name: /vamos conversar/i })).toHaveAttribute("href", "#contato");
    expect(screen.getByLabelText(/resumo em formato de código/i)).toBeInTheDocument();
  });
});
