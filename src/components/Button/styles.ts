import { createStyleSheet } from "react-native-unistyles";

export const styleSheet = createStyleSheet((theme) => ({
  container: {
    width: "100%",
    height: 56,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: theme.colors.primary,

    borderRadius: 7,
  },
  title: {
    color: theme.colors.text,

    fontFamily: theme.fonts.family.bold,
    fontSize: theme.fonts.sizes.base,
  },
}));
