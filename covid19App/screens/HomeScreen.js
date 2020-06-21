import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet,ImageBackground,SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { MonoText } from '../components/StyledText';
import {Ionicons} from "@expo/vector-icons";
import {RFValue} from "react-native-responsive-fontsize";

export default function HomeScreen() {
    const image = require('../assets/images/cv.jpeg');

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

          <ScrollView style={{padding:15,height:'40%',flexDirection:'row'}} horizontal={true} showsVerticalScrollIndicator={false}>
                   <ImageBackground
                       source={image}
                       style={{
                     resizeMode: "cover",
                           height:RFValue(210),
                           width:RFValue(300),
                     alignItems: "flex-end",
                           padding:15,
                           borderRadius:10,
                           zIndex:2,
                           // margin:10
                       }}
                       imageStyle={{borderRadius:10}}
                   >
                     <Text style={{color:'#fff'}}>641</Text>
                     <Text style={{color:'#fff'}}>confirmed cases</Text>
                   </ImageBackground>

              <ImageBackground
                  source={image}
                  style={{
                      resizeMode: "cover",
                      height:RFValue(210),
                      width:RFValue(300),
                      alignItems: "flex-end",
                      padding:15,
                      borderRadius:10,
                      zIndex:2,
                      marginLeft:10
                  }}
                  imageStyle={{borderRadius:10}}
              >
                  <Text style={{color:'#fff'}}>641</Text>
                  <Text style={{color:'#fff'}}>confirmed cases</Text>
              </ImageBackground>
              <ImageBackground
                  source={image}
                  style={{
                      resizeMode: "cover",
                      height:RFValue(210),
                      width:RFValue(300),
                      alignItems: "flex-end",
                      padding:15,
                      borderRadius:10,
                      zIndex:2,
                      marginLeft:10
                  }}
                  imageStyle={{borderRadius:10}}
              >
                  <Text style={{color:'#fff'}}>641</Text>
                  <Text style={{color:'#fff'}}>confirmed cases</Text>
              </ImageBackground>



          </ScrollView>
        </SafeAreaView>
      </React.Fragment>

  );
}



