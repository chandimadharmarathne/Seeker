import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
const JobCatogry = () => {
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.row}>
          <View style={styles.box3colorblue}>
            <Text>
              <Text style={styles.jobCatagoryWhite}>All Jobs</Text>
            </Text>
          </View>
          <View style={styles.box3colorwhite}>
            <Text>
              <Text style={styles.jobCatagoryBlue}>Writer</Text>
            </Text>
          </View>
          <View style={styles.box3colorwhite}>
            <Text>
              <Text style={styles.jobCatagoryBlue}>Designer</Text>
            </Text>
          </View>
          <View style={styles.box3colorwhite}>
            <Text>
              <Text style={styles.jobCatagoryBlue}>Finance</Text>
            </Text>
          </View>
          <View style={styles.box3colorwhite}>
            <Text>
              <Text style={styles.jobCatagoryBlue}>Marketing</Text>
            </Text>
          </View>
          <View style={styles.box3colorwhite}>
            <Text>
              <Text style={styles.jobCatagoryBlue}>UI/UX</Text>
            </Text>
          </View>
          <View style={styles.box3colorwhite}>
            <Text>
              <Text style={styles.jobCatagoryBlue}>Auditors</Text>
            </Text>
          </View>
        </View>
        </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:10,
        marginLeft:0,
      },
    jobCatagoryWhite: {
        textAlign: 'center',
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: 'bold',
        color:'white'
      },
      jobCatagoryBlue: {
        textAlign: 'center',
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: 'bold',
        color:'black'
      },
    
      box3colorblue: {
        backgroundColor: '#052759',
        height: 33,
        width: 100,
        paddingLeft: 22,
        paddingTop: 3.5,
        borderRadius: 25,
        marginLeft: 20,
      },
      box3colorwhite: {
        backgroundColor: 'white',
        height: 33,
        width: 100,
        paddingLeft: 22,
        paddingTop: 3.5,
        borderRadius: 25,
        marginLeft: 1,
      },
  });
  
  export default JobCatogry;