import create from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

const useStore = create<any>(persist(
  (set) => ({
    username: '',
    login: (name: string) => set({ username: name }),
    logout: () => set({ username: '' }),
  }),
  {
    name: 'user-storage',
    storage: createJSONStorage(() => localStorage), 
  }
));

export default useStore;
