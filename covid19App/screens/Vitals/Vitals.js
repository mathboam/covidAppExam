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
    <SafeAreaView>
      <View style={{ padding: 15, borderBottomColor: '#dcdcdc', borderBottomWidth: RFValue(1) }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
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
      <View style={{ marginTop: RFValue(70), justifyContent: 'center', alignItems: 'center' }}>
        <View>
          <Image source={require('../../assets/images/lifeline.gif')} />
        </View>
        <View style={{ marginTop: 40 }}>
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
