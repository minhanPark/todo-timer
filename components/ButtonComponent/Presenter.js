import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Button = ({ name, size, color, clickEvent }) => {
  return (
    <View>
      <TouchableOpacity style={styles.wrapper} onPressOut={clickEvent}>
        <View>
          <MaterialIcons
            name={name}
            size={size === "m" ? 36 : size === "s" ? 28 : 52}
            color={color}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 2
  }
});

export default Button;
