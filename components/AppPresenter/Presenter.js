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
import MiddleText from "../MiddleTextComponent";
import SingleLongBtn from "../SingleLongButton";
import DoubleLongBtn from "../DoubleLongButton";
import TimeItem from "../TimeItem";
import TotalTime from "../TotalTimeComponent";
import Timer from "../TimerComponent";

const { width } = Dimensions.get("window");

class AppPresenter extends Component {
  state = {
    name: "minhan",
    name2: "min"
  };
  render() {
    const { todoList, isTimeChecked, isTimerStarted } = this.props;
    if (isTimerStarted) {
      return <Timer />;
    }
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <TopText />
        {isTimeChecked ? (
          <View style={styles.main}>
            <TotalTime />
            <ScrollView
              style={styles.scroll}
              keyboardShouldPersistTaps="always"
              contentContainerStyle={{
                alignItems: "center"
              }}
            >
              <MiddleText text="TIME CHECK" />
              {todoList.map((item, index) => {
                return (
                  <TimeItem
                    text={item.text}
                    second={item.totalTime}
                    index={index}
                    key={index}
                  />
                );
              })}
              <View style={styles.border} />
            </ScrollView>
            <DoubleLongBtn
              leftText="Back"
              rightText="Reset"
              leftHandleEvent={this._handleTimeCheckFalse}
              rightHandleEvent={this._handleTimeReset}
            />
          </View>
        ) : (
          <View style={styles.main}>
            <AddInput />
            <ScrollView
              style={styles.scroll}
              keyboardShouldPersistTaps="always"
              contentContainerStyle={{
                alignItems: "center"
              }}
            >
              <MiddleText text="TODO LIST" />
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
            <SingleLongBtn
              text="Time Check"
              handleEvent={this._handleTimeCheckTrue}
            />
          </View>
        )}
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
  _handleTimeCheckTrue = () => {
    const { timeCheck } = this.props;
    timeCheck(true);
  };
  _handleTimeCheckFalse = () => {
    const { timeCheck } = this.props;
    timeCheck(false);
  };
  _handleTimeReset = () => {
    const { todoList, resetTime } = this.props;
    const newArr = todoList.reduce((acc, cur) => {
      acc.push({ ...cur, totalTime: 0 });
      return acc;
    }, []);
    resetTime(newArr);
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7d794",
    alignItems: "center"
  },
  main: {
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
