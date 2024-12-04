import { StyleSheet, Text, View } from "react-native";
import React from "react";

const customize = () => {
  return (
    <View styles={styles.container}>
      <Text>Customize</Text>
      <button>Change Mole</button>
      <Text>Theme</Text>
      <button>Gray</button>
      <button>Dark</button>
      <button>Light</button>
    </View>
  );
};

export default customize;

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
