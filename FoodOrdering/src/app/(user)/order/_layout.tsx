import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function OrderStack() {
  return (
    <Stack>
        <Stack.Screen name="index" options={{title: "Order"}} />
    </Stack>
  )
}
