import { create } from "zustand";

interface Theme {
  isThemeDark: boolean;
  toggleTheme: () => void;
}

export const useThemeStore = create<Theme>((set) => ({
  isThemeDark: false,
  toggleTheme: () =>
    set((state) => ({
      isThemeDark: !state.isThemeDark,
    })),
}));
