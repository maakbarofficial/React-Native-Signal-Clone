import { StyleSheet, View, KeyboardAvoidingView } from "react-native";
import React, { useState, useEffect } from "react";
import { Button, Input, Image } from "react-native-elements";
import { StatusBar } from "expo-status-bar";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    navigation.navigate("Home");
  };

  const register = () => {
    navigation.navigate("Register");
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={{
          uri: "https://seeklogo.com/images/S/signal-logo-20A1616F60-seeklogo.com.png",
        }}
        style={{ width: 150, height: 150, marginBottom: 30 }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          type="email"
          autoFocus
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          autoFocus
          value={password}
          onChangeText={(text) => setPassword(text)}
          onSubmitEditing={signIn}
        />
        <Button containerStyle={styles.button} title="Login" onPress={signIn} />
        <Button
          containerStyle={styles.button}
          type="outline"
          title="Register"
          onPress={register}
        />
        <View style={{ height: 10 }} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  inputContainer: {
    width: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});
