import { StyleSheet, Image } from "react-native";
import { Text, View } from "@/components/Themed";
import product from "@assets/data/products";
import Colors from "src/constants/Colors";
import ProductListItem from "src/components/ProductListItem";

export default function TabOneScreen() {
  return (
    <View>
      <ProductListItem product={product[0]}/>
      <ProductListItem product={product[1]} />
    </View>
  );
}

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
