import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  TextInput,
  ScrollView
} from "react-native";
import Button from "../ButtonComponent";
import TopText from "../TopTextComponent";
import AddInput from "../AddInputComponent";

const { width } = Dimensions.get("window");

class AppPresenter extends Component {
  state = {
    name: "minhan",
    name2: "min"
  };
  render() {
    const { test } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <TopText />
        <View style={styles.todo}>
          <AddInput />
          <ScrollView
            scrollEnabled={false}
            keyboardShouldPersistTaps="handled"
            style={styles.scroll}
          >
            <Text>dddddddd</Text>
          </ScrollView>
        </View>
      </View>
    );
  }

  _handleState = () => {
    const { name } = this.state;
    alert(name);
  };
  _handleState2 = () => {
    const { name2 } = this.state;
    alert(name2);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7d794",
    alignItems: "center"
  },
  todo: {
    flex: 7,
    backgroundColor: "#f7d794",
    width: width - 20,
    alignItems: "center"
  },
  scroll: {
    borderLeftWidth: 2,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    width: "100%",
    backgroundColor: "#f7d794"
  }
});

export default AppPresenter;
