import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { ScrollView } from "react-native";
import CustomListItem from "../components/CustomListItem";
import { Avatar } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "User Full Name",
      headerStyle: { backgroundColor: "#fff" },
      headerTitleStyle: { color: "black" },
      headerTintColor: "black",
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity>
            <Avatar
              rounded
              source={{
                uri: "https://media.licdn.com/dms/image/D4D03AQHKb2K-mtuB2Q/profile-displayphoto-shrink_800_800/0/1676830351906?e=2147483647&v=beta&t=Lej13c0ONq0x9q4d1q5fjExPlrs__7PLcZKUolhmu9U",
              }}
            />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 80,
            marginRight: 20,
          }}
        >
          <TouchableOpacity activeOpacity={0.5}>
            <AntDesign name="camerao" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("AddChat")}
            activeOpacity={0.5}
          >
            <SimpleLineIcons name="pencil" size={24} color="black" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  const handleChat = () => {
    navigation.navigate("Chat");
  };

  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <ScrollView>
        <TouchableOpacity onPress={handleChat}>
          <CustomListItem />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleChat}>
          <CustomListItem />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleChat}>
          <CustomListItem />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleChat}>
          <CustomListItem />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleChat}>
          <CustomListItem />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleChat}>
          <CustomListItem />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleChat}>
          <CustomListItem />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
