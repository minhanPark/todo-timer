import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  TextInput,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Button from "../ButtonComponent";
import TopText from "../TopTextComponent";
import AddInput from "../AddInputComponent";
import TodoItem from "../TodoItem";

const { width } = Dimensions.get("window");

class AppPresenter extends Component {
  state = {
    name: "minhan",
    name2: "min"
  };
  render() {
    const { todoList } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <TopText />
        <View style={styles.todo}>
          <AddInput />
          <ScrollView
            style={styles.scroll}
            keyboardShouldPersistTaps="always"
            contentContainerStyle={{
              // borderLeftWidth: 2,
              // borderTopWidth: 2,
              // borderRightWidth: 2,
              // borderBottomWidth: 2,
              // borderColor: "red",
              alignItems: "center"
            }}
          >
            <View style={styles.todoText}>
              <Text style={styles.innerText}>TODO LIST</Text>
              <MaterialIcons name="chevron-right" size={20} color="black" />
            </View>
            {todoList.map((item, index) => {
              return (
                <TodoItem
                  itemText={item.text}
                  isComplete={item.isComplete}
                  index={index}
                  key={index}
                />
              );
            })}
            <View style={styles.border} />
          </ScrollView>
          <View style={styles.buttonWrapper}>
            <View style={styles.button}>
              <TouchableOpacity>
                <View style={styles.textWrapper}>
                  <Text style={styles.buttonText}>Time Check</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
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
    // borderLeftWidth: 2,
    // borderTopWidth: 2,
    // borderRightWidth: 2,
    // borderBottomWidth: 2,
    width: width - 20,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    // paddingHorizontal: 10,
    elevation: 2,
    flex: 1
  },
  todoText: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    marginTop: 20
    // borderLeftWidth: 2,
    // borderTopWidth: 2,
    // borderRightWidth: 2,
    // borderBottomWidth: 2
  },
  innerText: {
    fontSize: 18,
    //fontWeight: "600",
    marginLeft: 10
    // borderLeftWidth: 2,
    // borderTopWidth: 2,
    // borderRightWidth: 2,
    // borderBottomWidth: 2
  },

  itemWrapper: {
    flexDirection: "row",
    maxWidth: "100%"
  },
  right: {
    flexDirection: "row",
    borderLeftWidth: 2,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2
  },
  left: {
    flexDirection: "row",

    borderLeftWidth: 2,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2
  },
  text: {
    width: "100%"
  },
  buttonWrapper: {
    width: width - 20,
    backgroundColor: "#ffffff",
    alignItems: "center",
    elevation: 2
  },
  button: {
    width: width - 20,
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
  },
  border: {
    backgroundColor: "#ffffff",
    height: 10
  }
});

export default AppPresenter;
