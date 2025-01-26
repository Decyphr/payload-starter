import { render } from "#tests/utils";
import { toHaveNoViolations } from "jest-axe";

import { Button } from "~/components/ui/button";

expect.extend(toHaveNoViolations);

it("button renders", () => {
  render(<Button>Default Button</Button>);
});
