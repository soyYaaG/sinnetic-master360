import {
  applyThemeName,
  resolveTheme,
  ThemeName,
  ThemeSetting,
} from "@interfaces/theme";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeState {
  setting: ThemeName;
  setSetting: (setting: ThemeSetting) => void;
  init: () => void;
}

const THEME_KEY = "app.theme";

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      setting: "light",

      setSetting: (setting: ThemeSetting) => {
        const resolved = resolveTheme(setting);
        set({ setting: resolved });
        applyThemeName(resolved);
      },

      init() {
        const { setting } = get();
        get().setSetting(setting);
      },
    }),
    {
      name: THEME_KEY,
      onRehydrateStorage: () => (state) => {
        if (!state) return;
        queueMicrotask(() => state.init());
      },
    }
  )
);
