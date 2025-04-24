"use client";
import BaseLayout from "@/components/layout/BaseLayout";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoute>
      <BaseLayout>{children}</BaseLayout>;
    </ProtectedRoute>
  );
}
