import React from "react";
import SmallListItem from "./SmallListItem";
import colors from "../config/colors";

export default function MyListings() {
  return (
    <SmallListItem
      title="My Listings"
      icon="format-list-bulleted"
      iconBackground={colors.primary}
    />
  );
}
