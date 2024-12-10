
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import GamePage from "./app/screens/gamePage";
import Customize from "./app/screens/customize";
import Settings from "./app/screens/settings";
import Home from "./app/screens/home";

const App = () => {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Play" component={GamePage} />
      <Stack.Screen name="Customize" component={Customize} />
      <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
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

export default App;
