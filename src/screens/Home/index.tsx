import { useState, useEffect } from "react";
import { Alert, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useStyles, UnistylesRuntime } from "react-native-unistyles";
import { Feather } from "@expo/vector-icons";

import { styleSheet } from "./styles";

import { dataSource } from "../../database";
import { ProductEntity } from "../../database/entities/ProductEntity";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Product } from "../../components/Product";

export function Home() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [products, setProducts] = useState<ProductEntity[]>([]);

  const { styles, theme } = useStyles(styleSheet);

  function toggleTheme() {
    if (UnistylesRuntime.themeName === "dark") {
      UnistylesRuntime.setTheme("light");
    } else {
      UnistylesRuntime.setTheme("dark");
    }
  }

  const ThemeIcon = () =>
    UnistylesRuntime.themeName === "dark" ? (
      <Feather name="moon" size={24} color={theme.colors.primary} />
    ) : (
      <Feather name="sun" size={24} color={theme.colors.primary} />
    );

  async function loadProducts() {
    const productRepository = dataSource.getRepository(ProductEntity);
    const products = await productRepository.find();

    setProducts(products);
  }

  async function handleAdd() {
    if (!name.trim() || !quantity.trim()) {
      return Alert.alert("Informe o produto e a quantidade!");
    }

    const product = new ProductEntity();
    product.name = name;
    product.quantity = Number(quantity);

    await dataSource.manager.save(product);
    Alert.alert(`Produto com ID=${product.id} cadastrado com sucesso!`);

    setName("");
    setQuantity("");

    loadProducts();
  }

  async function handleRemove(product: ProductEntity) {
    Alert.alert("Remover", `Remover ${product.name}`, [
      { text: "Não", style: "cancel" },
      {
        text: "Sim",
        onPress: async () => {
          await dataSource.manager.remove(product);
          loadProducts();
        },
      },
    ]);
  }

  useEffect(() => {
    const connect = async () => {
      if (!dataSource.isInitialized) {
        await dataSource.initialize();

        loadProducts();
      }
    };

    connect();
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.header}>
        <Text style={styles.headerTitle}>Liste de compras</Text>

        <Pressable onPress={toggleTheme}>{ThemeIcon}</Pressable>
      </SafeAreaView>

      <Input placeholder="Nome do item" onChangeText={setName} value={name} />

      <Input
        placeholder="Quantidade"
        keyboardType="numeric"
        onChangeText={setQuantity}
        value={quantity}
      />

      <Button title="Adicionar" onPress={handleAdd} />

      <View style={styles.productInfo}>
        <Text style={styles.title}>Itens</Text>
        <Text style={styles.quantity}>{products.length}</Text>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.items}
        showsVerticalScrollIndicator={false}
      >
        {products.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            quantity={product.quantity}
            onRemove={() => handleRemove(product)}
          />
        ))}
      </ScrollView>
    </View>
  );
}
