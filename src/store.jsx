import create from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'

export const useStore = create((set) => ({
  authToken: null,
  isAuthenticated: false,
  currentUser: null,
  navItems: [],
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  clear: () => set(() => ({ count: 0 })),
  setNavItems: (navItems) => set(() => ({ navItems: navItems })),
  setAuthentication: (userData, authToken) => set(() => ({ currentUser: userData, isAuthenticated: true, authToken })),
}));

// export const useAuthStore = create(
//   persist(
//     (set, get) => ({
//       authToken: null,
//       isAuthenticated: false,
//       currentUser: null,
//       setAuthentication: (userData, authToken) => set(() => ({ currentUser: userData, isAuthenticated: true, authToken })),
//     }),
//     {
//       name: 'gcloud-auth', // name of the item in the storage (must be unique)
//     },
//   ),
// )

export * from './stores/auth'
export * from './stores/company'
export * from './stores/layout'
