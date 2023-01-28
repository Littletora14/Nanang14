import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

function Detail(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect2}>
        <Image
          source={require("../assets/images/camera.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </View>
      <View style={styles.rect3}></View>
      <Text style={styles.namaTabungan}>Nama Tabungan</Text>
      <Text style={styles.targetTabungan}>Target Tabungan</Text>
      <View style={styles.rect4}></View>
      <Text style={styles.nominalPengisian}>Nominal Pengisian</Text>
      <View style={styles.rect5}></View>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Dashboard")}
          style={styles.button}
        >
          <View style={styles.rect6Stack}>
            <View style={styles.rect6}></View>
            <View style={styles.rect7}></View>
          </View>
        </TouchableOpacity>
        <View style={styles.simpanStack}>
          <Text style={styles.simpan}>Save</Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Isian")}
            style={styles.button2}
          ></TouchableOpacity>
        </View>
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
    width: 314,
    height: 186,
    backgroundColor: "rgba(62,59,59,1)",
    borderRadius: 20,
    marginTop: 120,
    marginLeft: 31
  },
  image: {
    width: 55,
    height: 68,
    marginTop: 59,
    marginLeft: 129
  },
  rect3: {
    width: 314,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    marginTop: 64,
    marginLeft: 31
  },
  namaTabungan: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginTop: -61,
    marginLeft: 31
  },
  targetTabungan: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginTop: 71,
    marginLeft: 31
  },
  rect4: {
    width: 314,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    marginTop: 5,
    marginLeft: 31
  },
  nominalPengisian: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginTop: 29,
    marginLeft: 31
  },
  rect5: {
    width: 314,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    marginTop: 6,
    marginLeft: 31
  },
  button: {
    width: 26,
    height: 31,
    marginTop: -1
  },
  rect6: {
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
  rect7: {
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
  rect6Stack: {
    width: 7,
    height: 38,
    marginTop: -3,
    marginLeft: 10
  },
  simpan: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)"
  },
  button2: {
    top: 0,
    left: 0,
    width: 47,
    height: 17,
    position: "absolute",
    backgroundColor: "rgba(230,230, 230,0)"
  },
  simpanStack: {
    width: 47,
    height: 17,
    marginLeft: 251,
    marginTop: 15
  },
  buttonRow: {
    height: 32,
    flexDirection: "row",
    marginTop: -539,
    marginLeft: 21,
    marginRight: 30
  }
});

export default Detail;
