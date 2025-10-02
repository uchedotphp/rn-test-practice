import { FlatList } from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/uche.jpeg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/uche.jpeg"),
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
    image: require("../assets/uche.jpeg"),
  },
];

export default function MessagesScreen() {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message pressed:", item.title)}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeparator />}
      />
    </Screen>
  );
}


