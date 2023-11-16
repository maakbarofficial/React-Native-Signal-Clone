import React, { useLayoutEffect, useState } from "react";
import { Avatar } from "react-native-elements";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
  ScrollView,
  Keyboard,
  StyleSheet,
  Text,
  View,
} from "react-native";

const ChatScreen = ({ navigation }) => {
  const [input, setInput] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Chat",
      headerBackTitleVisible: false,
      headerTileAlign: "center",
      headerTitle: () => (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Avatar
            rounded
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/9131/9131529.png",
            }}
          />
          <Text style={{ color: "white", marginLeft: 10, fontWeight: "700" }}>
            This is Chat Title
          </Text>
        </View>
      ),
      headerLeft: () => (
        <TouchableOpacity
          style={{ marginLeft: 10 }}
          onPress={navigation.goBack}
        >
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
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
          <TouchableOpacity>
            <FontAwesome name="video-camera" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="call" size={24} color="white" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  const handleChat = () => {
    navigation.navigate("Chat");
  };

  const sendMessage = () => {
    Keyboard.dismiss();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar style="ligt" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        keyboardVerticalOffset={90}
      >
        {/* <TouchableWithoutFeedback onPress={sendMessage} /> */}
        <>
          <ScrollView>
            <View style={styles.reciever}>
              <Avatar
                position="absolute"
                bottom={-15}
                right={-5}
                rounded
                size={30}
                source={{
                  uri: "https://media.licdn.com/dms/image/D4D03AQHKb2K-mtuB2Q/profile-displayphoto-shrink_800_800/0/1676830351906?e=2147483647&v=beta&t=Lej13c0ONq0x9q4d1q5fjExPlrs__7PLcZKUolhmu9U",
                }}
              />
              <Text style={styles.recieverText}>
                Assalamualikum PM Imran Khan
              </Text>
            </View>
            <View style={styles.sender}>
              <Avatar
                position="absolute"
                bottom={-15}
                left={-5}
                rounded
                size={30}
                source={{
                  uri: "https://www.samaa.tv/images/imran-khan-1.jpg",
                }}
              />
              <Text style={styles.senderText}>
                W Salam How are you my Tiger...?
              </Text>
            </View>
            <View style={styles.reciever}>
              <Avatar
                position="absolute"
                bottom={-15}
                right={-5}
                rounded
                size={30}
                source={{
                  uri: "https://media.licdn.com/dms/image/D4D03AQHKb2K-mtuB2Q/profile-displayphoto-shrink_800_800/0/1676830351906?e=2147483647&v=beta&t=Lej13c0ONq0x9q4d1q5fjExPlrs__7PLcZKUolhmu9U",
                }}
              />
              <Text style={styles.recieverText}>
                Fine, Any message for me my Leader?
              </Text>
            </View>
            <View style={styles.sender}>
              <Avatar
                position="absolute"
                bottom={-15}
                left={-5}
                rounded
                size={30}
                source={{
                  uri: "https://www.samaa.tv/images/imran-khan-1.jpg",
                }}
              />
              <Text style={styles.senderText}>
                Remember You Only Lose When You Giveup....! Get Up and Fight
                Like a Cornered Tiger
              </Text>
            </View>
          </ScrollView>
          <View style={styles.footer}>
            <TextInput
              style={styles.textInput}
              value={input}
              onChangeText={(text) => setInput(text)}
              placeholder="Signal Message"
            />
            <TouchableOpacity activeOpacity={0.5} onPress={sendMessage}>
              <Ionicons name="send" size={24} color="#2B68E6" />
            </TouchableOpacity>
          </View>
        </>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  reciever: {
    padding: 15,
    backgroundColor: "#ECECEC",
    alignSelf: "flex-end",
    borderRadius: 20,
    marginRight: 15,
    marginBottom: 20,
    maxWidth: "80%",
    position: "relative",
  },
  sender: {
    padding: 15,
    backgroundColor: "#2B68E6",
    alignSelf: "flex-start",
    borderRadius: 20,
    margin: 15,
    maxWidth: "80%",
    position: "relative",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 15,
  },
  textInput: {
    bottom: 0,
    height: 40,
    flex: 1,
    marginRight: 15,
    borderColor: "transparent",
    backgroundColor: "#ECECEC",
    borderWidth: 1,
    padding: 10,
    color: "gray",
    borderRadius: 30,
  },
  senderText: {
    color: "white",
  },
});
