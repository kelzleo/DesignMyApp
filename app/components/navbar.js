import React, { useMemo } from "react";
import { View, Text, useColorScheme } from "react-native";
import { Link } from "expo-router";
import createStyles from "../styles/index.styles";

const Navbar = () => {
    const colorScheme = useColorScheme();
    const styles = useMemo(() => createStyles(colorScheme), [colorScheme])

     
     return(
        <>
       <View style={styles.bottomButtons}>
                <Link href="/home" asChild>
                    <Text style={styles.linkText}>Home</Text>
                </Link>
            </View>
            <View style={styles.bottomButtons}>
                <Link href="/profile" asChild>
                    <Text style={styles.linkText}>Profile</Text>
                </Link>
            </View>
        </>
     )
}
export default Navbar;