import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";

export default function Homescreen() {
  let [fontsLoaded] = useFonts({
    Bilabong: require("../assets/fonts/Bilabong.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Text
            style={{
              fontFamily: "Bilabong",
              color: "white",
              fontSize: 40,
              position: "absolute",
              top: 50,
              left: -85,
            }}
          >
            Instagram
          </Text>
          <Text style={styles.font}>Hello world</Text>
        </View>
      </SafeAreaView>
    );
  }
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
