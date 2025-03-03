import React from "react";

import type { Header as HeaderType } from "~/cms/payload-types";

import { getCachedGlobal } from "~/utilities/get-globals";

import { HeaderClient } from "./component.client";

export async function Header() {
  const headerData: HeaderType = await getCachedGlobal("header", 1)();

  return <HeaderClient data={headerData} />;
}
