// app/screens/scoreboard.js
import React, { useEffect, useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  ScrollView, 
  ActivityIndicator,
  SafeAreaView
} from 'react-native';
import firestore from '@react-native-firebase/firestore';


const ScoreBoard = ({ navigation }) => {
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

useEffect(() => {
    const fetchPlayers = async () => {
        try {
        const querySnapshot = await firestore().collection('Players').get();
        const playerData = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        setPlayers(playerData);
        setLoading(false);
        } catch (err) {
        setError('Failed to fetch scoreboard data');
        setLoading(false);
        console.error('Error fetching data:', err);
        }
    };

    fetchPlayers();
}, []);

if (loading) {
    return (
    <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
    </View>
    );
}

if (error) {
    return (
    <View style={styles.centerContainer}>
        <Text style={styles.errorText}>{error}</Text>
    </View>
    );
}

return (
    <SafeAreaView style={styles.container}>
    <Text style={styles.title}>Whack-a-mole Scoreboard</Text>
    <ScrollView style={styles.scrollView}>
        {players.map((player) => (
        <View key={player.id} style={styles.playerCard}>
            <View style={styles.playerInfo}>
            <Text style={styles.playerName}>{player.Name}</Text>
            <Text style={styles.playerCountry}>Country: {player.Country}</Text>
            {player.Player_ID && (
                <Text style={styles.playerId}>Player ID: {player.Player_ID}</Text>
            )}
            </View>
            <View style={styles.scoreContainer}>
            <Text style={styles.scoreText}>Score:</Text>
            <Text style={styles.scoreNumber}>{player.High_Score}</Text>
            </View>
        </View>
        ))}
    </ScrollView>
    </SafeAreaView>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  playerCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  playerInfo: {
    flex: 1,
  },
  playerName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  playerCountry: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  playerId: {
    fontSize: 14,
    color: '#666',
  },
  scoreContainer: {
    alignItems: 'flex-end',
  },
  scoreText: {
    fontSize: 14,
    color: '#666',
  },
  scoreNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2196F3',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ScoreBoard;