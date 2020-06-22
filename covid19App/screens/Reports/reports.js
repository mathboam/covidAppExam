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
      <View style={{ marginTop: RFValue(70), justifyContent: 'center', alignItems: 'center' }}>
        <View>
          <Ionicons name={'ios-document'} color={'#dbdbdb'} size={RFValue(120)} />
          <View
            style={{
              backgroundColor: '#bdbdbd',
              width: 50,
              height: 50,
              borderRadius: 50,
              position: 'absolute',
              right: 30,
              top: -10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ fontSize: RFValue(50), fontWeight: '500' }}>?</Text>
          </View>
        </View>
        <View style={{ marginTop: 40 }}>
          <Text>You have not made any case reports</Text>
          <TouchableOpacity
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
            <Text>Make Case Report</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
