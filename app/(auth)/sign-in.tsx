import React, { useState } from "react";
import { SafeAreaView, View, Image, Text } from "react-native";
import { images } from "@/constants";
import FormField from "@/components/ui/FormField";
import CustomButton from "@/components/ui/CustomButton";
import { Link } from "expo-router";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isSumbitting, setIsSubmitting] = useState(false);

  const handleSignIn = () => {};

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#161622" }}>
      <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ flex: 1, paddingHorizontal: 16, paddingVertical: 24 }}>
          <Image
            source={images.logo}
            resizeMode="contain"
            style={{ width: 115, height: 35 }}
          />

          <Text
            style={{
              fontSize: 24,
              color: "#fff",
              fontWeight: "600",
              marginTop: 40,
            }}
          >
            Log in to Aora
          </Text>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e: string) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
            placeholder="Email"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e: string) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
            keyboardType="password"
            placeholder="Password"
          />

          <CustomButton
            title="Sign in"
            handlePress={handleSignIn}
            containerStyles="mt-7"
            isLoading={isSumbitting}
          />

          <View
            style={{
              justifyContent: "center",
              paddingTop: 20,
              flexDirection: "row",
            }}
          >
            <Text style={{ fontSize: 16, color: "#ccc" }}>
              Don’t have an account?
            </Text>
            <Link
              href="/sign-up"
              style={{ fontSize: 16, color: "#fff", marginLeft: 5 }}
            >
              Signup
            </Link>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
