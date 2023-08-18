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
import BottomView from '../component/ChatBottomView';

const ChatPage = ({navigation}) => {
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
          <Text style={[styles.nameText, {paddingBottom:583}]}>Chats</Text>
        </View>
        

        <View style={[styles.containerCenter, {paddingBottom:20}]}>
          <View style={styles.raw}>
            <View style={styles.searchRow}>
              <Image
                source={require('../Assets/images/imojo.png')}
                style={[styles.sendButton, {opacity: 0.5}]}
              />
              <TextInput
                style={styles.input }
                placeholder="Message"
                onChangeText={handleSearchText}
              />
              <Image
                source={require('../Assets/images/attach.png')}
                style={[styles.sendButton, {opacity: 0.9,left:150}]}
              />
            </View>
            <Image
                source={require('../Assets/images/send.png')}
                style={[styles.sendButton, {opacity: 1, top:10}]}
              />
            
          </View>
        </View>

        

      </ScrollView>
      
      
    </SafeAreaView>
  );
};

export default ChatPage;
