"use client";
import { ReactNode } from "react";
// import { SessionProvider } from "next-auth/react";

interface Props {
  children: ReactNode;
}

export default function Provider({ children }: Props) {
  // return <SessionProvider>{children}</SessionProvider>;
  return <>{children}</>;
}
