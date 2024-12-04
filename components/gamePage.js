import { StyleSheet, Text, View } from "react-native";
import React from "react";

const gamePage = () => {
  return (
    <View styles={styles.container}>
      <Text styles={styles.form}>Score: </Text>
      <Text>All Time: </Text>
      <Text>Best Streak: </Text>
      <button styles={styles.form}>Play Again!</button>
    </View>
  );
};

export default gamePage;

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
