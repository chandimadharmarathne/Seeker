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
import JobCardView from '../component/JobBookMarkedCard';
import BookMarkBottomView from '../component/BookMarkBottomView';

const BookMarkPage = ({navigation}) => {
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
          <Text style={[styles.nameText, {paddingBottom:40}]}>Saved Jobs</Text>
        </View>
        <View style={styles.containerProfile}>
        <JobCardView />
        </View>

        {/*
        */}
      </ScrollView>
      <BookMarkBottomView navigation={navigation} />
    </SafeAreaView>
  );
};

export default BookMarkPage;
