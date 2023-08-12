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

const Home = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');

  const handleNameChange = text => {
    setName(text);
  };

  const handleEmailChange = text => {
    setEmail(text);
  };

  const handlePasswordChange = text => {
    setPassword(text);
  };

  const handleConfirmPasswordChange = text => {
    setConfirmPassword(text);
  };

  const handleReturnPress = () => {
    // Trigger an action when the "Return" key is pressed (e.g., login)
    Keyboard.dismiss(); // Hide the keyboard
    // Perform login or password-related actions using the password state
    console.log('Password:', password); // Log the password (for demonstration purposes)
  };

  const handleSubmit = () => {
    if (name.trim() === '') {
      Alert.alert('Error', 'Please enter a valid name.');
      return;
    }
    if (email.trim() === '') {
      Alert.alert('Error', 'Please enter a valid Email.');
      return;
    }

    if (password.trim() === '' || confirmPassword.trim() === '') {
      Alert.alert('Error', 'Please enter a password and confirm it.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    // Handle the submitted password and confirm password (e.g., send to an API, store, etc.)
    Alert.alert('Successfully registered!');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={require('../Assets/images/logopng.png')}
            style={styles.image}
          />
          <Text style={styles.textOne}>
            <Text style={styles.blackText}>find your </Text>
            <Text style={styles.redText}>dream job</Text>
          </Text>
          <Text style={styles.titleText}>Register new Account</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.row1}>
            <TextInput
              style={styles.input}
              placeholder="Name"
              onChangeText={handleNameChange}
              value={name}
            />
          </View>
        </View>
        <View style={styles.imageContainer}>
          <View style={styles.boxLine}></View>
        </View>

        <View style={styles.container}>
          <View style={styles.row1}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={text => setEmail(text)}
              value={email}
              keyboardType="email-address"
            />
          </View>
        </View>
        <View style={styles.imageContainer}>
          <View style={styles.boxLine}></View>
        </View>

        <View style={styles.container}>
          <View style={styles.row2}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true} // Mask the input text
              onChangeText={handlePasswordChange}
              value={password}
              returnKeyType="go" // Set the return key type to "Go"
              onSubmitEditing={handleReturnPress} // Handle "Return" key press
            />
          </View>
        </View>
        <View style={styles.imageContainer}>
          <View style={styles.boxLine}></View>
        </View>

        <View style={styles.container}>
          <View style={styles.row2}>
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              secureTextEntry={true} // Mask the input text
              onChangeText={handleConfirmPasswordChange}
              value={confirmPassword}
              returnKeyType="go" // Set the return key type to "Go"
              onSubmitEditing={handleReturnPress} // Handle "Return" key press
            />
          </View>
        </View>

        <View style={styles.imageContainer}>
          <View style={styles.boxLine}></View>
        </View>

        <View style={styles.containerCenter}>
          <TouchableOpacity
            style={styles.registerButton}
            onPress={handleSubmit}>
            <Text style={styles.loginButtonText}>Register</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerCenter}>
          <View style={styles.row}>
            <Text style={styles.loginText}>
              <Text style={styles.blackText}>Already have an Account? </Text>
              <Text style={styles.blueText}>Login now</Text>
            </Text>
          </View>
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

  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 136,
    height: 136,
    resizeMode: 'contain',
    marginLeft: 130,
    marginTop: 40,
  },

  textOne: {
    textAlign: 'center',
    fontSize: 12,
    letterSpacing: 3.72,
    fontStyle: 'italic',
    fontWeight: '600',
  },
  blackText: {
    color: 'black',
  },
  redText: {
    color: 'red',
  },
  blueText: {
    color: 'blue',
  },
  titleText: {
    textAlign: 'center',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: 'bold',
    marginTop: 40,
    color: 'black',
  },
  input: {
    width: 220,
    height: 40,
    borderColor: 'gray',
    borderWidth: 0,
    borderRadius: 5,
    fontWeight: '600',
    fontSize: 16,
    fontFamily: 'Inter-Medium',
  },

  boxLine: {
    backgroundColor: '#0228f3',
    height: 1,
    width: 296,
    paddingLeft: 32,
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginLeft: 45,
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 35,
    marginLeft: 45,
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 35,
    marginLeft: 45,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  toggleButton: {
    marginLeft: 45,
  },
  toggleButtonText: {
    color: 'blue',
  },
  fogtPaswd: {
    textDecorationLine: 'underline',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    marginTop: 5,
    color: 'black',
    marginLeft: 190,
  },
  registerButton: {
    backgroundColor: '#0228f3b0',
    paddingVertical: 5,
    paddingHorizontal: 30,
    borderRadius: 2,
    width: 296,
    height: 40,
    marginTop: 30,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  loginText: {
    textAlign: 'center',
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: '400',
    marginTop: 20,
    fontFamily: 'Inter-Regular',
  },
});

export default Home;