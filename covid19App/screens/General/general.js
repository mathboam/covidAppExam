import React, {useState} from 'react';
import {View, Text, SafeAreaView,ScrollView} from 'react-native';
import MyButton from '../../components/button';
import {RFValue} from 'react-native-responsive-fontsize';
// import { ScrollView } from 'react-native-gesture-handler';

export default function General(props) {
  const back = () => {
    props.navigation.pop();
  };

  const next = () => {
    props.navigation.navigate('dash');
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <SafeAreaView style={{flex:1}}>
        <View>
          <View
            style={{
              padding: 15,
              borderBottomWidth: 1.5,
              borderBottomColor: '#efefef',
            }}>
            <Text
              style={{
                fontSize: RFValue(27),
                fontWeight: 'bold',
              }}>
              General Information
            </Text>
          </View>

          <ScrollView style={{ padding: 15,height:"80%"}}>
            <View style={{marginTop: 5}}>
              <Text style={{fontWeight: 'bold'}}>Background</Text>
              <Text style={{marginTop: 1, fontSize: 11}}>
                Citizens are advised to provide accurate information this
                application to support the government and health services in
                managing and accurately containing the spread of the corona
                virus.
              </Text>
            </View>

            <View style={{marginTop: 15}}>
              <Text style={{fontWeight: 'bold'}}>
                Collection of your information
              </Text>
              <Text style={{marginTop: 1, fontSize: 11}}>
                We may collect information about you in a variety of ways. The
                information we may collect via this Application depends on the
                content and materials you use, and includes:
              </Text>
            </View>

            <View style={{marginTop: 15}}>
              <Text style={{fontWeight: 'bold'}}>Personal information</Text>
              <Text style={{marginTop: 1, fontSize: 11}}>
                Demographic and other personally identifiable information that
                you voluntarily give to us while using this application is
                anonymized and is only made available to the relevant
                authorities in cases of emergency.
              </Text>
            </View>

            <View style={{marginTop: 15}}>
              <Text style={{fontWeight: 'bold'}}>Geo-location information</Text>
              <Text style={{marginTop: 1, fontSize: 11}}>
                We may request access or permission to and track location-based
                information from your mobile device,either continuosly or while
                you are using the Application,to provide location-based
                services. If you wish to change our access or permission, you
                may do so in your device's settings.
              </Text>
            </View>

            <View style={{marginTop: 15}}>
              <Text style={{fontWeight: 'bold'}}>Mobile device access</Text>
              <Text style={{marginTop: 1, fontSize: 11}}>
                Citizens are advised to provide accurate information this
                application to support the government and health services in
                managing and accurately containing the spread of the corona
                virus.
              </Text>
            </View>

            <View style={{marginTop: 15}}>
              <Text style={{fontWeight: 'bold'}}>Geo-Location Information</Text>
              <Text style={{marginTop: 1, fontSize: 11}}>
                Citizens are advised to provide accurate information this
                application to support the government and health services in
                managing and accurately containing the spread of the corona
                virus.
              </Text>
            </View>

            <View style={{marginTop: 15}}>
              <Text style={{fontWeight: 'bold'}}>Push notifications</Text>
              <Text style={{marginTop: 1, fontSize: 11}}>
                Citizens are advised to provide accurate information this
                application to support the government and health services in
                managing and accurately containing the spread of the corona
                virus.
              </Text>
            </View>

            <View style={{marginTop: 15}}>
              <Text style={{fontWeight: 'bold'}}>Use of your information</Text>
              <Text style={{marginTop: 1, fontSize: 11}}>
                Citizens are advised to provide accurate information this
                application to support the government and health services in
                managing and accurately containing the spread of the corona
                virus.
              </Text>
            </View>
            <View style={{marginTop: 15}}>
              <Text style={{fontWeight: 'bold'}}>Geo-Location Information</Text>
              <Text style={{marginTop: 1, fontSize: 11}}>
                Citizens are advised to provide accurate information this
                application to support the government and health services in
                managing and accurately containing the spread of the corona
                virus.
              </Text>
            </View>

            <View style={{marginTop: 15}}>
              <Text style={{fontWeight: 'bold'}}>Geo-Location Information</Text>
              <Text style={{marginTop: 1, fontSize: 11}}>
                Citizens are advised to provide accurate information this
                application to support the government and health services in
                managing and accurately containing the spread of the corona
                virus.
              </Text>
            </View>
          </ScrollView>
          <View
            style={{
              paddingRight: 15,
              paddingLeft: 15,
            }}>
            <MyButton
              style={{
                backgroundColor: '#000',
                height: RFValue(45),
                zIndex: 2,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              text={"Let's get started...."}
              onPress={next}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
