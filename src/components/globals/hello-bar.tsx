import type { Setting } from "~/cms/payload-types";

import RichText from "../rich-text";

interface Props {
  data: Setting["helloBar"];
}

export function HelloBar({ data }: Props) {
  const show = data?.enabled ?? false;

  if (!show)
    return null;

  return (
    <div className="bg-foreground text-background py-2">
      <div className="container text-center">
        {data?.content ? <RichText data={data.content} /> : null}
      </div>
    </div>
  );
}
