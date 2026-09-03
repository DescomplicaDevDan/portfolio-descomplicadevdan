import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Skills } from "./Skills";

describe("Skills", () => {
  it("renderiza a lista de tecnologias com semântica acessível", () => {
    render(<Skills />);

    expect(screen.getByRole("heading", { level: 2, name: /tecnologias que uso/i })).toBeInTheDocument();
    const list = screen.getByRole("list", { name: /tecnologias e ferramentas/i });
    expect(list).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(10);
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
  });

  it("atualiza e restaura a posição do efeito de ponteiro", () => {
    const { container } = render(<Skills />);
    const section = container.querySelector("section");
    expect(section).not.toBeNull();

    vi.spyOn(section!, "getBoundingClientRect").mockReturnValue({
      x: 10,
      y: 20,
      left: 10,
      top: 20,
      right: 1010,
      bottom: 620,
      width: 1000,
      height: 600,
      toJSON: () => ({}),
    });

    fireEvent.pointerMove(section!, { clientX: 210, clientY: 120 });
    expect(section).toHaveStyle({ "--pointer-x": "200px", "--pointer-y": "100px" });

    fireEvent.pointerLeave(section!);
    expect(section).toHaveStyle({ "--pointer-x": "50%", "--pointer-y": "52%" });
  });
});
