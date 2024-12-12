import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState, useEffect } from "react";
import { WhackAMoleImages } from "../assets/ImageAssets";
import { useImageContext } from "../context/ImageContext";

const GAME_TIME = 30;
const GRID_SIZE = 3;
const MOLE_APPEAR_INTERVAL = 1000; // change to alter speed
const HOLE_IMAGE = WhackAMoleImages.holeImage;
const MOLE_IMAGE = WhackAMoleImages.moleImage;

const Game = () => {
  const { image } = useImageContext();
  const [moleEntity, setMoleEntity] = useState(MOLE_IMAGE);
  const [time, setTime] = useState(GAME_TIME)
  const [molePosition, setMolePosition] = useState(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // calculates mole position 
  const moleLocation = () => {
    const position = Math.floor(Math.random() * (GRID_SIZE * GRID_SIZE));
    setMolePosition(position);
  }

  // handles whacks
  const handleWhack = (index) => {
    if (index === molePosition && !gameOver) {
      setScore(oldScore => oldScore + 1);
    }
  }

  // timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(oldTime => {
        if (oldTime <= 1) {
          clearInterval(timer);
          setGameOver(true);
          return 0;
        }
        return oldTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!gameOver) {
      const moleTimer = setInterval(moleLocation, MOLE_APPEAR_INTERVAL);
      return () => clearInterval(moleTimer)
    }
  }, [gameOver]);

  const reset = () => {
    setScore(0);
    setTime(GAME_TIME);
    setGameOver(false);
  }

  useEffect(() => {
    if (image) {
      console.log('Image URI:', image);
      setMoleEntity({ uri: image });
    }
  }, [image]);

  const renderGame = () => {
    return Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, index) => (
      <View key={index} style={styles.holeContainer}>
        <TouchableOpacity
          style={styles.holeContainer}
          onPress={() => handleWhack(index)}
        >
          <ImageBackground
            source={HOLE_IMAGE}
            style={styles.hole}
            resizeMode="cover"
          >
            {molePosition === index && !gameOver && (
              <Image
                source={moleEntity}
                style={styles.mole}
                resizeMode="contain"
              />
            )}
          </ImageBackground>
        </TouchableOpacity>
      </View>
    ));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Whack-a-Mole</Text>

      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>Score: {score}</Text>
        <Text style={styles.timeText}>Time Left: {time}s</Text>
      </View>

      <View style={styles.grid}>
        {renderGame()}
      </View>

      {gameOver && (
        <View style={styles.gameOverContainer}>
          <Text style={styles.gameOverText}>Game Over!</Text>
          <Text style={styles.finalScoreText}>Final Score: {score}</Text>
          <TouchableOpacity onPress={reset} style={styles.resetButton}>
            <Text style={styles.resetButtonText}>Play Again</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  scoreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  scoreText: {
    fontSize: 18,
    color: 'black',
  },
  timeText: {
    fontSize: 18,
    color: 'black',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 330,
    height: 330,
    justifyContent: 'center',
    alignItems: 'center',
  },
  holeContainer: {
    marginBottom: 20,
    padding: 5,
    width: '30%',
    aspectRatio: 1.5,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hole: {
    width: '90%',
    height: '85%',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'white',
  },
  activeHole: {
    backgroundColor: 'white',
  },
  mole: {
    marginBottom: 25,
    marginRight: 10,
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  gameOverContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  gameOverText: {
    fontSize: 36,
    color: 'red',
    marginBottom: 20,
  },
  finalScoreText: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
  },
  resetButton: {
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  resetButtonText: {
    fontSize: 18,
    color: 'white',
  },
});

export default Game;
