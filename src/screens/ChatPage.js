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
import ChatCardView from '../component/ChatCardView';
import JobCatogryView from '../component/JobCatogry';
import JobCardView from '../component/JobCard';
import BottomView from '../component/ChatBottomView';

const Home = () => {
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
      <View style={styles.containerProfile}>
          <Text style={[styles.nameText, {paddingBottom:20}]}>Chats</Text>
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
            
          </View>
        </View>

        

        <ChatCardView />
        
      </ScrollView>
      <BottomView />
    </SafeAreaView>
  );
};

export default Home;
