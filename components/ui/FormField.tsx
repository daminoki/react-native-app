import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";

import { icons } from "@/constants";

interface FormFieldProps {
  title: string;
  value: string;
  handleChangeText: (e: string) => void;
  otherStyles?: string;
  keyboardType?: string;
  placeholder?: string;
}

const KEYBOARD_TYPES = {
  EMAIL: "email-address",
  PASSWORD: "password",
};

const FormField = ({
  title,
  value,
  handleChangeText,
  otherStyles,
  keyboardType,
  placeholder,
}: FormFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>

      <View className="w-full h-16 px-4 bg-black-100 border-2 border-black-200 rounded-2xl focus:border-secondary items-center flex-row">
        <TextInput
          value={value}
          onChangeText={(e) => handleChangeText(e)}
          className="flex-1 text-white font-psemibold text-base"
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          secureTextEntry={
            keyboardType === KEYBOARD_TYPES.PASSWORD && !showPassword
          }
        />

        {keyboardType === KEYBOARD_TYPES.PASSWORD && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
