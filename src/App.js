import React, { useState } from "react";
import { View, Text, StyleSheet, SectionList } from "react-native";

const App = () => {
  const [sections] = useState([
    {
      title: "Sport",
      data: [1, 2, 3]
    },
    {
      title: "IT",
      data: [4, 5, 6]
    },
    {
      title: "Math",
      data: [7, 8]
    }
  ]);
  return (
    <SectionList
      section={sections}
      keyExtractor={(item, index) => item + index} // data:[7,8] object الي بتكون داخل الdata معلومات الي بتكون داخل
      renterItem={(props) => {
        return (
          <View style={styles.itemContainer}>
            <Text style={styles.itemContent}>Hi {props.item} </Text>
          </View>
        );
      }}
      renderSectionHeader={(props) => {
        return <Text style={styles.itemContent}> {props.section.title} </Text>;
      }}
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
