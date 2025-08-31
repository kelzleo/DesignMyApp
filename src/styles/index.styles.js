import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end', // align items to the bottom
        alignItems: 'center',
        paddingBottom: 20,
        backgroundColor: 'black'
    },
    welcomeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#1E90FF',
    borderRadius: 5,
    color: 'white'
  },  
   bottomButtons: {
    flexDirection: 'row',      // arrange buttons in a row
    justifyContent: 'space-between', // space between buttons
    width: '80%',              // width of the row
  },
  welcome: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
    
});

export default styles;