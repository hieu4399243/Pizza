import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import products from "@/assets/data/products";

const ProductListItem = ({products}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: products.image}} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>{products.name}</Text>
      <Text style={styles.price}>${products.price.toFixed(2)}</Text>
    </View>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    alignSelf: "center",
  },
  title: {
    fontWeight: "600",
    fontSize: 18,
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: "bold",
    marginTop: "auto",
  },
});
