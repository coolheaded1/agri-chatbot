import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Msg({ incomingMsg, sentMsg, msg, typing }) {
    useEffect(() => {
        // console.log(typing);
    }, []);

    return (
        <View style={styles.container}>
            {/* incoming message */}
            {incomingMsg && (
                <View style={styles.incoming_row}>
                    <View style={styles.bot_icon}>
                        <Text style={styles.bot_txt}>🤖</Text>
                    </View>
                    <View style={styles.incoming_msg_box}>
                        <Text style={styles.incoming_msg}>{msg}</Text>
                    </View>
                </View>
            )}

            {/* sent message */}
            {sentMsg && (
                <View style={[styles.incoming_row, { alignSelf: "flex-end" }]}>
                    <View style={styles.sent_msg_box}>
                        <Text style={styles.sent_msg}>{msg}</Text>
                    </View>
                    <View style={[styles.bot_icon, { marginLeft: 10 }]}>
                        <Text style={styles.bot_txt}>👨‍🎓</Text>
                    </View>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
    incoming_msg_box: {
        backgroundColor: "#f3f4f6",
        padding: 10,
        borderRadius: 10,
        borderTopLeftRadius: 0,
        maxWidth: "70%",
        alignSelf: "flex-start",
        marginVertical: 0,
    },
    incoming_msg: {
        fontSize: 16,
        color: "black",
        fontFamily: "Calcutta-Light",
        // letterSpacing: 1,
        lineHeight: 20,
    },
    sent_msg_box: {
        backgroundColor: "#4173FF",
        padding: 10,
        borderRadius: 10,
        borderBottomRightRadius: 0,
        maxWidth: "70%",
        alignSelf: "flex-end",
        marginVertical: 0,
    },
    sent_msg: {
        fontSize: 16,
        color: "white",
        fontFamily: "Calcutta-Light",
        lineHeight: 20,
    },
    incoming_row: {
        flexDirection: "row",
    },
    bot_icon: {
        marginRight: 10,
        justifyContent: "center",
    },
    bot_txt: {
        fontSize: 15,
        padding: 5,
        paddingHorizontal: 6,
        borderRadius: 100,
        textAlign: "center",
        backgroundColor: "#f3f4f6",
    },
});
