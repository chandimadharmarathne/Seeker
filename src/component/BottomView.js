import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
const BottomView = ({navigation}) => {
  const handleProfile = () => {
    navigation.navigate('Profile') 
  };
  const handleBookMark = () => {
    navigation.navigate('BookMarkPage') 
  };
  const handleChat = () => {
    navigation.navigate('ChatPage') 
  };

  return (
    <View style={styles.row}>
      <View style={styles.bottomIcondark}>
        <Image
          source={require('../Assets/images/home.png')} // Adjust the image path
          style={{width: '100%', height: '100%'}}
        />
      </View>
      <TouchableOpacity onPress={handleBookMark}>
      <View style={styles.bottomIconGray}>
        <Image
          source={require('../Assets/images/bookmarkFilled.png')} // Adjust the image path
          style={{width: '100%', height: '100%'}}
        />
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleChat}>
      <View style={styles.bottomIconGray}>
        <Image
          source={require('../Assets/images/chat.png')} // Adjust the image path
          style={{width: '100%', height: '100%'}}
        />
      </View>
</TouchableOpacity>
      <TouchableOpacity onPress={handleProfile}>
      <View style={styles.bottomIconGray}>
      
        <Image
          source={require('../Assets/images/profile.png')} // Adjust the image path
          style={{width: '100%', height: '100%'}}
        />
        
      </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomIcondark: {
    width: 30,
    height: 30,
    borderColor: 'black',
    marginLeft: 30,
    marginTop: 10,
    marginRight: 30,
    alignContent: 'center',
    alignItems: 'center',
  },
  bottomIconGray: {
    width: 30,
    height: 30,
    borderColor: 'black',
    marginLeft: 40,
    marginTop: 10,
    marginRight: 30,
    opacity: 0.2,
    alignContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default BottomView;
