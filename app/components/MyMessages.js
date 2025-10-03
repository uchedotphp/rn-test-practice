import React from "react";
import SmallListItem from "./SmallListItem";
import colors from "../config/colors";

export default function MyMessages() {
  return (
    <SmallListItem
      title="My Messages"
      icon="email"
      iconBackground={colors.secondary}
    />
  );
}
