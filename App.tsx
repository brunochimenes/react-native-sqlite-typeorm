import "reflect-metadata";
import "./src/libs/unistyles";

import { StatusBar } from "expo-status-bar";
import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";

import { Home } from "./src/screens/Home";

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold });

  if (!fontsLoaded) {
    return;
  }

  return (
    <>
      <StatusBar style="dark" backgroundColor="transparent" translucent />

      <Home />
    </>
  );
}
