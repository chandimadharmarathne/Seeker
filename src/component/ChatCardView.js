import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ChatCardView = () => {
  return (
    <View style={styles.row}>
      <View style={styles.containerMain}>
        <View style={styles.boxLine3}>
          <View style={styles.raw}>
            <View style={styles.jobPicture}>
              <Image
                source={require('../Assets/images/google.png')} // Adjust the image path
                style={{width: '100%', height: '100%'}}
                resizeMode="cover"
              />
            </View>
            <View style={styles.raw}>
              <View style={styles.column}>
                <Text style={styles.companyText}>Google</Text>
                <Text style={styles.msgText}>Hello Chandima</Text>
              </View>
              <View style={[styles.column, {alignItems:'center',marginLeft:70}]}>
                <Text
                  style={[styles.timeText, {paddingBottom: 1, marginTop: -10}]}>
                  12:15 pm
                </Text>
                <View style={styles.boxLine2}>
                  <Text>
                    <Text style={styles.msgCountText}>5</Text>
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.containerMain}>
        <View style={styles.boxLine3}>
          <View style={styles.raw}>
            <View style={styles.jobPicture}>
              <Image
                source={require('../Assets/images/wso2.png')} // Adjust the image path
                style={{width: '100%', height: '100%'}}
                resizeMode="cover"
              />
            </View>
            <View style={styles.raw}>
              <View style={styles.column}>
                <Text style={styles.companyText}>WSO2</Text>
                <Text style={styles.msgReadText}>Hello Chandima</Text>
              </View>
              <View style={[styles.column, {alignItems:'center',marginLeft:70}]}>
                <Text
                  style={[styles.timeText, {paddingBottom: 1, marginTop: -40}]}>
                  1 day ago
                </Text>
                
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.containerMain}>
        <View style={styles.boxLine3}>
          <View style={styles.raw}>
            <View style={styles.jobPicture}>
              <Image
                source={require('../Assets/images/IFS.png')} // Adjust the image path
                style={{width: '100%', height: '100%'}}
                resizeMode="cover"
              />
            </View>
            <View style={styles.raw}>
              <View style={styles.column}>
                <Text style={styles.companyText}>IFS </Text>
                <Text style={styles.msgReadText}>Hello Chandima</Text>
              </View>
              <View style={[styles.column, {alignItems:'center',marginLeft:70}]}>
                <Text
                  style={[styles.timeText, {paddingBottom: 1, marginTop: -40}]}>
                  2 day ago
                </Text>
                
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.containerMain}>
        <View style={styles.boxLine3}>
          <View style={styles.raw}>
            <View style={styles.jobPicture}>
              <Image
                source={require('../Assets/images/creativeSoftware.png')} // Adjust the image path
                style={{width: '100%', height: '100%'}}
                resizeMode="cover"
              />
            </View>
            <View style={styles.raw}>
              <View style={styles.column}>
                <Text style={styles.companyText}>Creative</Text>
                <Text style={styles.msgReadText}>Hello Chandima</Text>
              </View>
              <View style={[styles.column, {alignItems:'center',marginLeft:70}]}>
                <Text
                  style={[styles.timeText, {paddingBottom: 1, marginTop: -40}]}>
                  3 day ago
                </Text>
                
              </View>
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
    justifyContent: 'center',
    alignItems: 'center',
  },

  raw: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  boxLine2: {
    backgroundColor: '#A898C4',
    height: 33,
    width: 33,
    paddingLeft: 0,
    paddingTop: 0,
    borderRadius: 25,
    marginLeft: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxLine3: {
    backgroundColor: 'rgba(236, 236, 236, 0.27)',
    height: 90,
    width: 360,
    borderRadius: 16,
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  jobPicture: {
    width: 66,
    height: 66,
    borderRadius: 66,
    borderWidth: 0,
    borderColor: 'black',
    overflow: 'hidden',
    backgroundColor: 'rgba(236, 236, 236, 0.27)',
    marginLeft: 0,
    marginTop: 10,
  },
  companyText: {
    textAlign: 'center',
    fontSize: 26,
    fontStyle: 'normal',
    fontWeight: 'bold',
    paddingLeft: 5,
    paddingTop: 8,
    color: 'black',
  },
  msgText: {
    textAlign: 'center',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '700',
    paddingLeft: 5,
    paddingTop: 0,
    color: 'black',
  },
  msgReadText: {
    textAlign: 'center',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '400',
    paddingLeft: 5,
    paddingTop: 0,
    color: 'black',
  },
  locationText: {
    textAlign: 'center',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    paddingLeft: 5,
    paddingTop: 0,
    color: 'black',
  },

  timeText: {
    textAlign: 'center',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '400',
    paddingLeft: 15,
    paddingTop: 18,
    color: 'black',
  },
  msgCountText: {
    textAlign: 'center',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '800',
    color: 'white',
  },

  column: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
});

export default ChatCardView;
