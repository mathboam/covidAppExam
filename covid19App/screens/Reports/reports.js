import React from 'react';

import { SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';

export default function Reports(props) {
  const [show, setShow] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
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
          <Text style={{ fontSize: RFValue(25), fontWeight: 'bold' }}>Case Reports</Text>
        </View>
      </View>
      <View></View>
    </SafeAreaView>
  );
}
