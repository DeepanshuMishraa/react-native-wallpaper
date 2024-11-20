import { Link, Slot } from "expo-router";
import { Text, View } from "react-native";

export default function RootLayout() {
  return (
    <View>
      <View style={{ backgroundColor: "red" }}>
        <Link href={"/"}>
          <Text>Go back</Text>
        </Link>
      </View>
      <Slot />
    </View>
  );
}
