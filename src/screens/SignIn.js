import React, { useContext, useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { signUp, signIn } from "../../firebase";
import Context from "../context/Context";

const SignIn = () => {
  const {
    theme: { colors },
  } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState("signUp");

  async function handlePress() {
    if (mode === "signUp") {
      await signUp(email, password);
    }
    if (mode === "signIn") {
      await signIn(email, password);
    }
  }

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: colors.white,
      }}
    >
      <Text
        style={{
          color: colors.foreground,
          fontSize: 24,
          marginBottom: 20,
        }}
      >
        Wellcome to Whatsapp
      </Text>
      <Image
        source={require("../../assets/welcome-img.png")}
        style={{ width: 180, height: 180 }}
        resizeMode="cover"
      />
      <View style={{ marginTop: 20 }}>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="email"
          style={{
            padding: 2,
            borderBottomColor: colors.primary,
            borderBottomWidth: 2,
            width: 200,
          }}
        />

        <TextInput
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
          placeholder="password"
          style={{
            padding: 2,
            marginTop: 20,
            borderBottomColor: colors.primary,
            borderBottomWidth: 2,
            width: 200,
          }}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <Button
          title={mode === "signUp" ? "Sign Up" : "Sign In"}
          color={colors.secondary}
          onPress={handlePress}
          disabled={!email || !password}
        />
      </View>
      <TouchableOpacity
        style={{ marginTop: 15 }}
        onPress={() =>
          mode === "signUp" ? setMode("signIn") : setMode("signUp")
        }
      >
        <Text style={{ color: colors.secondaryText }}>
          {mode === "signUp"
            ? "Already have an account? Sign in"
            : "Don't have an account? Sign Up"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
