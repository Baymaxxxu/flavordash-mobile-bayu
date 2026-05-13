import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { router } from "expo-router";

import FoodCard from "@/components/FoodCard";
import { foods } from "@/constants/foods";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>FlavorDash</Text>
        <Text style={styles.subtitle}>
          Katalog makanan favoritmu
        </Text>
      </View>

      {/* Tombol Detail Pesanan */}
      <TouchableOpacity
        style={styles.detailButton}
        onPress={() => router.push("/(tabs)/detail-pesanan")}
      >
        <Text style={styles.detailButtonText}>
          Lihat Detail Pesanan
        </Text>
      </TouchableOpacity>

      {/* List makanan */}
      <FlatList
        data={foods}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FoodCard item={item} />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF7F2",
  },

  header: {
    backgroundColor: "#FF7043",
    paddingVertical: 28,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFF",
  },

  subtitle: {
    color: "#FFEDE6",
    marginTop: 4,
  },

  detailButton: {
    backgroundColor: "#222",
    marginHorizontal: 16,
    marginTop: 16,
    paddingVertical: 14,
    borderRadius: 24,
    alignItems: "center",
  },

  detailButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 14,
  },

  listContent: {
    padding: 16,
    paddingBottom: 30,
  },
});