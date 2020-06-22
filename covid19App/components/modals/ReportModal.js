import * as React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  ImageBackground,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';
import CountryPicker from 'react-native-country-picker-modal';
import MyTextInput from '../textInput';
import MyButton from '../button';

export default function ReportModal(props) {
  const [male, setMale] = React.useState(true);
  const [countryCode, setCountryCode] = React.useState('GH');
  const [countryName, setCountryName] = React.useState('Ghana');
  const [visible, setvisible] = React.useState(false);
  const [withFlag, setWithFlag] = React.useState(true);
  const alternate = (gender) => {};
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.show}
      onDismiss={() => {
        Alert.alert(
          'Success',
          'You updated your profile successfully',
          [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
          { cancelable: false }
        );
      }}>
      <View
        style={{
          padding: RFValue(25),
          backgroundColor: '#fff',
          marginTop: RFValue(20),
          flex: 1,
          borderRadius: RFValue(20),
          zIndex: 2,
        }}>
        <KeyboardAvoidingView behavior={'padding'}>
          <View
            style={{
              justifyContent: 'center',
            }}>
            <Text style={{ fontWeight: 'bold', fontSize: RFValue(35) }}>Make Report</Text>
            <TouchableOpacity
              style={{ position: 'absolute', right: 0 }}
              onPress={() => props.close(!props.show)}>
              <Ionicons name={'ios-close'} size={RFValue(45)}></Ionicons>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: RFValue(25) }}>
            <Text style={{ fontWeight: 'bold', fontSize: RFValue(17) }}>
              Who are you reporting?
            </Text>
          </View>
          <View style={{ marginTop: RFValue(10), flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity
              onPress={() => setMale(false)}
              style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons
                name={male ? 'ios-checkmark-circle-outline' : 'ios-checkmark-circle'}
                size={RFValue(30)}
              />
              <Text style={{ marginLeft: RFValue(8) }}>Self</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setMale(true)}
              style={{ marginLeft: RFValue(15), flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons
                name={male ? 'ios-checkmark-circle' : 'ios-checkmark-circle-outline'}
                size={RFValue(30)}
              />
              <Text style={{ marginLeft: RFValue(8) }}>Other Individual</Text>
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: RFValue(15) }}>
            <View>
              <Text style={{ fontWeight: 'bold', fontSize: RFValue(17) }}>
                Location or Digital Address
              </Text>
              <MyTextInput
                style={{
                  height: RFValue(50),
                  textAlign: 'left',
                  borderWidth: 1,
                  borderColor: '#c1c1c1',
                  padding: 10,
                  zIndex: 2,
                  marginTop: RFValue(10),
                }}
                placeholder={'eg: GA-492-74'}
                placeColor={'#dcdcdc'}
              />
            </View>
            <View
              style={{
                marginTop: RFValue(20),
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View>
                <Text style={{ fontWeight: 'bold', fontSize: RFValue(17) }}>Nearest Landmark</Text>
                <MyTextInput
                  style={{
                    height: RFValue(50),
                    textAlign: 'left',
                    borderWidth: 1,
                    borderColor: '#c1c1c1',
                    padding: 10,
                    zIndex: 2,
                    marginTop: RFValue(10),
                  }}
                  placeholder={'eg: Goil Fuel Station'}
                  placeColor={'#dcdcdc'}
                />
              </View>
              <View>
                <Text style={{ fontWeight: 'bold', fontSize: RFValue(17) }}>Alternate Contact</Text>
                <MyTextInput
                  style={{
                    height: RFValue(50),
                    textAlign: 'left',
                    borderWidth: 1,
                    borderColor: '#c1c1c1',
                    padding: 10,
                    zIndex: 2,
                    marginTop: RFValue(10),
                  }}
                  placeholder={'Contact Number'}
                  placeColor={'#dcdcdc'}
                />
              </View>
            </View>

            <View style={{ marginTop: RFValue(20) }}>
              <Text style={{ fontWeight: 'bold', fontSize: RFValue(17) }}>Description</Text>
              <MyTextInput
                style={{
                  height: RFValue(100),
                  textAlign: 'left',
                  borderWidth: 1,
                  borderColor: '#c9c9c9',
                  zIndex: 2,
                  marginTop: RFValue(10),
                }}
                placeholder={'Type Something'}
                placeColor={'#dcdcdc'}
              />
            </View>
          </View>
          <MyButton
            style={{
              backgroundColor: '#000',
              height: RFValue(50),
              zIndex: 10,
              width: '100%',
              justifyContent: 'center',
              marginTop: RFValue(10),
              alignItems: 'center',
            }}
            text={'Report Case'}
          />
        </KeyboardAvoidingView>
      </View>
      <View style={{ height: RFValue(60) }}></View>
    </Modal>
  );
}
