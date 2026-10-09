import { render, screen } from "@testing-library/react";

import NotFoundPage from "@/app/not-found";

describe("NotFoundPage", () => {
  it("renders a heading", () => {
    render(<NotFoundPage />);

    const heading = screen.getByRole("heading", { name: /not found/i });

    expect(heading).toBeInTheDocument();
  });
});
