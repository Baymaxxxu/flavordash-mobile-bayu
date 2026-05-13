import { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { router } from "expo-router";

import FoodCard from "@/components/FoodCard";
import { foods } from "@/constants/foods";
import { useCart } from "@/contexts/CartContext";

const categories = ["All", "Burger", "Pizza", "Sushi", "Coffee"];

export default function HomeScreen() {
  const [searchText, setSearchText] = useState("");
  const { cartItems } = useCart();

  const filteredFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello Bayu 👋</Text>

        <Text style={styles.title}>
          Find Your Favorite Food
        </Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search food..."
          placeholderTextColor="#999"
          style={styles.searchInput}
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryContainer}
      >
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.categoryButton,
              index === 0 && styles.activeCategory,
            ]}
          >
            <Text
              style={[
                styles.categoryText,
                index === 0 && styles.activeCategoryText,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={styles.detailButton}
        onPress={() => router.push("/detail-pesanan")}
      >
        <Text style={styles.detailButtonText}>
          View Order Detail ({cartItems.length})
        </Text>
      </TouchableOpacity>

      <FlatList
        data={filteredFoods}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FoodCard item={item} />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            Food not found
          </Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F4F2",
  },

  header: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 12,
  },

  greeting: {
    fontSize: 14,
    color: "#777",
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#222",
    marginTop: 6,
    width: "80%",
  },

  searchContainer: {
    paddingHorizontal: 24,
    marginTop: 12,
  },

  searchInput: {
    backgroundColor: "#FFF",
    borderRadius: 18,
    paddingHorizontal: 18,
    paddingVertical: 14,
    fontSize: 14,
  },

  categoryContainer: {
    paddingHorizontal: 24,
    marginTop: 20,
    paddingBottom: 8,
  },

  categoryButton: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    backgroundColor: "#ECE7E3",
    borderRadius: 20,
    marginRight: 10,
  },

  activeCategory: {
    backgroundColor: "#222",
  },

  categoryText: {
    color: "#444",
    fontWeight: "600",
    fontSize: 13,
  },

  activeCategoryText: {
    color: "#FFF",
  },

  detailButton: {
    marginHorizontal: 24,
    marginTop: 18,
    backgroundColor: "#FF6B3D",
    paddingVertical: 16,
    borderRadius: 18,
    alignItems: "center",
  },

  detailButtonText: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 15,
  },

  listContent: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 40,
  },

  emptyText: {
    textAlign: "center",
    color: "#777",
    marginTop: 40,
    fontSize: 15,
  },
});