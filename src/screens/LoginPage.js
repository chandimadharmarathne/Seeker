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
} from 'react-native';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = text => {
    setEmail(text);
  };

  const handlePasswordChange = text => {
    setPassword(text);
  };
  const toggleShowPassword = () => {
    // Toggle the showPassword state to switch between showing and hiding the password
    setShowPassword(!showPassword);
  };
  const handleReturnPress = () => {
    // Trigger an action when the "Return" key is pressed (e.g., login)
    Keyboard.dismiss(); // Hide the keyboard
    // Perform login or password-related actions using the password state
    console.log('Password:', password); // Log the password (for demonstration purposes)
  };
  const handleLogin = () => {
    // Perform login logic here using the email and password states
    console.log('Email:', email);
    console.log('Password:', password);
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
          <Text style={styles.titleText}>Login to your Account</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.row1}>
            <Image
              source={require('../Assets/images/profile.png')}
              style={[styles.icon, {opacity: 0.5}]}
            />
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
            <Image
              source={require('../Assets/images/key.png')}
              style={[styles.icon, {opacity: 0.5}]}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={!showPassword} // Mask the input text
              onChangeText={handlePasswordChange}
              value={password}
              returnKeyType="go" // Set the return key type to "Go"
              onSubmitEditing={handleReturnPress} // Handle "Return" key press
            />
            <Text style={styles.toggleButton} onPress={toggleShowPassword}>
              {showPassword ? 'hide' : 'show'}
            </Text>
          </View>
        </View>

        <View style={styles.imageContainer}>
          <View style={styles.boxLine}></View>
          <Text style={styles.fogtPaswd}>Forgot password</Text>
        </View>
        <View style={styles.containerCenter}>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerCenter}>
          <View style={styles.row}>
            <Text style={styles.registerTxt}>
              <Text style={styles.blackText}>Don't have an Account? </Text>
              <Text style={styles.blueText}>Register now</Text>
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
    marginTop: 62,
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 42,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  toggleButton: {
    marginLeft: 12,
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
  loginButton: {
    backgroundColor: '#0228f3b0',
    paddingVertical: 5,
    paddingHorizontal: 30,
    borderRadius: 2,
    width: 296,
    height: 40,
    marginTop: 70,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  registerTxt: {
    textAlign: 'center',
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: '400',
    marginTop: 80,
    fontFamily: 'Inter-Regular',
  },
});

export default LoginPage;