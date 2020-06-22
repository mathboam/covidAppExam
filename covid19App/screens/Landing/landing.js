import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  ImageBackground,
  StatusBar,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import MyTextInput from '../../components/textInput';
import MyButton from '../../components/button';
import { version } from '../../package.json';

export default function Landing(props) {
  let { bigText, smallText } = styles;
  let [pass, setpass] = React.useState(false);
  let [ide, setide] = React.useState(false);
  const [number, setnumber] = React.useState('');
  const [error, setError] = React.useState('');
  const setandcheck = (number) => {
    setnumber(number);
    console.log(number);
    number.length == 10 ? setpass(true) : setpass(false);

    console.log(pass);
  };

  const checkforerrors = () => {
    if (pass) {
      props.navigation.push('verify');
    } else {
      setide(true);
      setError('contact not complete...');
    }
  };

  return (
    <React.Fragment>
      <StatusBar barStyle={'light-content'} />
      <ImageBackground
        source={require('../../assets/images/cv.jpeg')}
        style={{
          flex: 1,
          resizeMode: 'cover',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <KeyboardAvoidingView behavior={'padding'}>
          <SafeAreaView style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View>
              <Text style={bigText}>COVERS</Text>
            </View>
            <View style={{ width: '80%' }}>
              <Text style={smallText}>(COVID 19 EMERGENCY RESPONSE SOLUTION)</Text>
              <Text style={{ ...smallText, fontWeight: '300', fontSize: 10 }}>
                Join the effort by well-meaning Africans using technology to slow down and
                eventually halt the spread of COVID-19
              </Text>

              <View>
                <MyTextInput
                  placeholder={'Phone Number'}
                  type={'number-pad'}
                  max={10}
                  style={{
                    height: 40,
                    backgroundColor: '#ffffff',
                    textAlign: 'right',
                    padding: 10,
                    zIndex: 2,
                    marginTop: 40,
                  }}
                  appearance={'dark'}
                  onChangeText={(number) => setandcheck(number)}
                  defaultValue={number}
                />
              </View>
              <MyButton
                style={{
                  backgroundColor: pass ? '#00b200' : '#b3b3b3',
                  height: 45,
                  zIndex: 2,
                  marginTop: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                text={ide ? error : 'Get Started'}
                onPress={checkforerrors}
              />
            </View>
            <Text style={{ color: '#ffffff', marginTop: 10 }}>Beta {version}</Text>
          </SafeAreaView>
        </KeyboardAvoidingView>
      </ImageBackground>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  bigText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 60,
  },
  smallText: {
    color: '#ffffff',
    fontSize: 11,
    fontWeight: '700',
    textAlign: 'center',
  },
});
