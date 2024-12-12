import { StyleSheet, Text, View, Button, TouchableOpacity, Platform } from "react-native";
import MainLayout from "../layouts/mainLayout";

const Home = ({ navigation }) => {
    return (
        <MainLayout>
            <View style={styles.container}>
                <Text style={styles.title}>Whack-A-Mole!</Text>
                <View style={styles.buttonContainer}>
                <TouchableOpacity
                        style={[styles.button, { backgroundColor: "#7fff00" }]}
                        onPress={() => navigation.navigate("Play")}
                        activeOpacity={0.7}
                    >
                        <Text style={styles.buttonText}>Play!</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: "#dc143c" }]}
                        onPress={() => navigation.navigate("Customize")}
                        activeOpacity={0.7}
                    >
                        <Text style={styles.buttonText}>Customize</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: "black" }]}
                        onPress={() => navigation.navigate("Settings")}
                        activeOpacity={0.7}
                    >
                        <Text style={styles.buttonText}>Settings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: "blue" }]}
                        onPress={() => navigation.navigate("Scoreboard")}
                        activeOpacity={0.7}
                    >
                        <Text style={styles.buttonText}>ScoreBoard</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </MainLayout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 30,
    },
    buttonContainer: {
        width: "80%",
        gap: 15,
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginVertical: 10,
        alignItems: 'center',
        ...Platform.select({ // for cross platform 
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
            },
            android: {
                elevation: 3,
            }
        })
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    }
});

export default Home;
