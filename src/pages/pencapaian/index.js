import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

function Pencapaian(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect2}></View>
      <Text style={styles.belumAdaPencapaian}>Belum ada Pencapaian</Text>
      <View style={styles.berlangsungStackRow}>
        <View style={styles.berlangsungStack}>
          <Text style={styles.berlangsung}>Berlangsung</Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Dashboard")}
            style={styles.button}
          ></TouchableOpacity>
        </View>
        <Text style={styles.tercapai}>Tercapai</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5b5959"
  },
  rect2: {
    width: 346,
    height: 6,
    backgroundColor: "#E6E6E6",
    borderRadius: 10,
    marginTop: 60,
    marginLeft: 13
  },
  belumAdaPencapaian: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 20,
    marginTop: 286,
    marginLeft: 88
  },
  berlangsung: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)"
  },
  button: {
    top: 2,
    left: 0,
    width: 78,
    height: 15,
    position: "absolute",
    backgroundColor: "rgba(230,230, 230,0)"
  },
  berlangsungStack: {
    width: 78,
    height: 17
  },
  tercapai: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginLeft: 140,
    marginTop: 2
  },
  berlangsungStackRow: {
    height: 19,
    flexDirection: "row",
    marginTop: -343,
    marginLeft: 46,
    marginRight: 57
  }
});

export default Pencapaian;
