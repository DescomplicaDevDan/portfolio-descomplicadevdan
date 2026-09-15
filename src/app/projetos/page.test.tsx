import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ProjectsPage from "./page";

describe("ProjectsPage", () => {
  it("lista os três projetos reais e suas tecnologias", () => {
    render(<ProjectsPage />);

    expect(screen.getByRole("heading", { level: 1, name: /ideias que viram soluções/i })).toBeInTheDocument();
    const projectHeadings = screen.getAllByRole("heading", { level: 2 });
    expect(projectHeadings).toHaveLength(3);

    expect(screen.getByRole("link", { name: /ver código de Self em Ação/i })).toHaveAttribute("href", "https://github.com/DescomplicaDevDan/self-em-acao");
    expect(screen.getByRole("link", { name: /ver código de Nutricomp/i })).toHaveAttribute("href", "https://github.com/DescomplicaDevDan/marmitas-app");
    expect(screen.getByRole("link", { name: /ver código de Motor de Busca/i })).toHaveAttribute("href", "https://github.com/DescomplicaDevDan/Motor_busca");
    expect(screen.getByRole("link", { name: /visitar site de Nutricomp/i })).toHaveAttribute("href", "https://www.nutricomp.com.br");
    expect(screen.getByRole("link", { name: /visitar site de Motor de Busca/i })).toHaveAttribute("href", "https://motor-busca.vercel.app/");
    expect(screen.getByText("Em desenvolvimento")).toBeInTheDocument();

    const firstProject = screen.getByRole("heading", { level: 2, name: "Self em Ação" }).closest("article");
    expect(firstProject).not.toBeNull();
    expect(within(firstProject!).getByText("Next.js")).toBeInTheDocument();
    expect(within(firstProject!).getByText("Tailwind CSS")).toBeInTheDocument();
  });
});
