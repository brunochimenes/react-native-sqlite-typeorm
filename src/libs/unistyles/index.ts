import { UnistylesRegistry } from "react-native-unistyles";

import { breakpoints } from "./tokens/breakpoints";
import { dark, light } from "./theme";

type AppBreakpoints = typeof breakpoints;

interface AppThemes {
  light: typeof light;
  dark: typeof dark;
}

declare module "react-native-unistyles" {
  export interface UnistylesBreakpoints extends AppBreakpoints {}
  export interface UnistylesThemes extends AppThemes {}
}

UnistylesRegistry.addBreakpoints(breakpoints)
  .addThemes({
    light,
    dark,
  })
  .addConfig({
    initialTheme: "dark",
    adaptiveThemes: true,
  });
