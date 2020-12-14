import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function Reels() {
  return (
    <View style={styles.container}>
      <Text style={styles.font}>Hello world</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  font: {
    color: "white",
    fontSize: 30,
  },
});
