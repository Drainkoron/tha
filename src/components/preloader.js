import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

import { THEME } from '../theme'

const theme = THEME.Android

export const Preloader = () => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size="large" color={theme.MAIN_COLOR} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});
