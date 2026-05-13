import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { isTokenValid, logout } from "@/utils/auth";

export default function DetailPesanan() {
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Checking token...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detail Pesanan</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Menu</Text>
        <Text style={styles.value}>Chicken Burger</Text>

        <Text style={styles.label}>Jumlah</Text>
        <Text style={styles.value}>2 Item</Text>

        <Text style={styles.label}>Total</Text>
        <Text style={styles.price}>Rp 56.000</Text>

        <Text style={styles.label}>Status</Text>
        <Text style={styles.status}>Diproses</Text>
      </View>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={handleLogout}
      >
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF7F2",
    justifyContent: "center",
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FF7043",
    marginBottom: 20,
    textAlign: "center",
  },

  card: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 20,
    elevation: 4,
  },

  label: {
    color: "#777",
    marginTop: 10,
  },

  value: {
    fontSize: 18,
    fontWeight: "bold",
  },

  price: {
    fontSize: 20,
    color: "#FF7043",
    fontWeight: "bold",
  },

  status: {
    fontSize: 16,
    color: "green",
    fontWeight: "bold",
  },

  logoutButton: {
    backgroundColor: "#222",
    padding: 14,
    borderRadius: 24,
    marginTop: 20,
    alignItems: "center",
  },

  logoutText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});