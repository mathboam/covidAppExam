import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet,ImageBackground,SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { MonoText } from '../components/StyledText';
import {Ionicons} from "@expo/vector-icons";
import {RFValue} from "react-native-responsive-fontsize";

export default function HomeScreen() {
  return (
      <React.Fragment>
        <SafeAreaView>
          <View style={{padding:15,borderBottomColor:'#dcdcdc',borderBottomWidth:RFValue(1)}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <Ionicons name={"ios-contact"} size={RFValue(40)}/>
              <Ionicons name={"ios-notifications-outline"} size={RFValue(40)}/>
            </View>
            <View style={{marginTop:5}}>
              <Text style={{fontSize:RFValue(25),fontWeight:'bold'}}>Home</Text>
            </View>
          </View>

          <ScrollView style={{padding:15}}>
           <ImageBackground
               source={{uri: '../assets/images/cv.jpeg'}} style={{
             flex: 1,
             resizeMode: "cover",
             justifyContent: "flex-end"}}>
             <Text>641</Text>
             <Text>confirmed cases</Text>
           </ImageBackground>

          </ScrollView>
        </SafeAreaView>
      </React.Fragment>

  );
}



