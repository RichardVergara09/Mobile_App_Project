import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.form}>Whack-a-mole!</Text>
      <button style={styles.form}>Play!</button>
      <button style={styles.form}>Customize</button>
      <button style={styles.form}>Settings</button>
      <button style={styles.form}>Leaderboard</button>
      <StatusBar style="auto" />
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
