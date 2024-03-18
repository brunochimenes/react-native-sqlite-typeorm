import { createStyleSheet } from "react-native-unistyles";

export const styleSheet = createStyleSheet((theme) => ({
  container: {
    width: "100%",
    height: 56,

    backgroundColor: theme.colors.shape,

    color: theme.colors.text,

    fontFamily: theme.fonts.family.regular,
    fontSize: theme.fonts.sizes.base,

    borderRadius: 7,
    padding: 16,
  },
}));
