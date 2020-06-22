import * as React from 'react';
import { View, Text, Modal, TouchableOpacity, Alert } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';
import CountryPicker from 'react-native-country-picker-modal';
import MyTextInput from '../textInput';
import MyButton from '../button';

export default function UserModal(props) {
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
          '',
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
        <View
          style={{
            justifyContent: 'center',
          }}>
          <Text style={{ fontWeight: 'bold', fontSize: RFValue(35) }}>Profile</Text>
          <TouchableOpacity
            style={{ position: 'absolute', right: 0 }}
            onPress={() => props.close(!props.show)}>
            <Ionicons name={'ios-close'} size={RFValue(45)}></Ionicons>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: RFValue(25) }}>
          <Text style={{ fontWeight: 'bold', fontSize: RFValue(20) }}>Personal Details</Text>
        </View>
        <View style={{ marginTop: RFValue(15) }}>
          <Text style={{ fontWeight: '400', fontSize: RFValue(16) }}>Enter Age</Text>
          <MyTextInput
            style={{
              height: RFValue(50),
              textAlign: 'left',
              borderWidth: 1,
              borderColor: '#c9c9c9',
              padding: 10,
              zIndex: 2,
              marginTop: RFValue(10),
            }}
            placeholder={'31'}
          />
          <View>
            <View style={{ marginTop: RFValue(10), flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity
                onPress={() => setMale(false)}
                style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Ionicons
                  name={male ? 'ios-checkmark-circle-outline' : 'ios-checkmark-circle'}
                  size={RFValue(30)}
                />
                <Text style={{ marginLeft: RFValue(8) }}>Female</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setMale(true)}
                style={{ marginLeft: RFValue(15), flexDirection: 'row', alignItems: 'center' }}>
                <Ionicons
                  name={male ? 'ios-checkmark-circle' : 'ios-checkmark-circle-outline'}
                  size={RFValue(30)}
                />
                <Text style={{ marginLeft: RFValue(8) }}>Male</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ marginTop: RFValue(20) }}>
            <Text style={{ fontWeight: 'bold', fontSize: RFValue(17) }}>Travel History</Text>
            <Text style={{ fontWeight: '300', fontSize: RFValue(12) }}>
              Select the last two countries you visited(if Applicable)
            </Text>
            <View
              style={{
                marginTop: RFValue(20),
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderColor: '#000',
                  height: RFValue(110),
                  width: '45%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 5,
                }}>
                <CountryPicker
                  {...{
                    countryCode,
                    withFlag,
                  }}
                  visible={visible}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderColor: '#000',
                  height: RFValue(110),
                  width: '45%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 5,
                }}>
                <CountryPicker
                  {...{
                    countryCode,
                    withFlag,
                  }}
                  visible={visible}
                />
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: RFValue(20) }}>
              <Text style={{ fontWeight: 'bold', fontSize: RFValue(17) }}>
                Medical Professional Information
              </Text>
              <Text style={{ fontWeight: '300', fontSize: RFValue(12) }}>
                Applicable if you are a health worker
              </Text>

              <Text style={{ marginTop: RFValue(10), fontWeight: '400', fontSize: RFValue(16) }}>
                Health License Number
              </Text>
              <MyTextInput
                style={{
                  height: RFValue(50),
                  textAlign: 'left',
                  borderWidth: 1,
                  borderColor: '#c9c9c9',
                  padding: 10,
                  zIndex: 2,
                  marginTop: RFValue(10),
                }}
              />
              <MyButton
                style={{
                  backgroundColor: '#000',
                  height: RFValue(50),
                  zIndex: 2,
                  width: '100%',
                  justifyContent: 'center',
                  marginTop: RFValue(10),
                  alignItems: 'center',
                }}
                text={'Update Profile'}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}
