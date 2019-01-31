import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Dimensions,
  ScrollView
} from "react-native";
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
    if (todoList.length === 0) {
      return;
    }
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
    width: width - 20,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,

    elevation: 2,
    flex: 1
  },
  border: {
    backgroundColor: "#ffffff",
    height: 10
  }
});

export default AppPresenter;
