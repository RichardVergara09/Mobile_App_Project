import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function customize() {
  return (
    <View style={styles.container}>
      <Text style={styles.form}>Customize</Text>
      <button style={styles.form}>Change Mole</button>
      <Text>Theme</Text>
      <button>Gray</button>
      <button>Dark</button>
      <button>Light</button>
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
