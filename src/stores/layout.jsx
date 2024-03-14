import create from "zustand";

export const useLayoutStore = create((set) => ({
  navItems: [],
  setNavItems: (navItems) => set(() => ({ navItems: navItems })),
}));