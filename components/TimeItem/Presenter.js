import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Button from "../ButtonComponent";
import timerChange from "../../lib/timerChange";

const TimeItem = ({ text, second }) => {
  return (
    <View style={styles.itemWrapper}>
      <View style={styles.leftCol}>
        <Text style={styles.text}>{text}</Text>
      </View>
      <View style={styles.rightCol}>
        <View style={styles.border}>
          <Button name="access-time" size="s" color="#f7d794" />
        </View>
        <View>
          <Text style={[styles.text, styles.bold]}>{timerChange(second)}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemWrapper: {
    flexDirection: "row",
    borderRadius: 8,
    marginTop: 10,
    paddingVertical: 8,
    paddingHorizontal: 6,
    backgroundColor: "#e77f67",
    width: "95%"
  },
  leftCol: {
    flexDirection: "row",
    // borderLeftWidth: 2,
    // borderTopWidth: 2,
    // borderRightWidth: 2,
    // borderBottomWidth: 2,
    // borderColor: "green",
    flex: 1,
    alignItems: "center",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8
  },
  rightCol: {
    flexDirection: "row",
    // borderLeftWidth: 2,
    // borderTopWidth: 2,
    // borderRightWidth: 2,
    // borderBottomWidth: 2,
    alignItems: "center",
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8
  },
  textWrapper: {
    width: 0,
    flexGrow: 1,
    flex: 1
  },
  text: {
    color: "#2d3436"
  },
  completedText: {
    color: "#2d3436",
    textDecorationLine: "line-through"
  },
  input: {
    color: "#ffffff"
  },
  border: {
    marginHorizontal: 6,
    paddingHorizontal: 6,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: "#2d3436"
  },
  bold: {
    fontWeight: "600"
  }
});

export default TimeItem;
