/*WorkExperience.js*/
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
const WorkExperience = () => {
  return (
    <View style={styles.row}>
      <View style={styles.containerMain}>
        <View style={styles.boxLine3}>
          <View style={styles.raw}>
            <View style={styles.jobPicture}>
              <Image
                source={require('../Assets/images/pf.png')} // Adjust the image path
                style={{width: '100%', height: '100%'}}
                resizeMode="cover"
              />
            </View>

            <View style={styles.column}>
              <Text style={styles.jobText}>UX/UI Designer</Text>
              <Text style={styles.companyText}>Cham Soft</Text>

              <Text style={styles.timeText}>2022 Aug - present (12 m)</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.containerMain}>
        <View style={styles.boxLine3}>
          <View style={styles.raw}>
            <View style={styles.jobPicture}>
              <Image
                source={require('../Assets/images/pf.png')} // Adjust the image path
                style={{width: '100%', height: '100%'}}
                resizeMode="cover"
              />
            </View>

            <View style={styles.column}>
              <Text style={styles.jobText}>UX/UI Designer</Text>
              <Text style={styles.companyText}>Cham Soft</Text>

              <Text style={styles.timeText}>2022 Mar - 2022 Aug (5 m)</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.containerMain}>
        <View style={styles.boxLine3}>
          <View style={styles.raw}>
            <View style={styles.jobPicture}>
              <Image
                source={require('../Assets/images/pf.png')} // Adjust the image path
                style={{width: '100%', height: '100%'}}
                resizeMode="cover"
              />
            </View>

            <View style={styles.column}>
              <Text style={styles.jobText}>UX/UI Designer</Text>
              <Text style={styles.companyText}>Cham Soft</Text>

              <Text style={styles.timeText}>2020 Mar - 2022 mar (2y, 0 m)</Text>
            </View>
          </View>
        </View>
      </View>
    </View>


    
  );
};

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
  },

  raw: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  boxLine3: {
    backgroundColor: 'rgba(236, 236, 236, 0.27)',
    height: 90,
    width: 310,
    borderRadius: 16,
    marginLeft: 20,
    alignContent: 'center',
    marginTop: 1,
    marginBottom: 0,
  },
  jobPicture: {
    width: 66,
    height: 66,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'black',
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 0, 255, 0.63)',
    marginLeft: 0,
    marginTop: 10,
  },
  jobText: {
    textAlign: 'center',
    fontSize: 26,
    fontStyle: 'normal',
    fontWeight: 'bold',
    paddingLeft: 5,
    paddingTop: 8,
    color: 'black',
  },
  companyText: {
    textAlign: 'center',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '700',
    paddingLeft: 5,
    paddingTop: 0,
    color: 'black',
  },
  timeText: {
    textAlign: 'center',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    paddingLeft: 5,
    paddingTop: 0,
    color: 'black',
  },

  column: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
});

export default WorkExperience;
