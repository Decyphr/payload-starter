import { render } from "#tests/utils";
import { axe, toHaveNoViolations } from "jest-axe";

import { Button } from "~/components/ui/button";

expect.extend(toHaveNoViolations);

it("button renders", () => {
  render(<Button>Default Button</Button>);
});

it("button is accessible", async () => {
  const { container } = render(<Button>Default Button</Button>);
  const result = await axe(container);

  expect(result).toHaveNoViolations();
});
