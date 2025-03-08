import React from "react";

import type { Page } from "~/cms/payload-types";

import { HighImpactHero } from "./high-impact";
import { LowImpactHero } from "./low-impact";
import { MediumImpactHero } from "./medium-impact";

const heroes = {
  highImpact: HighImpactHero,
  lowImpact: LowImpactHero,
  mediumImpact: MediumImpactHero,
};

export const RenderHero: React.FC<Page["hero"]> = (props) => {
  const { type } = props || {};

  if (!type || type === "none")
    return null;

  const HeroToRender = heroes[type];

  if (!HeroToRender)
    return null;

  return <HeroToRender {...props} />;
};
