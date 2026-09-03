import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("Home", () => {
  it("compõe as seções principais da página", () => {
    render(<Home />);

    expect(screen.getByRole("heading", { level: 1, name: /descomplica dev dan/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: /tecnologia com propósito/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: /tecnologias que uso/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: /vamos transformar sua ideia/i })).toBeInTheDocument();
  });
});
