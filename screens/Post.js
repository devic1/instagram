import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Post() {
  return (
    <View style={styles.container}>
      <Text style={styles.font}>Post</Text>
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
