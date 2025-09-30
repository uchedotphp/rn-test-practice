import { StyleSheet } from "react-native";
import colors from "../../config/colors";

export default StyleSheet.create({
  // Base styles
  base: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "transparent",
    height: "100%",
    fontWeight: "bold",
    // width: "100%",
  },
  text: {
    textAlign: "center",
    fontWeight: "600",
  },

  // Variants
  primary: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  primaryText: {
    color: "#FFFFFF",
  },

  secondary: {
    backgroundColor: colors.secondary,
    borderColor: colors.secondary,
  },
  secondaryText: {
    // color: "#007AFF",
    color: colors.white,
  },

  // success: {
  //   backgroundColor: "#34C759",
  //   borderColor: "#34C759",
  // },
  // successText: {
  //   color: "#FFFFFF",
  // },

  // danger: {
  //   backgroundColor: "#FF3B30",
  //   borderColor: "#FF3B30",
  // },
  // dangerText: {
  //   color: "#FFFFFF",
  // },

  // warning: {
  //   backgroundColor: "#FF9500",
  //   borderColor: "#FF9500",
  // },
  // warningText: {
  //   color: "#FFFFFF",
  // },

  outline: {
    backgroundColor: "transparent",
    borderColor: colors.darkGray,
  },
  outlineText: {
    color: "#8E8E93",
  },

  ghost: {
    backgroundColor: "transparent",
    borderColor: "transparent",
  },
  ghostText: {
    color: colors.primary,
  },

  // Sizes
  small: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    minHeight: 32,
  },
  smallText: {
    fontSize: 14,
  },

  medium: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    minHeight: 44,
  },
  mediumText: {
    fontSize: 16,
  },

  large: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    minHeight: 52,
  },
  largeText: {
    fontSize: 18,
  },

  // Special styles
  fullWidth: {
    width: "100%",
  },

  disabled: {
    backgroundColor: "#F2F2F7",
    borderColor: "#F2F2F7",
    opacity: 0.6,
  },
  disabledText: {
    color: "#8E8E93",
  },

  // Rounded variants
  rounded: {
    borderRadius: 20,
  },
  pill: {
    borderRadius: 999,
  },
});
