import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  const image = require('../assets/images/cv.jpeg');

  return (
    <React.Fragment>
      <SafeAreaView>
        <View style={{ padding: 15, borderBottomColor: '#dcdcdc', borderBottomWidth: RFValue(1) }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Ionicons name={'ios-contact'} size={RFValue(40)} />
            <Ionicons name={'ios-notifications-outline'} size={RFValue(40)} />
          </View>
          <View style={{ marginTop: 5 }}>
            <Text style={{ fontSize: RFValue(25), fontWeight: 'bold' }}>Home</Text>
          </View>
        </View>

        <ScrollView style={{ padding: 15 }}>
          <ScrollView
            style={{ height: '45%', flexDirection: 'row' }}
            horizontal={true}
            showsHorizontalscrollIndicator={false}>
            <ImageBackground
              source={image}
              style={{
                resizeMode: 'cover',
                height: RFValue(210),
                width: RFValue(300),
                alignItems: 'flex-end',
                padding: 15,
                borderRadius: 10,
                zIndex: 2,
                // margin:10
              }}
              imageStyle={{ borderRadius: 10 }}>
              <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: RFValue(25) }}>641</Text>
              <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: RFValue(18) }}>
                confirmed cases
              </Text>
            </ImageBackground>

            <ImageBackground
              source={image}
              style={{
                resizeMode: 'cover',
                height: RFValue(210),
                width: RFValue(300),
                alignItems: 'flex-end',
                padding: 15,
                borderRadius: 10,
                zIndex: 2,
                marginLeft: 15,
              }}
              imageStyle={{ borderRadius: 10 }}>
              <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: RFValue(25) }}>641</Text>
              <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: RFValue(18) }}>
                confirmed cases
              </Text>
            </ImageBackground>

            <ImageBackground
              source={image}
              style={{
                resizeMode: 'cover',
                height: RFValue(210),
                width: RFValue(300),
                alignItems: 'flex-end',
                padding: 15,
                borderRadius: 10,
                zIndex: 2,
                marginLeft: 15,
              }}
              imageStyle={{ borderRadius: 10 }}>
              <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: RFValue(25) }}>641</Text>
              <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: RFValue(18) }}>
                confirmed cases
              </Text>
            </ImageBackground>

            <ImageBackground
              source={image}
              style={{
                resizeMode: 'cover',
                height: RFValue(210),
                width: RFValue(300),
                alignItems: 'flex-end',
                padding: 15,
                borderRadius: 10,
                zIndex: 2,
                marginLeft: 15,
              }}
              imageStyle={{ borderRadius: 10 }}>
              <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: RFValue(25) }}>641</Text>
              <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: RFValue(18) }}>
                confirmed cases
              </Text>
            </ImageBackground>
          </ScrollView>
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontSize: RFValue(19), letterSpacing: 0, fontWeight: 'bold' }}>
              Ghana's Situation Update
            </Text>
            <Text style={{ fontSize: RFValue(15), letterSpacing: 0 }}>Last Updated: 4/16/2020</Text>
            <View style={{ marginTop: 20, alignItems: 'flex-end', flex: 1 }}>
              <View style={{ borderBottomWidth: 1, borderBottomColor: '#cecece' }}>
                <Text
                  style={{
                    fontSize: RFValue(19),
                    fontWeight: 'bold',
                    paddingBottom: 15,
                  }}>
                  Confirmed Covid-19 Cases In Ghana As At 25 March 2020, 09:00 Hr
                </Text>
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <Text style={{ marginTop: 15, fontSize: RFValue(15) }}>
                  As at the morning of 25 March 2020, a total of sixty-eight(68) cases including two
                  deaths have been confirmed.Sixty-six(66) of these confirmed cases are being
                  managed in isolation. The sudden spike in case incidence is as a result of the
                  mandatory quarantine and compulsory testing for all travellers
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </React.Fragment>
  );
}
