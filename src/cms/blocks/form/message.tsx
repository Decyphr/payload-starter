import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

import React from "react";

import { Width } from "~/cms/blocks/form/width";
import RichText from "~/components/rich-text";

export const Message: React.FC<{ message: SerializedEditorState }> = ({
  message,
}) => {
  return (
    <Width className="my-12" width="100">
      {message && <RichText data={message} />}
    </Width>
  );
};
