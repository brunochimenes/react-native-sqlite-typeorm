import { createStyleSheet } from "react-native-unistyles";

export const styleSheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,

    backgroundColor: theme.colors.background,

    paddingHorizontal: 32,

    gap: 16,
  },
  header: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",

    marginTop: 32,
    marginBottom: 32,
  },
  headerTitle: {
    color: theme.colors.text,

    fontFamily: theme.fonts.family.bold,
    fontSize: theme.fonts.sizes.xl,
  },
  items: {
    gap: 12,
  },
  scroll: {
    borderTopWidth: 2,
    borderTopColor: theme.colors.shape,
    paddingTop: 16,
  },
  productInfo: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",

    marginTop: 32,
  },
  title: {
    color: theme.colors.text,

    fontFamily: theme.fonts.family.regular,
    fontSize: theme.fonts.sizes.base,
  },
  quantity: {
    color: theme.colors.text,

    fontFamily: theme.fonts.family.regular,
    fontSize: theme.fonts.sizes.sm,
  },
}));
