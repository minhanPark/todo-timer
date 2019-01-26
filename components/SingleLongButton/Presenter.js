import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from "react-native";

const { width } = Dimensions.get("window");

const SingleLongBtn = ({ text }) => (
  <View style={styles.buttonWrapper}>
    <View style={styles.button}>
      <TouchableOpacity>
        <View style={styles.textWrapper}>
          <Text style={styles.buttonText}>{text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  buttonWrapper: {
    width: width - 20,
    backgroundColor: "#ffffff",
    alignItems: "center",
    elevation: 2
  },
  button: {
    backgroundColor: "#3dc1d3",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    width: "100%"
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

export default SingleLongBtn;
