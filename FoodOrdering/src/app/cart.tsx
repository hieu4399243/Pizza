import { StyleSheet, Text, View, Platform, FlatList } from "react-native";
import React, { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { useCart } from "./providers/CartProvider";
import CartListItem from "@/components/CartListItem";
import Button from "@/components/Button";

const CartScreen = () => {
  const { items, total } = useCart();
  return (
    <View>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        contentContainerStyle={{ padding: 10, gap: 10 }}
      />
      <Text>Total: ${total}</Text>
      <Button text="Check out"/>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
