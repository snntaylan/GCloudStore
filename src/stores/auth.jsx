import create from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'

export const useAuthStore = create(
    persist(
      (set, get) => ({
        authToken: null,
        accessToken: null,
        refreshToken: null,
        isAuthenticated: false,
        currentUser: null,
        setAuthentication: (userData, authToken) => set(() => ({ currentUser: userData, isAuthenticated: true, authToken })),
        setRefreshToken: (accessToken, refreshToken) => set(() => ({ accessToken, refreshToken })),
      }),
      {
        name: 'gcloud-auth', // name of the item in the storage (must be unique)
      },
    ),
  )