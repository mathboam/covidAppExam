import React from 'react';

import { SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';
import NotificationModal from '../../components/modals/NotificationModal';
import UserModal from '../../components/modals/UserModal';
import ReportModal from '../../components/modals/ReportModal';

export default function Reports(props) {
  const [show, setShow] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const [toggleReport, setToggleReport] = React.useState(false);
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'space-between' }}>
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
          <Text style={{ fontSize: RFValue(25), fontWeight: 'bold' }}>Case Reports</Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: '#ffffff',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Image
            source={require('../../assets/images/20305-document-open.gif')}
            style={{ width: RFValue(150), height: RFValue(150) }}
          />
        </View>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text>You have not made any case reports</Text>
          <TouchableOpacity
            onPress={() => setToggleReport(true)}
            style={{
              height: 60,
              borderWidth: 1,
              borderColor: 'black',
              borderRadius: 5,
              marginTop: RFValue(20),
              borderStyle: 'dashed',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>Make Case Report</Text>
          </TouchableOpacity>
        </View>
        <NotificationModal show={show} close={setShow} />
        <UserModal show={visible} close={setVisible} />
        <ReportModal show={toggleReport} close={setToggleReport} />
      </View>
    </SafeAreaView>
  );
}
