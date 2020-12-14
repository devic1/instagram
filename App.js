import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Activity from "./screens/Activity";
import Profile from "./screens/Profile";
import Post from "./screens/Post";
import Homescreen from "./screens/Homescreen";
import Reels from "./screens/Reels";

export default function App() {
  const tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <tab.Navigator
        initialRouteName="Homescreen"
        tabBarOptions={{ tabStyle: styles.tab }}
      >
        <tab.Screen name="Homescreen" component={Homescreen} />
        <tab.Screen name="Reels" component={Reels} />
        <tab.Screen name="Post" component={Post} />
        <tab.Screen name="Activity" component={Activity} />
        <tab.Screen name="Profile" component={Profile} />
      </tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tab: {
    alignSelf: "center",
  },
});
