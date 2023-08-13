import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CardView = ({children, headerText }) => {
    return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    width: 325,
    height: 140,
    borderWidth: 0.01,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 0, 0, 0.63)', // Red color with 0.73 opacity
    padding:1,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.75,
    shadowRadius: 2,
    elevation: 3, // Elevation for Android shadows
  },
  header: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    paddingLeft:18,
    lineHeight: 24, // Adjust the line height as needed
  },
  content: {
    color: 'white',
  },
});

export default CardView;
