import { create } from "zustand";

interface BreadCrumbStore {
  breadcrumbs: {
    name: string;
    href: string;
  }[];
  setBreadcrumbs: (breadcrumbs: { name: string; href: string }[]) => void;
}

export const useBreadcrumbs = create<BreadCrumbStore>((set) => ({
  breadcrumbs: [{ name: "", href: "" }],
  setBreadcrumbs: (breadcrumbs) => set({ breadcrumbs }),
}));
