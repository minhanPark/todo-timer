import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Button from "../ButtonComponent";
import timerChange from "../../lib/timerChange";

const TotalTime = ({ todoList }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.input}>
        {todoList.length === 0
          ? `Total 00 : 00 : 00`
          : `Total ${timerChange(
              todoList.map(item => item.totalTime).reduce((a, b) => a + b)
            )}`}
      </Text>
      <Button name="insert-emoticon" size="s" color="#ffffff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderLeftWidth: 2,
    // borderTopWidth: 2,
    // borderRightWidth: 2,
    // borderBottomWidth: 2,
    width: "90%",
    backgroundColor: "#d2dae2",
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
    borderRadius: 18,
    top: 18,
    zIndex: 2,
    elevation: 2
  },
  input: {
    // borderLeftWidth: 2,
    // borderTopWidth: 2,
    // borderRightWidth: 2,
    // borderBottomWidth: 2,
    fontSize: 18,
    flex: 1,
    color: "#ffffff"
  }
});

export default TotalTime;
