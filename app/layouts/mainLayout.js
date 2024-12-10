import React from 'react';
import { View, StyleSheet } from 'react-native';

const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
      backgroundColor: "#ffffff",
    },
    content: {
      flex: 1,
      padding: 16,
    },
  });

export default MainLayout;

