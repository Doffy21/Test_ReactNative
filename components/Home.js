import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Button title="Go to Details" onPress = { () => navigation.navigate('Details')} />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})
