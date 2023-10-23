import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as NavigationBar from "expo-navigation-bar";

export default function HomeScreen() {
   const navigation = useNavigation();
   NavigationBar.setBackgroundColorAsync("#4173FF");

   return (
      <View style={styles.container}>
         <StatusBar style="light" backgroundColor="#4173FF" />

         <View style={styles.row}>
            <Text style={styles.bot_logo}>🤖</Text>
            <Text style={styles.heading}>Hi {"\n"} I'm Agri-Bot</Text>
            <Text style={styles.description}>
               {" "}
               {"\u00A9"} Obuoro Grace Oshiogwemeh
            </Text>
            {/* <TouchableOpacity style={styles.btn} activeOpacity={1}>
               <Text style={styles.btn_txt}>Capon </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} activeOpacity={1}>
               <Text style={styles.btn_txt}>Candling </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} activeOpacity={1}>
               <Text style={styles.btn_txt}>Chicken harvester</Text>
            </TouchableOpacity> */}
         </View>
         <View style={styles.chat_box}>
            <TouchableOpacity
               style={styles.chat_btn}
               activeOpacity={1}
               onPress={() => navigation.navigate("ChatBot")}
            >
               <MaterialIcons name="message" size={24} color="white" />
            </TouchableOpacity>
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#4173FF",
   },
   row: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
   },
   btn: {
      padding: 15,
      paddingHorizontal: 30,
      maxWidth: "70%",
      alignItems: "center",
      marginBottom: 20,
      backgroundColor: "#fff",
      borderRadius: 10,
   },
   btn_txt: {
      fontFamily: "Calcutta-Regular",
      fontSize: 16,
   },
   bot_logo: {
      fontSize: 100,
   },
   heading: {
      fontSize: 30,
      textAlign: "center",
      fontFamily: "Calcutta-Bold",
      letterSpacing: 2,
      lineHeight: 50,
      color: "white",
   },
   description: {
      fontFamily: "Calcutta-Regular",
      fontSize: 15,
      marginVertical: 30,
      color: "white",
   },
   chat_box: {
      position: "absolute",
      bottom: 30,
      right: 20,
   },
   chat_btn: {
      padding: 15,
      borderRadius: 50,
      backgroundColor: "#000",
      elevation: 100,
      borderTopRightRadius: 0,
   },
});
