import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const MiddleText = ({ text }) => (
  <View style={styles.todoText}>
    <Text style={styles.innerText}>{text}</Text>
    <MaterialIcons name="chevron-right" size={20} color="black" />
  </View>
);

const styles = StyleSheet.create({
  todoText: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    marginTop: 20
  },
  innerText: {
    fontSize: 18,
    //fontWeight: "600",
    marginLeft: 10
  }
});

export default MiddleText;
