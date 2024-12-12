import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from "react-native";
import { useEffect, useState } from 'react';
import { useImageContext } from "../context/ImageContext";
import MainLayout from "../layouts/mainLayout";
import * as ImagePicker from 'expo-image-picker';
import React from "react";

const Customize = ({ navigation }) => {
  const { image, setImage } = useImageContext();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.imageButton, { backgroundColor: "blue" }]}
        onPress={pickImage}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>Upload Mole</Text>
      </TouchableOpacity>
      <Text style={styles.text}>--- Current Mole Image ---</Text>
      {image && <Image source={{ uri: image }} style={styles.image} />}
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
  text: {
    fontSize: 20,
    fontWeight: "bold",

  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
  imageButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 10,
    alignItems: 'center',
    backgroundColor: 'blue'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  form: {
    fontSize: 24,
  },
});

export default Customize;
