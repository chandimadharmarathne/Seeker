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
import styles from '../Integrators/styles';
import CardView from '../component/cardView';

const Home = () => {
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
        <View style={styles.containerProfile}>
          <View style={styles.raw}>
            <View style={styles.profilePicture}>
              <Image
                source={require('../Assets/images/pf.png')} // Adjust the image path
                style={{width: '100%', height: '100%'}}
                resizeMode="cover"
              />
            </View>
            <View style={styles.column}>
              <Text style={styles.nameText}>Hello, Chandima!</Text>
              <Text style={styles.greeting}>Good Morning</Text>
            </View>
            <View style={styles.icon}>
              <Image
                source={require('../Assets/images/notification.png')} // Adjust the image path
                style={{width: '100%', height: '100%'}}
                resizeMode="cover"
              />
            </View>
          </View>
        </View>

        <View style={styles.containerCenter}>
          <View style={styles.raw}>
            <View style={styles.searchRow}>
              <Image
                source={require('../Assets/images/search.png')}
                style={[styles.iconSearch, {opacity: 0.5}]}
              />
              <TextInput
                style={styles.input}
                placeholder="Search here"
                onChangeText={handleSearchText}
              />
            </View>
            <View style={styles.listIcon}>
              <Image
                source={require('../Assets/images/list.png')} // Adjust the image path
                style={{width: '100%', height: '100%'}}
                resizeMode="cover"
              />
            </View>
          </View>
        </View>

        <View style={styles.containerMain}>
          <View style={styles.paddingContainer}>
            {/* Add other content */}
            <CardView>
              <View style={styles.raw}>
                <View style={styles.column}>
                  <View style={styles.boxLine}>
                    <Text>
                      <Text style={styles.cardText}>
                        How to find a perfect job for...
                      </Text>
                    </Text>
                  </View>
                  <View style={styles.boxLine2}>
                    <Text>
                      <Text style={styles.readMore}>Read more</Text>
                    </Text>
                  </View>
                </View>
                <View style={styles.imageView}>
                  
                    <Image
                      source={require('../Assets/images/team.png')} // Adjust the image path
                      style={{width: '100%', height: '100%'}}
                      resizeMode="cover"
                    />
                  
                </View>
              </View>
            </CardView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
