import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native';
import MyButton from '../../components/button';

export default function Verify(props) {
  const {textInput} = styles;

  const back = () => {
    props.navigation.pop();
  };

  const next = () => {
    props.navigation.push('general');
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
        <KeyboardAvoidingView behavior={'padding'}>

      <SafeAreaView>
        <View>
          <TouchableOpacity
            onPress={back}
            style={{padding: 20, flexDirection: 'row'}}>
            <Text style={{fontSize: 12}}> Change phone </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: '90%',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{color: '#000', fontWeight: 'bold', fontSize: 15}}>
              Verification PIN
            </Text>
            <Text
              style={{
                borderColor: '#022322',
                textAlign: 'center',
                fontWeight: '300',
                padding: 20,
                width: 200,
                fontSize: 12,
                color: '#000',
              }}>
              Enter the verification code we just sent you on 0541879515
            </Text>
            <View>
              <TextInput
                style={textInput}
                keyboardType={'number-pad'}
                maxLength={4}
              />
              <MyButton
                style={{
                  backgroundColor: '#000',
                  height: 45,
                  zIndex: 2,
                  marginTop: 10,
                  marginBottom: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                text={'Submit code'}
                onPress={next}
              />
            </View>
            <Text>Have you recieved your code?</Text>
            <Text style={{marginTop: 20}}>Resend</Text>
          </View>
        </View>
      </SafeAreaView>
        </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderBottomWidth: 1.5,
    width: 300,
    borderBottomColor: '#000',
    marginTop: 40,
    marginBottom: 20,
    textAlign: 'center',
  },
});
