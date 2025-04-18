import BaseLayout from "@/components/layout/BaseLayout";

export default function Page({ children }: { children: React.ReactNode }) {
  return <BaseLayout>{children}</BaseLayout>;
}
