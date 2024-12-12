
import { StyleSheet, Text, View, Button } from "react-native";
import { ImageProvider, useImageContext } from "./app/context/ImageContext";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Game from "./app/screens/game";
import Customize from "./app/screens/customize";
import Settings from "./app/screens/settings";
import Home from "./app/screens/home";

const App = () => {

  const Stack = createStackNavigator();

  return (
    <ImageProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Play" component={Game} />
          <Stack.Screen name="Customize" component={Customize} />
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>
    </ImageProvider>
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
