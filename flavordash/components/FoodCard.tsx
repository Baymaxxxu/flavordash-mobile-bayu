import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useCart } from "@/contexts/CartContext";

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
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(item);
    Alert.alert("Berhasil", `${item.name} ditambahkan ke cart`);
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.foodImage} />

      <View style={styles.foodInfo}>
        <View style={styles.topRow}>
          <Text style={styles.category}>{item.category}</Text>
          <Text style={styles.rating}>⭐ {item.rating}</Text>
        </View>

        <Text style={styles.foodName}>{item.name}</Text>

        <Text style={styles.foodDescription}>
          {item.description}
        </Text>

        <View style={styles.bottomRow}>
          <Text style={styles.foodPrice}>{item.price}</Text>

          <TouchableOpacity
            style={styles.orderButton}
            onPress={handleAddToCart}
          >
            <Text style={styles.orderText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    borderRadius: 24,
    padding: 14,
    marginBottom: 18,
  },

  foodImage: {
    width: "100%",
    height: 180,
    borderRadius: 20,
  },

  foodInfo: {
    marginTop: 14,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  category: {
    color: "#FF6B3D",
    fontWeight: "600",
    fontSize: 12,
  },

  rating: {
    color: "#444",
    fontSize: 13,
  },

  foodName: {
    fontSize: 22,
    fontWeight: "700",
    color: "#222",
    marginTop: 8,
  },

  foodDescription: {
    color: "#777",
    marginTop: 6,
    lineHeight: 20,
    fontSize: 14,
  },

  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 18,
  },

  foodPrice: {
    fontSize: 22,
    fontWeight: "700",
    color: "#222",
  },

  orderButton: {
    backgroundColor: "#222",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 18,
  },

  orderText: {
    color: "#FFF",
    fontWeight: "600",
  },
});