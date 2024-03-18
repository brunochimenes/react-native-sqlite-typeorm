import { TextInput, TextInputProps } from "react-native";
import { UnistylesRuntime, useStyles } from "react-native-unistyles";

import { styleSheet } from "./styles";

export function Input({ ...rest }: TextInputProps) {
  const { styles, theme } = useStyles(styleSheet);

  return (
    <TextInput
      placeholderTextColor={theme.colors.placeholderText}
      style={styles.container}
      {...rest}
    />
  );
}
