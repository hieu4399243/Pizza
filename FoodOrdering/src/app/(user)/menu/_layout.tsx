import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Stack } from "expo-router";
import Colors from "@/constants/Colors";
import { useColorScheme } from "react-native";
export default function MenuStack() {
  const colorScheme = useColorScheme();
  return (
    <Stack
      screenOptions={{
        headerRight: () => (
          <Link href="/cart" asChild>
            <Pressable>
              {({ pressed }) => (
                <FontAwesome
                  name="shopping-cart"
                  size={25}
                  color={Colors.light.tint}
                  style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          </Link>
        ),
      }}
    >
      <Stack.Screen name="index" options={{ title: "Menu" }} />
    </Stack>
  );
}
