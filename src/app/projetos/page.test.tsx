import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ProjectsPage from "./page";

describe("ProjectsPage", () => {
  it("lista os três projetos demonstrativos e suas tecnologias", () => {
    render(<ProjectsPage />);

    expect(screen.getByRole("heading", { level: 1, name: /ideias que viram soluções/i })).toBeInTheDocument();
    const projectHeadings = screen.getAllByRole("heading", { level: 2 });
    expect(projectHeadings).toHaveLength(3);

    const firstProject = projectHeadings[0].closest("article");
    expect(firstProject).not.toBeNull();
    expect(within(firstProject!).getByText("Next.js")).toBeInTheDocument();
    expect(within(firstProject!).getByText("PostgreSQL")).toBeInTheDocument();
  });
});
