import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  useColorScheme,
} from 'react-native';
import styles from '../Integrators/styles';
import ProfileCard from '../component/ProfileCard';
import JobCatogryView from '../component/JobCatogry';
import WorkExperience from '../component/WorkExperience';
import ProfileBottomView from '../component/ProfileBottomView';
import Education from '../component/Education';

const Profile = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [isFocused, setIsFocused] = useState(false);
  const [search, setSearch] = useState('');

  const handleSearchText = text => {
    setSearch(text);
  };

  const handleSearchBarClick = () => {
    setIsFocused(true);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={[styles.containerMain, {paddingTop: 25}]}>
          <ProfileCard
            profilePicture="URL_TO_PROFILE_PICTURE"
            backgroundPhoto="URL_TO_BACKGROUND_PHOTO"
          />
        </View>

        <View style={styles.profileContainer}>
          <Text style={styles.profileName}>
            <Text style={styles.blackText}>Chandima Ishan</Text>
          </Text>
          <Text style={styles.jobText}>
            <Text style={styles.blackText}>Software Engineer</Text>
          </Text>
        </View>

        <View style={styles.LineContainer}>
          <View style={styles.boxLine4}></View>
        </View>

        <View style={styles.profileContainer}>
          <View style={styles.raw}>
            <Text style={styles.contactText}>
              <Text style={styles.blackText}>Contact Information</Text>
            </Text>

            <Image
              source={require('../Assets/images/edit.png')} // Adjust the image path
              style={{width: 25, height: 25, left: 155}}
              resizeMode="cover"
            />
          </View>

          <Text style={styles.editContactTitleText}>
            <Text style={styles.blackText}>Email Address</Text>
          </Text>
          <Text style={styles.editContactText}>
            <Text style={styles.blackText}>chandimadarmarathna@gmail.com</Text>
          </Text>

          <Text style={styles.editContactTitleText}>
            <Text style={styles.blackText}>Mobile Number</Text>
          </Text>
          <Text style={styles.editContactText}>
            <Text style={styles.blackText}>(+94) 711972375</Text>
          </Text>

          <Text style={styles.editContactTitleText}>
            <Text style={styles.blackText}>Website</Text>
          </Text>
          <Text style={styles.editContactText}>
            <Text style={styles.blueText}>
              www.abscdrhdh.com/home/chandima-0
            </Text>
          </Text>
        </View>

        <View style={styles.LineContainer}>
          <View style={styles.boxLine4}></View>
        </View>

        <View style={styles.profileContainer}>
          <View style={styles.raw}>
            <Text style={styles.contactText}>
              <Text style={styles.blackText}>About Me</Text>
            </Text>

            <Image
              source={require('../Assets/images/edit.png')} // Adjust the image path
              style={{width: 25, height: 25, left: 245}}
              resizeMode="cover"
            />
          </View>

          <Text style={styles.aboutText}>
            <Text style={styles.blackText}>
              "Seeker" redefines job searches with a React Native app,
              empowering job seekers and employers through a personalized
              experience, real-time updates, and data-driven insights from
              MongoDB. Join our open-source
              <Text style={styles.blueText}> Read more</Text>
            </Text>
          </Text>
          <View style={styles.raw}>
            <Image
              source={require('../Assets/images/work.png')} // Adjust the image path
              style={{width: 20, height: 20, left: 0, top: 1}}
              resizeMode="cover"
            />
            <Text style={styles.editContactText}>
              <Text style={[styles.blackText, {fontWeight: '600'}]}>
                {' '}
                4+ years experience
              </Text>
            </Text>
            <Image
              source={require('../Assets/images/pin.png')} // Adjust the image path
              style={{width: 25, height: 25, left: 5, top: 1}}
              resizeMode="cover"
            />
            <Text style={styles.editContactText}>
              <Text style={[styles.blackText, {fontWeight: '600'}]}>
                {' '}
                Colombo, Sri Lanka
              </Text>
            </Text>
          </View>
        </View>
        <View style={styles.LineContainer}>
          <View style={[styles.boxLine4, {marginTop: 15}]}></View>
        </View>

        <View style={styles.profileContainer}>
          <View style={styles.raw}>
            <Text style={styles.contactText}>
              <Text style={styles.blackText}>Skills</Text>
            </Text>

            <Image
              source={require('../Assets/images/edit.png')} // Adjust the image path
              style={{width: 25, height: 25, left: 280}}
              resizeMode="cover"
            />
          </View>

          <View style={styles.raw}>
            <Image
              source={require('../Assets/images/java.png')} // Adjust the image path
              style={{width: 50, height: 50, left: 5, top: 1}}
              resizeMode="cover"
            />

            <Image
              source={require('../Assets/images/nodejs.png')} // Adjust the image path
              style={{width: 50, height: 50, left: 15, top: 1}}
              resizeMode="cover"
            />
            <Image
              source={require('../Assets/images/react.png')} // Adjust the image path
              style={{width: 50, height: 50, left: 25, top: 1}}
              resizeMode="cover"
            />
            <Image
              source={require('../Assets/images/illustrator.png')} // Adjust the image path
              style={{width: 50, height: 50, left: 35, top: 1}}
              resizeMode="cover"
            />
            <Image
              source={require('../Assets/images/photoshop.png')} // Adjust the image path
              style={{width: 50, height: 50, left: 45, top: 1}}
              resizeMode="cover"
            />
          </View>
        </View>

        <View style={styles.LineContainer}>
          <View style={[styles.boxLine4, {marginTop: 15}]}></View>
        </View>

        <View style={[styles.profileContainer, {marginTop: 15}]}>
          <View style={styles.raw}>
            <Text style={styles.contactText}>
              <Text style={styles.blackText}>Work Experience</Text>
            </Text>

            <Image
              source={require('../Assets/images/edit.png')} // Adjust the image path
              style={{width: 25, height: 25, left: 182}}
              resizeMode="cover"
            />
          </View>
          <WorkExperience />
          
        </View>

        <View style={styles.LineContainer}>
          <View style={[styles.boxLine4, {marginTop: 15}]}></View>
        </View>

        <View style={[styles.profileContainer, {marginTop: 15}]}>
          <View style={styles.raw}>
            <Text style={styles.contactText}>
              <Text style={styles.blackText}>Education</Text>
            </Text>

            <Image
              source={require('../Assets/images/edit.png')} // Adjust the image path
              style={{width: 25, height: 25, left: 242}}
              resizeMode="cover"
            />
          </View>
          <Education />
          
        </View>
        
      </ScrollView>
      <ProfileBottomView />
    </SafeAreaView>
  );
};

export default Profile;
