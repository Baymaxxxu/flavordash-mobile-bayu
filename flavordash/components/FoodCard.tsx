import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type FoodProps = {
  item: {
    id: string;
    name: string;
    category: string;
    description: string;
    price: string;
    rating: string;
    image: string;
  };
};

export default function FoodCard({ item }: FoodProps) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.foodImage} />

      <View style={styles.foodInfo}>
        <View style={styles.topRow}>
          <Text style={styles.category}>{item.category}</Text>
          <Text style={styles.rating}>⭐ {item.rating}</Text>
        </View>

        <Text style={styles.foodName}>{item.name}</Text>
        <Text style={styles.foodDescription}>{item.description}</Text>

        <View style={styles.bottomRow}>
          <Text style={styles.foodPrice}>{item.price}</Text>

          <TouchableOpacity style={styles.orderButton}>
            <Text style={styles.orderText}>Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 12,
    marginBottom: 16,
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },

  foodImage: {
    width: "34%",
    aspectRatio: 1,
    borderRadius: 16,
    backgroundColor: "#EEEEEE",
  },

  foodInfo: {
    flex: 1,
    marginLeft: 14,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  category: {
    fontSize: 11,
    color: "#FF7043",
    fontWeight: "bold",
    backgroundColor: "#FFF0E8",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
  },

  rating: {
    fontSize: 12,
    color: "#444",
    fontWeight: "600",
  },

  foodName: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#222",
    marginTop: 8,
  },

  foodDescription: {
    fontSize: 13,
    color: "#666",
    marginTop: 5,
    lineHeight: 18,
  },

  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },

  foodPrice: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FF7043",
  },

  orderButton: {
    backgroundColor: "#FF7043",
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 20,
  },

  orderText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
  },
});