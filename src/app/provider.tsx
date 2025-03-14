"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { SessionProvider, useSession } from "next-auth/react";

export default function Provider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider {...props}>
      <SessionProvider>
        {children}
      </SessionProvider>
    </NextThemesProvider>
  );
}
