import { createStyleSheet } from "react-native-unistyles";

export const styleSheet = createStyleSheet((theme) => ({
  container: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",

    backgroundColor: theme.colors.shape,

    borderRadius: 7,
    padding: 16,
  },
  content: {
    flex: 1,
  },
  name: {
    color: theme.colors.text,

    fontFamily: theme.fonts.family.regular,
    fontSize: theme.fonts.sizes.base,

    marginBottom: 5,
  },
  quantity: {
    color: theme.colors.text,

    fontSize: 14,
  },
}));
