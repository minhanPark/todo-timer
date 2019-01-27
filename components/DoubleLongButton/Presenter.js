import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from "react-native";

const { width } = Dimensions.get("window");

const DoubleLongBtn = ({ leftText, rightText }) => (
  <View style={styles.buttonWrapper}>
    <View style={styles.leftButton}>
      <TouchableOpacity>
        <View style={styles.textWrapper}>
          <Text style={styles.buttonText}>{leftText}</Text>
        </View>
      </TouchableOpacity>
    </View>
    <View style={styles.rightButton}>
      <TouchableOpacity>
        <View style={styles.textWrapper}>
          <Text style={styles.buttonText}>{rightText}</Text>
        </View>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  buttonWrapper: {
    flexDirection: "row",
    width: width - 20,
    backgroundColor: "#ffffff",
    elevation: 2
  },
  leftButton: {
    flex: 1,
    backgroundColor: "#3dc1d3",
    borderTopLeftRadius: 8,
    borderRightWidth: 1,
    borderColor: "white"
  },
  rightButton: {
    flex: 1,
    borderTopRightRadius: 8,
    backgroundColor: "#3dc1d3",
    borderLeftWidth: 1,
    borderColor: "white"
  },
  textWrapper: {
    padding: 10
  },
  buttonText: {
    fontWeight: "700",
    textAlign: "center",
    color: "#fff",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    textShadowColor: "#000"
  }
});

export default DoubleLongBtn;
