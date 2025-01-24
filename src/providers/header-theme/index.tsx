"use client";

import React, { createContext, useCallback, useContext, useState } from "react";

import type { Theme } from "~/providers/theme/types";

import canUseDOM from "~/utilities/can-use-dom";

export interface ContextType {
  headerTheme?: Theme | null;
  setHeaderTheme: (theme: Theme | null) => void;
}

const initialContext: ContextType = {
  headerTheme: undefined,
  setHeaderTheme: () => null,
};

const HeaderThemeContext = createContext(initialContext);

export function HeaderThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [headerTheme, setThemeState] = useState<Theme | undefined | null>(
    canUseDOM
      ? (document.documentElement.getAttribute("data-theme") as Theme)
      : undefined,
  );

  const setHeaderTheme = useCallback((themeToSet: Theme | null) => {
    setThemeState(themeToSet);
  }, []);

  return (
    <HeaderThemeContext value={{ headerTheme, setHeaderTheme }}>
      {children}
    </HeaderThemeContext>
  );
}

export const useHeaderTheme = (): ContextType => useContext(HeaderThemeContext);
