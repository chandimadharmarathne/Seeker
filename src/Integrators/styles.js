import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    containerMain:{
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    
  containerProfile: {
    backgroundColor: 'white',
  },
  containerCenter: {
    backgroundColor: 'white',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: 'gray',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  profilePicture:{
    width:66,
    height:66,
    borderRadius:66,
    borderWidth:1,
    borderColor:'black',
    overflow:'hidden',
    marginTop:34,
    marginLeft:15,
  },
  raw:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 22,
    borderColor: 'gray',
    borderWidth: 0.1,
    borderRadius: 10,
    width: 300,
    height: 35,
  },
  column:{
    flexDirection: 'column',
    alignItems:'flex-start',
  },
  nameText:{
    textAlign: 'center',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: 'bold',
    paddingLeft:10,
    paddingTop:30,
    color: 'black',
  },
  greeting:{
    textAlign: 'center',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '400',
    paddingLeft:10,
    paddingTop:0,
    color: 'black',
  },
  icon:{
    width:30,
    height:30,
    borderColor:'black',
    marginLeft:90,
    marginTop:40
  },
  listIcon:{
    width:30,
    height:30,
    borderColor:'black',
    marginLeft:10,
    marginTop:20
  },
  iconSearch:{
    width:20,
    height:20,
    borderColor:'black',
    marginLeft:10,
    marginTop:10,
    marginBottom:10,
  },
  input: {
    fontWeight: '500',
    fontSize: 16,
    fontFamily: 'Inter-Medium',
  },
  paddingContainer:{
    paddingTop:30,
  },
  boxLine: {
    backgroundColor: 'rgba(255, 0, 0, 0.01)',
    height: 60,
    width: 163,
    paddingLeft:10,
    paddingTop:5,
    marginBottom:20,
    
  },
  boxLine2: {
    backgroundColor: '#052759',
    height: 33,
    width: 120,
    paddingLeft:22,
    paddingTop:3.5,
    borderRadius:25,
    marginLeft:20,
  },
  imageView: {
    width:130,
    height:130,
    borderColor:'black',
    overflow:'hidden',
    marginTop:4,
    marginLeft:15,
  },
  cardText:{
    textAlign: 'center',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: 'white',
  },
  readMore:{
    textAlign: 'center',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: 'white',
    
  },

});

export default styles;