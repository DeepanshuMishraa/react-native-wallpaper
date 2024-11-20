import { Link, Slot } from "expo-router";
import { Text, View } from "react-native";

export default function RootLayout() {
  return (
    <View>
      <Slot />
    </View>
  );
}
