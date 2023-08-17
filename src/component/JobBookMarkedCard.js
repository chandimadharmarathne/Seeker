import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const JobBookMarkedCard = () => {
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
            <View style={styles.raw}>
              <View style={styles.column}>
                <Text style={styles.jobText}>UX/UI Designer</Text>
                <Text style={styles.companyText}>Cham Soft</Text>
                <View style={styles.raw}>
                  <Text style={styles.locationText}>Colombo, Sri Lanka</Text>
                  <Text style={styles.timeText}>* Full Time</Text>
                </View>
              </View>
              <View style={styles.column}>
                

                <Text style={[styles.salaryText,{paddingBottom:40, marginTop:-10}]}>Rs1.5k/Mo</Text>
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
                source={require('../Assets/images/pf.png')} // Adjust the image path
                style={{width: '100%', height: '100%'}}
                resizeMode="cover"
              />
            </View>
            <View style={styles.raw}>
              <View style={styles.column}>
                <Text style={styles.jobText}>UX/UI Designer</Text>
                <Text style={styles.companyText}>Cham Soft</Text>
                <View style={styles.raw}>
                  <Text style={styles.locationText}>Colombo, Sri Lanka</Text>
                  <Text style={styles.timeText}>* Full Time</Text>
                </View>
              </View>
              <View style={styles.column}>
                

                <Text style={[styles.salaryText,{paddingBottom:40, marginTop:-10}]}>Rs1.5k/Mo</Text>
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
                source={require('../Assets/images/pf.png')} // Adjust the image path
                style={{width: '100%', height: '100%'}}
                resizeMode="cover"
              />
            </View>
            <View style={styles.raw}>
              <View style={styles.column}>
                <Text style={styles.jobText}>UX/UI Designer</Text>
                <Text style={styles.companyText}>Cham Soft</Text>
                <View style={styles.raw}>
                  <Text style={styles.locationText}>Colombo, Sri Lanka</Text>
                  <Text style={styles.timeText}>* Full Time</Text>
                </View>
              </View>
              <View style={styles.column}>
                

                <Text style={[styles.salaryText,{paddingBottom:40, marginTop:-10}]}>Rs1.5k/Mo</Text>
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
                source={require('../Assets/images/pf.png')} // Adjust the image path
                style={{width: '100%', height: '100%'}}
                resizeMode="cover"
              />
            </View>
            <View style={styles.raw}>
              <View style={styles.column}>
                <Text style={styles.jobText}>UX/UI Designer</Text>
                <Text style={styles.companyText}>Cham Soft</Text>
                <View style={styles.raw}>
                  <Text style={styles.locationText}>Colombo, Sri Lanka</Text>
                  <Text style={styles.timeText}>* Full Time</Text>
                </View>
              </View>
              <View style={styles.column}>
                

                <Text style={[styles.salaryText,{paddingBottom:40, marginTop:-10}]}>Rs1.5k/Mo</Text>
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
                source={require('../Assets/images/pf.png')} // Adjust the image path
                style={{width: '100%', height: '100%'}}
                resizeMode="cover"
              />
            </View>
            <View style={styles.raw}>
              <View style={styles.column}>
                <Text style={styles.jobText}>UX/UI Designer</Text>
                <Text style={styles.companyText}>Cham Soft</Text>
                <View style={styles.raw}>
                  <Text style={styles.locationText}>Colombo, Sri Lanka</Text>
                  <Text style={styles.timeText}>* Full Time</Text>
                </View>
              </View>
              <View style={styles.column}>
                

                <Text style={[styles.salaryText,{paddingBottom:40, marginTop:-10}]}>Rs1.5k/Mo</Text>
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
                source={require('../Assets/images/pf.png')} // Adjust the image path
                style={{width: '100%', height: '100%'}}
                resizeMode="cover"
              />
            </View>
            <View style={styles.raw}>
              <View style={styles.column}>
                <Text style={styles.jobText}>UX/UI Designer</Text>
                <Text style={styles.companyText}>Cham Soft</Text>
                <View style={styles.raw}>
                  <Text style={styles.locationText}>Colombo, Sri Lanka</Text>
                  <Text style={styles.timeText}>* Full Time</Text>
                </View>
              </View>
              <View style={styles.column}>
                

                <Text style={[styles.salaryText,{paddingBottom:40, marginTop:-10}]}>Rs1.5k/Mo</Text>
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
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'black',
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 0, 0, 0.63)',
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
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    paddingLeft: 5,
    paddingTop: 0,
    color: 'black',
  },
  salaryText: {
    textAlign: 'center',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '800',
    paddingLeft: 15,
    paddingTop: 18,
    color: 'black',
  },
  bookmarkIcon: {
    width: 30,
    height: 30,
    borderColor: 'black',
    marginLeft: 55,
    marginTop: 10,
  },
  column: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
});

export default JobBookMarkedCard;
