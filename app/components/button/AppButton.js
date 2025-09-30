import { TouchableOpacity, Text } from "react-native";
import React from "react";
import ButtonStyle from "./Style";

export default function Button({ 
  children, 
  onPress, 
  style, 
  textStyle,
  variant = "primary",
  size = "medium",
  disabled = false,
  fullWidth = false,
  ...props 
}) {
  const handlePress = () => {
    if (!disabled && onPress) {
      onPress();
    }
  };

  const buttonStyles = [
    ButtonStyle.base,
    ButtonStyle[variant],
    ButtonStyle[size],
    ButtonStyle.pill,
    fullWidth && ButtonStyle.fullWidth,
    disabled && ButtonStyle.disabled,
    style
  ];

  const textStyles = [
    ButtonStyle.text,
    ButtonStyle[`${variant}Text`],
    ButtonStyle[`${size}Text`],
    disabled && ButtonStyle.disabledText,
    textStyle
  ];

  return (
    <TouchableOpacity 
      onPress={handlePress} 
      style={buttonStyles}
      disabled={disabled}
      activeOpacity={disabled ? 1 : 0.7}
      {...props}
    >
      <Text style={textStyles}>{children}</Text>
    </TouchableOpacity>
  );
}
