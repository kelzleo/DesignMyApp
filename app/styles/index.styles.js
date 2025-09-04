// app/styles/index.styles.js
import { StyleSheet } from 'react-native';

/**
 * createStyles(colorScheme)
 * - colorScheme: 'light' | 'dark' | null
 *
 * Usage:
 * const colorScheme = useColorScheme();
 * const styles = useMemo(() => createStyles(colorScheme), [colorScheme]);
 */
export default function createStyles(colorScheme = 'light') {
  const isDark = colorScheme === 'dark';

  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end', // align items to the bottom
      alignItems: 'center',
      paddingBottom: 20,
      backgroundColor: isDark ? '#000000' : '#FFFFFF',
    },

    welcomeContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: isDark ? '#000000' : '#FFFFFF',
    },

    linkText: {
      color: isDark ? '#FFFFFF' : '#000000',
    },

    button: {
      marginTop: 20,
      padding: 10,
      backgroundColor: isDark ? '#1E90FF' : '#007AFF',
      borderRadius: 5,
      // note: text color belongs on the Text element (styles.linkText)
    },

    bottomButtons: {
      flexDirection: 'row',      // arrange buttons in a row
      justifyContent: 'space-between', // space between buttons
      width: '80%',              // width of the row
    },

    welcome: {
      fontSize: 40,
      fontWeight: 'bold',
      color: isDark ? '#FFFFFF' : '#000000',
    },
      message: {
            fontSize: 14,
            color: isDark ? '#FF6666' : '#FF0000',
            marginBottom: 10,
            textAlign: 'center',
        },

    profileContainer: {
      backgroundColor: isDark ? '#000000' : '#FFFFFF',
      flex: 1,
      alignItems: 'center',
    },

    leftAligned: {
      alignSelf: 'flex-start', // pushes the view to the start of its parent
      marginLeft: 20,          // optional padding from the left edge
    },

    h1: {
      fontSize: 30,
      fontWeight: 'bold',
      color: isDark ? '#FFFFFF' : '#000000',
      padding: 5,
    },

    splitDiv: {
      backgroundColor: isDark ? '#2B2B2B' : '#F0F0F0', // card background
      borderRadius: 15,
      padding: 10,
      width: 350,
      
      height: 'auto',
      marginTop: 20,
    },

    line: {
      height: 1,             // thickness of the line
      backgroundColor: isDark ? '#444444' : '#CCCCCC',
      marginLeft: 50,        // starts 50 units from left
      marginRight: 0,
    },

    repcount: {
      backgroundColor: isDark ? '#2B2B2B' : '#F0F0F0',
      borderRadius: 15,
      padding: 10,
      width: 350,
      height: 'auto',
     
    },
    emailRow: {
  flexDirection: 'row',
  alignItems: 'center',
    },

    repcountH2: {
      color: isDark ? '#FFFFFF' : '#000000',
      fontSize: 20,
      padding: 5,
     
      fontWeight: 'bold',
    },
    
    repcountH3: {
      
       color: isDark ? '#FFFFFF' : '#000000',
       fontSize: 15,
       padding: 5,
       justifyContent: 'center',
     
      fontWeight: 'bold',
    },



    p: {
      fontSize: 14,
      color: isDark ? '#BDBDBD' : 'gray',
      padding: 7,
    },

    repcountButton: {
      backgroundColor: 'orange',
      borderRadius: 10,
      padding: 8,
      alignItems: 'center',    // centers children horizontally
      justifyContent: 'center' // centers children vertically
    },

    repcountButtonText: {
      fontSize: 40,            // adjust as needed
      fontWeight: 'bold',
      textAlign: 'center',     // centers text
      color: '#000000',        // black text works well on orange background
    },

    input: {
      padding: 10,
      margin: 10,
      width: 250,
      color: isDark ? 'white' : 'black'
    }
    
    
  });
}
