import { Image, StyleSheet, Text, View } from "react-native";

type FoodProps = {
  item: {
    id: string;
    name: string;
    description: string;
    price: string;
    image: string;
  };
};

export default function FoodCard({ item }: FoodProps) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.foodImage} />

      <View style={styles.foodInfo}>
        <Text style={styles.foodName}>{item.name}</Text>
        <Text style={styles.foodDescription}>{item.description}</Text>
        <Text style={styles.foodPrice}>{item.price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 12,
    marginBottom: 14,
    alignItems: "center",
    elevation: 4,
  },

  foodImage: {
    width: "32%",
    aspectRatio: 1,
    borderRadius: 14,
  },

  foodInfo: {
    flex: 1,
    marginLeft: 14,
  },

  foodName: {
    fontSize: 17,
    fontWeight: "bold",
  },

  foodDescription: {
    fontSize: 13,
    color: "#666",
    marginTop: 6,
  },

  foodPrice: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FF7043",
    marginTop: 8,
  },
});