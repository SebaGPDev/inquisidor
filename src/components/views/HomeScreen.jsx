import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/reducers/authSlice";

const HomeScreen = ({}) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Limpia el ticket y redirige a la pantalla de inicio de sesión
    dispatch(logout());
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>
      <Text>HomeScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoutButton: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  logoutButtonText: {
    color: "red",
    fontSize: 16,
  },
});

export default HomeScreen;
