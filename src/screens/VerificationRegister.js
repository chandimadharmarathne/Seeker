//@ts-nocheck
import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Keyboard,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';

const VerificationRegisterPage = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [number3, setNumber3] = useState('');
  const [number4, setNumber4] = useState('');


  const handleNumber1Change = text => {
    const numericText = text.replace(/[^0-9]/g, '');
    setNumber1(numericText);
  };
  const handleNumber2Change = text => {
    const numericText = text.replace(/[^0-9]/g, '');
    setNumber2(numericText);
  };
  const handleNumber3Change = text => {
    const numericText = text.replace(/[^0-9]/g, '');
    setNumber3(numericText);
  };
  const handleNumber4Change = text => {
    const numericText = text.replace(/[^0-9]/g, '');
    setNumber4(numericText);
  };

  

  const handleSubmit = () => {
    if (number1.trim() === '' || number2.trim() === '' || number3.trim() === '' || number4.trim() === '') {
        Alert.alert('Error', 'Please enter the 4-digit verification code.');
        return;
      }
    // Handle the submitted password and confirm password (e.g., send to an API, store, etc.)
    Alert.alert('Successfully registered!');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={styles.row}>
          <Image
            source={require('../Assets/images/backArrow.png')}
            style={styles.iconImage}
          />

          <Text style={styles.titleText}>Verification</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.textOne}>
            Enter 4 digit verification code. We just send you on given Email
            address.
          </Text>
        </View>

        <View style={styles.boxContainer}>
          <View style={styles.row1}>
            <TextInput
              style={styles.input}
              placeholder=""
              onChangeText={handleNumber1Change}
              value={number1}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder=""
              onChangeText={handleNumber2Change}
              value={number2}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder=""
              onChangeText={handleNumber3Change}
              value={number3}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder=""
              onChangeText={handleNumber4Change}
              value={number4}
              keyboardType="numeric"
            />
          </View>
        </View>

        <View style={styles.containerCenter}>
          <TouchableOpacity
            style={styles.continueButton}
            onPress={handleSubmit}>
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'White',
  },
  containerCenter: {
    backgroundColor: 'White',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  
  iconImage: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
    marginLeft: 40,
    marginTop: 57,
  },

  textOne: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 50,
    marginTop: 40,
    marginRight: 40,
  },
  
  titleText: {
    textAlign: 'center',
    fontSize: 25,
    fontStyle: 'normal',
    fontWeight: 'bold',
    marginTop: 60,
    marginLeft: 60,
    color: 'black',
  },
  input: {
    width: 50,
    height: 50,
    backgroundColor: '#d9d9d970',
    borderColor: 'gray',
    borderWidth: 0.1,
    borderRadius: 2,
    fontWeight: '600',
    fontSize: 35,
    fontFamily: 'Inter-Medium',
    marginRight: 32,
    marginTop: 10,
    paddingTop: 5,
    textAlign: 'center',
  },

  
 
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 35,
    marginLeft: 45,
  },
  
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  
  
  continueButton: {
    backgroundColor: '#0228f3b0',
    paddingVertical: 5,
    paddingHorizontal: 30,
    borderRadius: 2,
    width: 296,
    height: 40,
    marginTop: 50,
  },
  continueButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  
});

export default VerificationRegisterPage;
