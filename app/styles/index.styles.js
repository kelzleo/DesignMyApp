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
  profileContainer: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center'

  },
  leftAligned: {
  alignSelf: 'flex-start', // pushes the view to the start of its parent
  marginLeft: 20,          // optional padding from the left edge
},
  h1: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    padding: 5
    
  },
  splitDiv: {
    backgroundColor: '#333333',
    borderRadius: 15,
    padding: 20,
    width: 350,
    paddingTop: 20,
    height: 'auto',
     marginTop: 20 ,


  },
  line: {
    height: 1,             // thickness of the line
    backgroundColor: 'black',
    marginLeft: 50,        // starts 50 units from left
    marginRight: 0, 
  },
  repcount: {
    backgroundColor: '#333333',
    borderRadius: 15,
    padding: 10,
    width: 350,
    height: 'auto',
    
  },
  repcountH2: {
    color: 'white',
    fontSize: 20,
    padding: 5,
    fontWeight: 'bold'

  },
  p: {
    fontSize: 14,
    color: 'gray',
    padding: 7


  },
 repcountButton: {
  backgroundColor: 'orange',
  borderRadius: 10,
  padding: 8,
  alignItems: 'center',    // centers children horizontally
  justifyContent: 'center' // centers children vertically
},
 repcountButtonText: {
        // text color
  fontSize: 40,            // adjust as needed
  fontWeight: 'bold',
  textAlign: 'center'      // centers text
}
});

export default styles;