import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const Details = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Details</Text>
            {/* <Button title="Go to Details" onPress = { () => navigation.goBack()} /> */}
        </View>
    )
}

export default Details

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})
