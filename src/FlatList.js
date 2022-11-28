import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const Item = ({ item: { key, name } }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemContent}>
        Hi {key} {name}
      </Text>
    </View>
  );
};

const App = () => {
  const [item] = useState([
    { key: "1", name: "Item 1" },
    { key: "2", name: "Item 2" },
    { key: "3", name: "Item 3" },
    { key: "4", name: "Item 4" },
    { key: "5", name: "Item 5" },
    { key: "6", name: "Item 6" },
    { key: "7", name: "Item 7" }
  ]);
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ backgroundColor: "red" }}
      data={item}
      keyExtractor={(item) => item.key}
      renderItem={Item}
    />
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
