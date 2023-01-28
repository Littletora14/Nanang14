import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Svg, { Ellipse } from "react-native-svg";

function Dashboard(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect1}>
        <View style={styles.berlangsungRow}>
          <Text style={styles.berlangsung}>Berlangsung</Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Dashboard")}
            style={styles.button}
          >
            <View style={styles.tercapaiStack}>
              <Text style={styles.tercapai}>Tercapai</Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Pencapaian")}
                style={styles.button2}
              ></TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.rect2}></View>
        <Text style={styles.text}>Start track your saving</Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Detail")}
          style={styles.button3}
        >
          <View style={styles.ellipseStack}>
            <Svg viewBox="0 0 84.61 85" style={styles.ellipse}>
              <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(230, 230, 230,1)"
                cx={42}
                cy={43}
                rx={42}
                ry={43}
              ></Ellipse>
            </Svg>
            <View style={styles.rect3}>
              <View style={styles.rect4}></View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  rect1: {
    width: 500,
    height: 812,
    backgroundColor: "rgba(91,89,89,1)",
    alignSelf: "center"
  },
  berlangsung: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginLeft: 70,
  },
  button: {
    width: 57,
    height: 22,
    marginLeft: 140,
    marginTop: 2
  },
  tercapai: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    width: 54,
    height: 17
  },
  button2: {
    top: 0,
    left: 0,
    width: 57,
    height: 22,
    position: "absolute",
    backgroundColor: "rgba(230,230, 230,0)"
  },
  tercapaiStack: {
    width: 57,
    height: 22
  },
  berlangsungRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 103,
    marginLeft: 48,
    marginRight: 57
  },
  rect2: {
    width: 346,
    height: 6,
    backgroundColor: "#E6E6E6",
    borderRadius: 10,
    marginTop: 3,
    alignSelf: "center"
  },
  text: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 20,
    marginTop: 286,
    alignSelf: 'center'
  },
  button3: {
    width: 85,
    height: 85,
    marginTop: 217,
    marginLeft: 266
  },
  ellipse: {
    top: 5,
    left: 45,
    width: 60,
    height: 60,
    position: "absolute"
  },
  rect3: {
    top: 23,
    left: 71,
    width: 8,
    height: 30,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)"
  },
  rect4: {
    width: 8,
    height: 30,
    backgroundColor: "rgba(0,0,0,1)",
    transform: [
      {
        rotate: "90.00deg"
      }
    ]
  },
  ellipseStack: {
    width: 85,
    height: 85
  }
});

export default Dashboard;
