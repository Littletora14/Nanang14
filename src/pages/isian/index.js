import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

function Isian(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect2Row}>
        <View style={styles.rect2}>
          <View style={styles.rect3}></View>
          <View style={styles.rect7}></View>
          <View style={styles.rect12}></View>
        </View>
        <View style={styles.rect17}></View>
      </View>
      <Text style={styles.model1}>Model 1</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Dashboard")}
        style={styles.button1}
      >
        <View style={styles.rect18Stack}>
          <View style={styles.rect18}></View>
          <View style={styles.rect19}></View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5b5959"
  },
  rect2: {
    width: 328,
    height: 240,
    backgroundColor: "rgba(130,129,129,1)",
    borderRadius: 11
  },
  rect3: {
    width: 301,
    height: 148,
    borderRadius: 11,
    backgroundColor: "#fff",
    marginTop: 10,
    marginLeft: 13
  },
  rect7: {
    width: 301,
    height: 4,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.01,
    shadowRadius: 0,
    backgroundColor: "rgba(51,50,50,1)",
    borderRadius: 30,
    marginTop: 31,
    marginLeft: 12
  },
  rect12: {
    width: 36,
    height: 3,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.01,
    shadowRadius: 0,
    backgroundColor: "rgba(51,50,50,1)",
    transform: [
      {
        rotate: "90.00deg"
      }
    ],
    borderRadius: 30,
    marginTop: 21,
    marginLeft: 241
  },
  rect17: {
    width: 36,
    height: 3,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.01,
    shadowRadius: 0,
    backgroundColor: "rgba(51,50,50,1)",
    transform: [
      {
        rotate: "90.00deg"
      }
    ],
    borderRadius: 30,
    marginLeft: 337,
    marginTop: 170
  },
  rect2Row: {
    height: 240,
    flexDirection: "row",
    marginTop: 177,
    marginLeft: 24,
    marginRight: -350
  },
  model1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 20,
    marginTop: -268,
    marginLeft: 37
  },
  button1: {
    width: 26,
    height: 31,
    marginTop: -82,
    marginLeft: 21
  },
  rect18: {
    top: 12,
    left: 2,
    width: 5,
    height: 26,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)",
    transform: [
      {
        rotate: "-57.00deg"
      }
    ]
  },
  rect19: {
    top: 0,
    left: 0,
    width: 7,
    height: 27,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)",
    transform: [
      {
        rotate: "57.00deg"
      }
    ]
  },
  rect18Stack: {
    width: 7,
    height: 38,
    marginTop: -3,
    marginLeft: 10
  }
});

export default Isian;
