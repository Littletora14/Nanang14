import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

function Splash (props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <Image
          source={require("../assets/images/logo.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <Text style={styles.savory}>Savory</Text>
        <Text style={styles.savingWillHelping}>Saving Will Helping</Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Dashboard")}
          style={styles.button}
        >
          <Text style={styles.letsGo}>Let&#39;s Go</Text>
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
  rect: {
    width: 500,
    height: 812,
    backgroundColor: "rgba(91,89,89,1)",
    alignSelf: "center"
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 206,
    alignSelf: "center"
  },
  savory: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 30,
    marginTop: 134,
    alignSelf: "center"
  },
  savingWillHelping: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 20,
    alignSelf: "center"
  },
  button: {
    width: 190,
    height: 64,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 30,
    marginTop: 31,
    alignSelf: "center"
  },
  letsGo: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 30,
    marginTop: 15,
    alignSelf: "center"
  }
});

export default Splash;
