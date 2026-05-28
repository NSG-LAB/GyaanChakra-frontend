import { create } from "zustand";

type AuthState = {
  user: { id: number; name: string; role: string } | null;
  token: string | null;
  login: (token: string, user: AuthState["user"]) => void;
  logout: () => void;
};

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  login: (token, user) => set({ token, user }),
  logout: () => set({ token: null, user: null })
}));

export default useAuthStore;
