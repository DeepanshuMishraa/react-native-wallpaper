import { DownloadPicture } from "@/components/BottomSheet";
import { Link } from "expo-router";
import { useState } from "react";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Account() {
  const [pictureOpen, setPictureOpen] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text>Account</Text>
        <Button
          onPress={() => setPictureOpen(true)}
          title="Open Bottom Sheet"
        />
        {pictureOpen && (
          <DownloadPicture
            isVisible={pictureOpen}
            onClose={() => setPictureOpen(false)}
          />
        )}
      </View>
    </SafeAreaView>
  );
}
