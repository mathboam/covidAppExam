import * as React from 'react';
import { View, Text, Modal, TouchableOpacity, ScrollView } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';

export default function NotificationModal(props) {
  return (
    <Modal animationType="slide" transparent={true} visible={props.show}>
      <View
        style={{
          padding: RFValue(25),
          backgroundColor: '#fff',
          marginTop: RFValue(60),
          flex: 1,
          borderRadius: RFValue(20),
          zIndex: 2,
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text style={{ fontWeight: 'bold', fontSize: RFValue(35) }}>Notifications</Text>
          <TouchableOpacity
            style={{ position: 'absolute', right: 0 }}
            onPress={() => props.close(!props.show)}>
            <Ionicons name={'ios-close'} size={RFValue(45)}></Ionicons>
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={{}}>
          <View
            style={{
              flexDirection: 'row',
              margin: RFValue(20),
              marginTop: RFValue(30),
              borderBottomColor: '#eaeaea',
              borderBottomWidth: 1,
              paddingBottom: RFValue(20),
              justifyContent: 'space-between',
            }}>
            <Text style={{ fontSize: RFValue(22) }}>stay at home</Text>
            <Text style={{ fontSize: RFValue(12), color: '#b6b6b6' }}>2 days ago</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              margin: RFValue(20),
              marginTop: RFValue(30),
              borderBottomColor: '#eaeaea',
              borderBottomWidth: 1,
              paddingBottom: RFValue(20),
              justifyContent: 'space-between',
            }}>
            <Text style={{ fontSize: RFValue(22) }}>Hi Message</Text>
            <Text style={{ fontSize: RFValue(12), color: '#b6b6b6' }}>2 days ago</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              margin: RFValue(20),
              marginTop: RFValue(30),
              borderBottomColor: '#eaeaea',
              borderBottomWidth: 1,
              paddingBottom: RFValue(20),
              justifyContent: 'space-between',
            }}>
            <Text style={{ fontSize: RFValue(22) }}>testing</Text>
            <Text style={{ fontSize: RFValue(12), color: '#b6b6b6' }}>3 days ago</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              margin: RFValue(20),
              marginTop: RFValue(30),
              borderBottomColor: '#eaeaea',
              borderBottomWidth: 1,
              paddingBottom: RFValue(20),
              justifyContent: 'space-between',
            }}>
            <Text style={{ fontSize: RFValue(22) }}>Two of em</Text>
            <Text style={{ fontSize: RFValue(12), color: '#b6b6b6' }}>3 days ago</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              margin: RFValue(20),
              marginTop: RFValue(30),
              borderBottomColor: '#eaeaea',
              borderBottomWidth: 1,
              paddingBottom: RFValue(20),
              justifyContent: 'space-between',
            }}>
            <Text style={{ fontSize: RFValue(22) }}>Everything working fine</Text>
            <Text style={{ fontSize: RFValue(12), color: '#b6b6b6' }}>3 days ago</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              margin: RFValue(20),
              marginTop: RFValue(30),
              borderBottomColor: '#eaeaea',
              borderBottomWidth: 1,
              paddingBottom: RFValue(20),
              justifyContent: 'space-between',
            }}>
            <Text style={{ fontSize: RFValue(22) }}>This should work now</Text>
            <Text style={{ fontSize: RFValue(12), color: '#b6b6b6' }}>2 days ago</Text>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
}
