import { create } from 'zustand';

interface User {
  id: string;
  email: string;
  fullName: string;
}

interface AuthState {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  checkAuth: () => Promise<void>;
}

export const useAuth = create<AuthState>((set) => ({
  user: null,
  isLoading: false,
  checkAuth: async () => {
    try {
      set({ isLoading: true });
      // TODO: Replace with actual API call
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        set({ user: JSON.parse(storedUser), isLoading: false });
      } else {
        set({ user: null, isLoading: false });
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      set({ user: null, isLoading: false });
    }
  },
  login: async (email: string, password: string) => {
    try {
      set({ isLoading: true });
      // TODO: Replace with actual API call
      const user = {
        id: '1',
        email,
        fullName: 'John Doe',
      };
      localStorage.setItem('user', JSON.stringify(user));
      set({ user, isLoading: false });
    } catch (error) {
      console.error('Login failed:', error);
      set({ user: null, isLoading: false });
      throw error;
    }
  },
  logout: () => {
    localStorage.removeItem('user');
    set({ user: null, isLoading: false });
  },
})); 