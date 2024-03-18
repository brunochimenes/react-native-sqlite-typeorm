import { Text, TouchableOpacityProps, TouchableOpacity } from "react-native";
import { useStyles } from "react-native-unistyles";

import { styleSheet } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
};

export function Button({ title, ...rest }: Props) {
  const { styles } = useStyles(styleSheet);

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
