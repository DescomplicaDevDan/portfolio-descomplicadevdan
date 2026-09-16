import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, it } from "vitest";
import { BinaryBackground } from "./BinaryBackground";
it("permite pausar e retomar o fundo decorativo", async () => {
  const user = userEvent.setup();
  const { container } = render(<BinaryBackground />);
  await user.click(screen.getByRole("button", { name: "Pausar animação" }));
  expect(container.querySelector('[aria-hidden="true"]')).toHaveAttribute("data-paused", "true");
  await user.click(screen.getByRole("button", { name: "Retomar animação" }));
  expect(container.querySelector('[aria-hidden="true"]')).toHaveAttribute("data-paused", "false");
});
