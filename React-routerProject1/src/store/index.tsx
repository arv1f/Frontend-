import { create } from "zustand";

interface Theme {
  isThemeDark: "dark" | "light";
  toggleTheme: () => void;
}

export const useThemeStore = create<Theme>((set) => ({
  isThemeDark: "light",
  toggleTheme: () =>
    set((state) => ({
      isThemeDark: state.isThemeDark === "dark" ? "light" : "dark",
    })),
}));
