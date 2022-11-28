import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const App = () => {
  const [item] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  return (
    <ScrollView
      style={styles.container}
      horizontal={false}
      showsVerticalScrollIndicator={false}
    >
      {item.map((item, index) => (
        <View key={index} style={styles.itemContainer}>
          <Text style={styles.itemContent}>Hi {item}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  itemContainer: {
    backgroundColor: "orange",
    margin: 8,
    height: 170,
    justifyContent: "center",
    alignItems: "center"
  },
  itemContent: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default App;
