import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function settings() {
  return (
    <View styles={styles.container}>
      <Text>Settings</Text>
      <Text>Difficulty: </Text>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>Reset All</button>
      <button>Report Issue</button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 24,
  },
  form: {
    fontSize: 24,
  },
});
