import { create } from 'zustand';

export interface UserState {
  username: string;
  login: (name: string) => void;
  logout: () => void;
}

const useStore = create<UserState>((set) => ({
  username: "",
  login: (name: string) => set({ username: name }),
  logout: () => set({ username: "" }),
}));

export default useStore;
