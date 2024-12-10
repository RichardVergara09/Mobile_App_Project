import { StyleSheet, Text, View } from "react-native";
import React from "react";

const  GamePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.form}>Score: </Text>
      <Text>All Time: </Text>
      <Text>Best Streak: </Text>
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

export default GamePage;
