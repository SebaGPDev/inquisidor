import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Pressable,
  Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { loginAsync } from "../../redux/reducers/authSlice"; // Importa el thunk de autenticación

const LoginScreen = () => {
  const dispatch = useDispatch();
  const { ticket, loading, error } = useSelector((state) => state.auth);

  const [data, setData] = useState({
    userId: "",
    password: "",
  });

  const handleLogin = () => {
    dispatch(loginAsync(data)).then((action) => {
      if (loginAsync.fulfilled.match(action)) {
        Alert.alert("Éxito", `Ticket generado: ${action.payload}`);
      } else if (loginAsync.rejected.match(action)) {
        Alert.alert("Error", `No se pudo generar el ticket. ${action.payload}`);
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          value={data.userId}
          onChangeText={(text) => setData({ ...data, userId: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={data.password}
          onChangeText={(text) => setData({ ...data, password: text })}
          secureTextEntry
        />
        <Pressable style={styles.formButton} onPress={handleLogin}>
          <Text style={styles.textButton}>Iniciar sesión</Text>
        </Pressable>
        {loading && <Text>Cargando...</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  formContainer: {
    width: 300,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    padding: 8,
  },
  formButton: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  textButton: {
    color: "#fff",
    fontSize: 16,
  },
});

export default LoginScreen;
