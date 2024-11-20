import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { FadeIn } from "react-native-reanimated";
import { Wallpaper } from "@/hooks/useWallpapers";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width / 2 - 15;

export default function ImageCard({ wallpaper }: { wallpaper: Wallpaper }) {
  return (
    <Animated.View entering={FadeIn.duration(500)} style={styles.container}>
      <TouchableOpacity activeOpacity={0.8}>
        <Image source={{ uri: wallpaper.uri }} style={styles.image} />
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.8)"]}
          style={styles.gradient}
        >
          <Text style={styles.name}>{wallpaper.name}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: CARD_WIDTH,
    height: CARD_WIDTH * 1.5,
    margin: 7.5,
    borderRadius: 15,
    overflow: "hidden",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "50%",
    justifyContent: "flex-end",
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  name: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
