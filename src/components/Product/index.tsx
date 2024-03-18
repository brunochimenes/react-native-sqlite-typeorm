import { Text, TouchableOpacity, View } from "react-native";
import { useStyles } from "react-native-unistyles";
import { Feather } from "@expo/vector-icons";

import { styleSheet } from "./styles";

type Props = {
  name: string;
  quantity: number;
  onRemove: () => void;
};

export function Product({ name, quantity, onRemove }: Props) {
  const { styles } = useStyles(styleSheet);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.quantity}>
          <Feather name="shopping-cart" size={16} /> {quantity}
        </Text>
      </View>

      <TouchableOpacity onPress={onRemove}>
        <Feather name="trash" size={18} color="#ff4949" />
      </TouchableOpacity>
    </View>
  );
}
