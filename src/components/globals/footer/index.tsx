import React from "react";

import type { Footer as FooterType } from "~/cms/payload-types";

import { getCachedGlobal } from "~/utilities/get-globals";

import { FooterClient } from "./component.client";

export async function Footer() {
  const footerData: FooterType = await getCachedGlobal("footer", 1)();

  return <FooterClient data={footerData} />;
}
