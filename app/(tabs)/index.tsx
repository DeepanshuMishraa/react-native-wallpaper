import React from "react";
import {
  View,
  FlatList,
  Image,
  Text,
  StatusBar,
  Dimensions,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, { FadeInDown } from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import ImageCard from "@/components/ImageCard";
import { useWallpapers, Wallpaper } from "@/hooks/useWallpapers";

export default function Explore() {
  const wallpapers = useWallpapers();
  const { height } = Dimensions.get("window");

  const renderItem = ({ item, index }: { item: Wallpaper; index: number }) => (
    <Animated.View entering={FadeInDown.delay(index * 100).springify()}>
      <ImageCard wallpaper={item} />
    </Animated.View>
  );

  const ListHeader = () => (
    <View style={styles.headerImageContainer}>
      <Image
        style={styles.headerImage}
        source={{
          uri:
            wallpapers[0]?.uri ??
            "https://ideogram.ai/assets/image/lossless/response/XuV5h2WYRRK0BxB1WxV5hA",
        }}
      />
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.8)"]}
        style={styles.headerGradient}
      >
        <Text style={styles.headerTitle}>Explore Wallpapers</Text>
      </LinearGradient>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <FlatList
        data={wallpapers}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={ListHeader}
        style={styles.flatListStyle}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  headerImageContainer: {
    height: 300,
    width: "100%",
    marginBottom: 10,
  },
  headerImage: {
    flex: 1,
    resizeMode: "cover",
  },
  headerGradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "100%",
    justifyContent: "flex-end",
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },
  listContent: {
    paddingBottom: 20,
  },
  flatListStyle: {
    flex: 1,
  },
});
