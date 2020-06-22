import * as React from 'react';
import { View, Text, Modal, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';
import CountryPicker from 'react-native-country-picker-modal';
import MyTextInput from '../textInput';
import MyButton from '../button';

export default function ReportModal(props) {
  const [dryCough, setDryCough] = React.useState(0);
  const [tiredness, setTiredness] = React.useState(0);
  const [soreThroat, setSoreThroat] = React.useState(0);
  const [fever, setFever] = React.useState(0);
  return (
    <Modal
      onDismiss={() => {
        Alert.alert(
          'Success',
          'Your vitals have been logged successfully',
          [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
          { cancelable: false }
        );
      }}
      animationType="slide"
      transparent={true}
      visible={props.show}>
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
          <Text style={{ fontWeight: 'bold', fontSize: RFValue(35) }}>Log Symptoms</Text>
          <TouchableOpacity
            style={{ position: 'absolute', right: 0 }}
            onPress={() => props.close(!props.show)}>
            <Ionicons name={'ios-close'} size={RFValue(45)}></Ionicons>
          </TouchableOpacity>
        </View>
        <ScrollView style={{ marginTop: RFValue(25) }}>
          <View
            style={{
              height: RFValue(150),
              borderRadius: 20,
              padding: RFValue(20),
              shadowColor: '#000',
              backgroundColor: '#f1f1f1',

              marginTop: 10,
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.32,
              shadowRadius: 4.2,
              elevation: 10,
            }}>
            <View
              style={{
                borderBottomWidth: 1,
                padding: 5,
                justifyContent: 'space-between',
                borderBottomColor: '#b8b8b8',
              }}>
              <Text style={{ fontWeight: 'bold' }}>Dry Cough</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 15,
                alignItems: 'center',
              }}>
              <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => setDryCough(0)}>
                <View
                  style={{
                    justifyContent: 'center',
                    width: RFValue(50),
                    height: RFValue(50),
                    backgroundColor: dryCough == 0 ? '#899a9a' : '#fff',
                    borderWidth: dryCough == 0 ? 0 : 1,
                    borderRadius: 50,
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: dryCough == 0 ? '#fff' : '#000',
                      fontWeight: 'bold',
                      fontSize: RFValue(20),
                    }}>
                    0
                  </Text>
                </View>
                <Text>None</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => setDryCough(1)}>
                <View
                  style={{
                    justifyContent: 'center',
                    width: RFValue(50),
                    height: RFValue(50),
                    backgroundColor: dryCough == 1 ? '#899a9a' : '#fff',
                    borderWidth: dryCough == 1 ? 0 : 1,
                    borderRadius: 50,
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: dryCough == 1 ? '#fff' : '#000',
                      fontWeight: 'bold',
                      fontSize: RFValue(20),
                    }}>
                    1
                  </Text>
                </View>
                <Text>Mild</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => setDryCough(2)}>
                <View
                  style={{
                    justifyContent: 'center',
                    width: RFValue(50),
                    height: RFValue(50),
                    backgroundColor: dryCough == 2 ? '#899a9a' : '#fff',
                    borderWidth: dryCough == 2 ? 0 : 1,
                    borderRadius: 50,
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: dryCough == 2 ? '#fff' : '#000',
                      fontWeight: 'bold',
                      fontSize: RFValue(20),
                    }}>
                    2
                  </Text>
                </View>
                <Text>Mid</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => setDryCough(3)}>
                <View
                  style={{
                    justifyContent: 'center',
                    width: RFValue(50),
                    height: RFValue(50),
                    backgroundColor: dryCough == 3 ? '#899a9a' : '#fff',
                    borderWidth: dryCough == 3 ? 0 : 1,
                    borderRadius: 50,
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: dryCough == 3 ? '#fff' : '#000',
                      fontWeight: 'bold',
                      fontSize: RFValue(20),
                    }}>
                    3
                  </Text>
                </View>
                <Text>Semi</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => setDryCough(4)}>
                <View
                  style={{
                    justifyContent: 'center',
                    width: RFValue(50),
                    height: RFValue(50),
                    backgroundColor: dryCough == 4 ? '#899a9a' : '#fff',
                    borderWidth: dryCough == 4 ? 0 : 1,
                    borderRadius: 50,
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: dryCough == 4 ? '#fff' : '#000',
                      fontWeight: 'bold',
                      fontSize: RFValue(20),
                    }}>
                    4
                  </Text>
                </View>
                <Text>High</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              height: RFValue(150),
              borderRadius: 20,
              padding: RFValue(20),
              shadowColor: '#000',
              backgroundColor: '#f1f1f1',

              marginTop: 10,
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.32,
              shadowRadius: 4.2,
              elevation: 10,
            }}>
            <View
              style={{
                borderBottomWidth: 1,
                padding: 5,
                justifyContent: 'space-between',
                borderBottomColor: '#b8b8b8',
              }}>
              <Text style={{ fontWeight: 'bold' }}>Tiredness</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 15,
                alignItems: 'center',
              }}>
              <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => setTiredness(0)}>
                <View
                  style={{
                    justifyContent: 'center',
                    width: RFValue(50),
                    height: RFValue(50),
                    backgroundColor: tiredness == 0 ? '#899a9a' : '#fff',
                    borderWidth: tiredness == 0 ? 0 : 1,
                    borderRadius: 50,
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: tiredness == 0 ? '#fff' : '#000',
                      fontWeight: 'bold',
                      fontSize: RFValue(20),
                    }}>
                    0
                  </Text>
                </View>
                <Text>None</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => setTiredness(1)}>
                <View
                  style={{
                    justifyContent: 'center',
                    width: RFValue(50),
                    height: RFValue(50),
                    backgroundColor: tiredness == 1 ? '#899a9a' : '#fff',
                    borderWidth: tiredness == 1 ? 0 : 1,
                    borderRadius: 50,
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: tiredness == 1 ? '#fff' : '#000',
                      fontWeight: 'bold',
                      fontSize: RFValue(20),
                    }}>
                    1
                  </Text>
                </View>
                <Text>Mild</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => setTiredness(2)}>
                <View
                  style={{
                    justifyContent: 'center',
                    width: RFValue(50),
                    height: RFValue(50),
                    backgroundColor: tiredness == 2 ? '#899a9a' : '#fff',
                    borderWidth: tiredness == 2 ? 0 : 1,
                    borderRadius: 50,
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: tiredness == 2 ? '#fff' : '#000',
                      fontWeight: 'bold',
                      fontSize: RFValue(20),
                    }}>
                    2
                  </Text>
                </View>
                <Text>Mid</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => setTiredness(3)}>
                <View
                  style={{
                    justifyContent: 'center',
                    width: RFValue(50),
                    height: RFValue(50),
                    backgroundColor: tiredness == 3 ? '#899a9a' : '#fff',
                    borderWidth: tiredness == 3 ? 0 : 1,
                    borderRadius: 50,
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: tiredness == 3 ? '#fff' : '#000',
                      fontWeight: 'bold',
                      fontSize: RFValue(20),
                    }}>
                    3
                  </Text>
                </View>
                <Text>Semi</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => setTiredness(4)}>
                <View
                  style={{
                    justifyContent: 'center',
                    width: RFValue(50),
                    height: RFValue(50),
                    backgroundColor: tiredness == 4 ? '#899a9a' : '#fff',
                    borderWidth: tiredness == 4 ? 0 : 1,
                    borderRadius: 50,
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: tiredness == 4 ? '#fff' : '#000',
                      fontWeight: 'bold',
                      fontSize: RFValue(20),
                    }}>
                    4
                  </Text>
                </View>
                <Text>High</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              height: RFValue(150),
              borderRadius: 20,
              padding: RFValue(20),
              shadowColor: '#000',
              backgroundColor: '#f1f1f1',

              marginTop: 10,
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.32,
              shadowRadius: 4.2,
              elevation: 10,
            }}>
            <View
              style={{
                borderBottomWidth: 1,
                padding: 5,
                justifyContent: 'space-between',
                borderBottomColor: '#b8b8b8',
              }}>
              <Text style={{ fontWeight: 'bold' }}>Sore Throat</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 15,
                alignItems: 'center',
              }}>
              <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => setSoreThroat(0)}>
                <View
                  style={{
                    justifyContent: 'center',
                    width: RFValue(50),
                    height: RFValue(50),
                    backgroundColor: soreThroat == 0 ? '#899a9a' : '#fff',
                    borderWidth: soreThroat == 0 ? 0 : 1,
                    borderRadius: 50,
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: soreThroat == 0 ? '#fff' : '#000',
                      fontWeight: 'bold',
                      fontSize: RFValue(20),
                    }}>
                    0
                  </Text>
                </View>
                <Text>None</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => setSoreThroat(1)}>
                <View
                  style={{
                    justifyContent: 'center',
                    width: RFValue(50),
                    height: RFValue(50),
                    backgroundColor: soreThroat == 1 ? '#899a9a' : '#fff',
                    borderWidth: soreThroat == 1 ? 0 : 1,
                    borderRadius: 50,
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: soreThroat == 1 ? '#fff' : '#000',
                      fontWeight: 'bold',
                      fontSize: RFValue(20),
                    }}>
                    1
                  </Text>
                </View>
                <Text>Mild</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => setSoreThroat(2)}>
                <View
                  style={{
                    justifyContent: 'center',
                    width: RFValue(50),
                    height: RFValue(50),
                    backgroundColor: soreThroat == 2 ? '#899a9a' : '#fff',
                    borderWidth: soreThroat == 2 ? 0 : 1,
                    borderRadius: 50,
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: soreThroat == 2 ? '#fff' : '#000',
                      fontWeight: 'bold',
                      fontSize: RFValue(20),
                    }}>
                    2
                  </Text>
                </View>
                <Text>Mid</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => setSoreThroat(3)}>
                <View
                  style={{
                    justifyContent: 'center',
                    width: RFValue(50),
                    height: RFValue(50),
                    backgroundColor: soreThroat == 3 ? '#899a9a' : '#fff',
                    borderWidth: soreThroat == 3 ? 0 : 1,
                    borderRadius: 50,
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: soreThroat == 3 ? '#fff' : '#000',
                      fontWeight: 'bold',
                      fontSize: RFValue(20),
                    }}>
                    3
                  </Text>
                </View>
                <Text>Semi</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => setSoreThroat(4)}>
                <View
                  style={{
                    justifyContent: 'center',
                    width: RFValue(50),
                    height: RFValue(50),
                    backgroundColor: soreThroat == 4 ? '#899a9a' : '#fff',
                    borderWidth: soreThroat == 4 ? 0 : 1,
                    borderRadius: 50,
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: soreThroat == 4 ? '#fff' : '#000',
                      fontWeight: 'bold',
                      fontSize: RFValue(20),
                    }}>
                    4
                  </Text>
                </View>
                <Text>High</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              height: RFValue(150),
              borderRadius: 20,
              padding: RFValue(20),
              shadowColor: '#000',
              backgroundColor: '#f1f1f1',

              marginTop: 10,
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.32,
              shadowRadius: 4.2,
              elevation: 10,
            }}>
            <View
              style={{
                borderBottomWidth: 1,
                padding: 5,
                justifyContent: 'space-between',
                borderBottomColor: '#b8b8b8',
              }}>
              <Text style={{ fontWeight: 'bold' }}>Fever</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 15,
                alignItems: 'center',
              }}>
              <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => setFever(0)}>
                <View
                  style={{
                    justifyContent: 'center',
                    width: RFValue(50),
                    height: RFValue(50),
                    backgroundColor: fever == 0 ? '#899a9a' : '#fff',
                    borderWidth: fever == 0 ? 0 : 1,
                    borderRadius: 50,
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: fever == 0 ? '#fff' : '#000',
                      fontWeight: 'bold',
                      fontSize: RFValue(20),
                    }}>
                    0
                  </Text>
                </View>
                <Text>None</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => setFever(1)}>
                <View
                  style={{
                    justifyContent: 'center',
                    width: RFValue(50),
                    height: RFValue(50),
                    backgroundColor: fever == 1 ? '#899a9a' : '#fff',
                    borderWidth: fever == 1 ? 0 : 1,
                    borderRadius: 50,
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: fever == 1 ? '#fff' : '#000',
                      fontWeight: 'bold',
                      fontSize: RFValue(20),
                    }}>
                    1
                  </Text>
                </View>
                <Text>Mild</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => setFever(2)}>
                <View
                  style={{
                    justifyContent: 'center',
                    width: RFValue(50),
                    height: RFValue(50),
                    backgroundColor: fever == 2 ? '#899a9a' : '#fff',
                    borderWidth: fever == 2 ? 0 : 1,
                    borderRadius: 50,
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: fever == 2 ? '#fff' : '#000',
                      fontWeight: 'bold',
                      fontSize: RFValue(20),
                    }}>
                    2
                  </Text>
                </View>
                <Text>Mid</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => setFever(3)}>
                <View
                  style={{
                    justifyContent: 'center',
                    width: RFValue(50),
                    height: RFValue(50),
                    backgroundColor: fever == 3 ? '#899a9a' : '#fff',
                    borderWidth: fever == 3 ? 0 : 1,
                    borderRadius: 50,
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: fever == 3 ? '#fff' : '#000',
                      fontWeight: 'bold',
                      fontSize: RFValue(20),
                    }}>
                    3
                  </Text>
                </View>
                <Text>Semi</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => setFever(4)}>
                <View
                  style={{
                    justifyContent: 'center',
                    width: RFValue(50),
                    height: RFValue(50),
                    backgroundColor: fever == 4 ? '#899a9a' : '#fff',
                    borderWidth: fever == 4 ? 0 : 1,
                    borderRadius: 50,
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: fever == 4 ? '#fff' : '#000',
                      fontWeight: 'bold',
                      fontSize: RFValue(20),
                    }}>
                    4
                  </Text>
                </View>
                <Text>High</Text>
              </TouchableOpacity>
            </View>
          </View>

          <MyButton
            onPress={() => props.close(!props.show)}
            style={{
              backgroundColor: '#899a9a',
              height: RFValue(50),
              zIndex: 10,
              width: '100%',
              justifyContent: 'center',
              marginTop: RFValue(10),
              alignItems: 'center',
              borderRadius: 5,
            }}
            text={'Log Vitals'}
          />
        </ScrollView>
      </View>
      <View style={{ height: RFValue(60) }}></View>
    </Modal>
  );
}
