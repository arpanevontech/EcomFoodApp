import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, MARGIN } from "../utils/theme";

export default function CategoryGridTile({ title, color, onPress }) {
  return (
    <View style={[styles.gridItem, { backgroundColor: color }]}>
      <Pressable
        android_ripple={{ color: "#CCCCCC" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.Pressedbutton : null,
        ]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.txtStyle}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "#c3d5db",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  Pressedbutton: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    padding: 16,
  },

  txtStyle: {
    fontSize: 18,
    fontWeight: "bold",
    color:COLORS.black
  },
});
