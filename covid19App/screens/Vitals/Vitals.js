import React from 'react';

import { SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';
import NotificationModal from '../../components/modals/NotificationModal';
import UserModal from '../../components/modals/UserModal';
import VitalsModal from '../../components/modals/VitalsModal';
export default function Vitals(props) {
  const [show, setShow] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const [toggleVitals, setToggleVitals] = React.useState(false);
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'space-between' }}>
      <View
        style={{
          backgroundColor: '#ffffff',
          padding: 15,
          borderBottomColor: '#dcdcdc',
          borderBottomWidth: RFValue(1),
        }}>
        <View
          style={{
            backgroundColor: '#ffffff',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity onPress={() => setVisible(true)}>
            <Ionicons name={'ios-contact'} size={RFValue(40)} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setShow(true)}>
            <Ionicons name={'ios-notifications-outline'} size={RFValue(40)} />
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 5 }}>
          <Text style={{ fontSize: RFValue(25), fontWeight: 'bold' }}>Vitals</Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: 'space-between',
          flex: 1,
          backgroundColor: '#ffffff',
          alignItems: 'center',
        }}>
        <View style={{ flex: 2 }}>
          <Image
            source={require('../../assets/images/24426-trusted-health-ekg.gif')}
            style={{ width: RFValue(170), height: RFValue(170) }}
          />
        </View>
        <View style={{ flex: 4 }}>
          <Text>You have not logged your vitals yet</Text>
          <TouchableOpacity
            onPress={() => setToggleVitals(true)}
            style={{
              height: 60,
              borderWidth: 1,
              borderColor: 'black',
              marginTop: 15,
              borderRadius: 5,
              borderStyle: 'dashed',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>Log Vitals</Text>
          </TouchableOpacity>
        </View>
        <NotificationModal show={show} close={setShow} />
        <UserModal show={visible} close={setVisible} />
        <VitalsModal show={toggleVitals} close={setToggleVitals} />
      </View>
    </SafeAreaView>
  );
}
