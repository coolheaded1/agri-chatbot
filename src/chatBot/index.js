import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
} from "react-native";
import Msg from "./msg";
import { data } from "./data";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";

let chats = [];
let type = false;
export default function ChatBot() {
    //  const [chatList, setChatList] = useState([]);
    const [chatList, setChatList] = useState([]);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [msg, setMsg] = useState("");

    //  useEffect(() => {
    //      let isMounted = true;
    //      if (isMounted) {
    //          chats = [
    //              ...chats,
    //              {
    //                  msg: `Hello, I'm Agri-Bot. I am here to answer every of your questions regarding poultry farm, ask your question.`,
    //                  incomingMsg: true,
    //              },
    //          ];
    //          setChatList([...chats].reverse());
    //      }

    //      return () => {
    //          isMounted = false;
    //      };
    //  }, []);

    //  const sendMsg = () => {
    //      type = true;

    //      chats = [...chats, { msg: msg, sentMsg: true }];
    //      setChatList([...chats].reverse());
    //      setTimeout(() => {
    //          getAnswer(msg);
    //          type = false;

    //          // console.log(type, "typed");
    //      }, 1500);
    //      setMsg("");
    //      // console.log(type, "typing");
    //  };

    //  const getAnswer = async (query, len) => {
    //      for (let i = 0; i < data.length; i++) {
    //          if (data[i].question.includes(query.toLowerCase())) {
    //              chats = [...chats, { msg: data[i].answer, incomingMsg: true }];
    //              setChatList([...chats].reverse());
    //              return;
    //          }
    //      }

    //      chats = [
    //          ...chats,
    //          { msg: "I do not recognize your question", incomingMsg: true },
    //      ];
    //      setChatList([...chats].reverse());
    //      return;
    //  };

    const makeRequest = async () => {
        setIsLoading(true);
        try {
            let { data } = await axios.post(
                "https://api.openai.com/v1/completions",
                {
                    model: "text-davinci-002",
                    prompt: msg,
                    temperature: 0,
                    max_tokens: 1000,
                },
                {
                    headers: {
                        Authorization:
                            "Bearer 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",
                    },
                }
            );
            setChatList(data.choices);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.log(error);
        }
    };

    const renderItem = ({ item }) => {
        return (
            <View style={styles.answer__box}>
                <Text style={styles.answer__txt}>{item.text}</Text>
            </View>
        );
    };
    return (
        <View style={styles.container}>
            <StatusBar style="dark" backgroundColor="#f1f5f9" />
            <Text
                style={{
                    fontSize: 20,
                    fontFamily: "Calcutta-Bold",
                    textAlign: "center",
                    marginBottom: 20,
                    letterSpacing: 2,
                }}
            >
                Query
            </Text>
            <View style={styles.row__}>
                <TextInput
                    style={styles.input}
                    value={msg}
                    onChangeText={(text) => setMsg(text)}
                    returnKeyLabel="next"
                    returnKeyType="go"
                    placeholder="Type a message"
                />
                {msg === "" ? (
                    <TouchableOpacity
                        style={[
                            styles.send_btn,
                            { backgroundColor: "#dbeafe" },
                        ]}
                        disabled={true}
                    >
                        {/* <Ionicons name="send" size={24} color="white" /> */}
                        <Text style={styles.send_btn__txt}>Send</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        style={styles.send_btn}
                        onPress={makeRequest}
                        activeOpacity={0.5}
                    >
                        {/* <Ionicons name="send" size={24} color="white" /> */}
                        <Text style={styles.send_btn__txt}>Send</Text>
                    </TouchableOpacity>
                )}
            </View>

            {isLoading ? (
                <ActivityIndicator color={"blue"} size={"large"} />
            ) : (
                <FlatList
                    style={{
                        paddingHorizontal: 10,
                        marginBottom: 30,
                        flex: 1,
                    }}
                    data={chatList}
                    //  inverted={true}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    //  renderItem={({ item }) => (
                    //      <Msg
                    //          incomingMsg={item.incomingMsg}
                    //          sentMsg={item.sentMsg}
                    //          msg={item.msg}
                    //          typing={type}
                    //      />
                    //  )}
                    renderItem={renderItem}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: "white",
    },
    input: {
        padding: 10,
        paddingLeft: 15,
        borderRadius: 50,
        flex: 1,
        backgroundColor: "#f9fafb",
        // borderTopRightRadius: 0,
        // borderBottomRightRadius: 0,
        fontFamily: "Calcutta-Regular",
        fontSize: 15,
    },
    send_btn: {
        // width: "20%",
        padding: 5,
        paddingHorizontal: 7,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0c4a6e",
    },
    send_btn__txt: {
        fontSize: 16,
        color: "white",
        fontFamily: "Calcutta-Bold",
        textTransform: "uppercase",
        letterSpacing: 2,
    },
    send_txt: {
        fontSize: 16,
        color: "white",
    },
    row__: {
        flexDirection: "row",
        marginBottom: 50,
        paddingHorizontal: 10,
        //   borderWidth: 3,
        paddingVertical: 20,
        backgroundColor: "#f9fafb",
    },
    answer__box: {
        backgroundColor: "#f9fafb",
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    answer__txt: {
        fontFamily: "Calcutta-Regular",
        fontSize: 16,
        letterSpacing: 1,
        lineHeight: 20,
    },
});
