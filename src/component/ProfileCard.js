import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const ProfileCard = ({profilePicture, backgroundPhoto}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../Assets/images/ffff.jpg')}
        style={styles.backgroundImage}
      />
      <View style={styles.profileImageContainer}>
        <Image
          source={require('../Assets/images/pf.png')}
          style={styles.profileImage}
        />
      </View>
      <View style={styles.cameraIconMainContainer}>
        <Image
          source={require('../Assets/images/camera.png')}
          style={styles.cameraIcon}
        />
      </View>
      <View style={styles.profileCameraIconContainer}>
        <Image
          source={require('../Assets/images/camera.png')}
          style={styles.cameraIcon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 250,
    position: 'relative',
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  backgroundImage: {
    width: '100%',
    height: 200,
    position: 'absolute',
  },
  profileImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 20,
    borderWidth: 1,
    borderColor: 'black',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },

  cameraIcon: {
    width: 20,
    height: 20,
  },
  cameraIconMainContainer: {
    width: 30,
    height: 30,
    borderRadius: 30,
    position: 'absolute',
    top: 10,
    right: 20,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  profileCameraIconContainer: {
    width: 30,
    height: 30,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'black',
    position: 'absolute',
    top: 210,
    left: 100,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

export default ProfileCard;
