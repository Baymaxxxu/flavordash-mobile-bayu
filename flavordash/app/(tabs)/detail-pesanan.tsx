import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useCart } from "@/contexts/CartContext";
import { isTokenValid, logout } from "@/utils/auth";

export default function DetailPesanan() {
  const [loading, setLoading] = useState(true);

  const { cartItems } = useCart();

  useEffect(() => {
    const checkToken = async () => {
      const valid = await isTokenValid();

      if (!valid) {
        router.replace("/login");
      } else {
        setLoading(false);
      }
    };

    checkToken();
  }, []);

  const handleLogout = async () => {
    await logout();
    router.replace("/login");
  };

  const totalPrice = cartItems.reduce((total, item) => {
    const numericPrice = parseInt(
      item.price.replace("Rp ", "").replace(".", "")
    );

    return total + numericPrice;
  }, 0);

  if (loading) {
    return (
      <View style={styles.center}>
        <Text>Checking token...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detail Pesanan</Text>

      {cartItems.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>
            Belum ada makanan di cart
          </Text>
        </View>
      ) : (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={(item, index) => `${item.id}-${index}`}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Image
                  source={{ uri: item.image }}
                  style={styles.image}
                />

                <View style={styles.info}>
                  <Text style={styles.foodName}>
                    {item.name}
                  </Text>

                  <Text style={styles.category}>
                    {item.category}
                  </Text>

                  <Text style={styles.price}>
                    {item.price}
                  </Text>
                </View>
              </View>
            )}
          />

          <View style={styles.summaryCard}>
            <Text style={styles.summaryText}>
              Total Item: {cartItems.length}
            </Text>

            <Text style={styles.totalPrice}>
              Total Harga: Rp {totalPrice.toLocaleString("id-ID")}
            </Text>
          </View>
        </>
      )}

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={handleLogout}
      >
        <Text style={styles.logoutText}>
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F4F2",
    paddingHorizontal: 20,
    paddingTop: 60,
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#222",
    marginBottom: 20,
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    borderRadius: 22,
    padding: 12,
    marginBottom: 14,
  },

  image: {
    width: 90,
    height: 90,
    borderRadius: 18,
  },

  info: {
    flex: 1,
    marginLeft: 14,
    justifyContent: "center",
  },

  foodName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#222",
  },

  category: {
    fontSize: 13,
    color: "#777",
    marginTop: 4,
  },

  price: {
    fontSize: 17,
    fontWeight: "700",
    color: "#FF6B3D",
    marginTop: 10,
  },

  summaryCard: {
    backgroundColor: "#FFF",
    borderRadius: 22,
    padding: 20,
    marginTop: 10,
    marginBottom: 20,
  },

  summaryText: {
    fontSize: 16,
    color: "#555",
  },

  totalPrice: {
    fontSize: 22,
    fontWeight: "700",
    color: "#222",
    marginTop: 10,
  },

  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  emptyText: {
    fontSize: 16,
    color: "#777",
  },

  logoutButton: {
    backgroundColor: "#222",
    paddingVertical: 16,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 20,
  },

  logoutText: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 15,
  },
});