import { View, Text, StyleSheet } from "react-native"
import Title from '../components/Title'
import Colors from '../utils/Colors'

function GameScreen() {

    return (
    <View style={styles.screen}>
        <Title>Opponent's Guess</Title>
        <View>
            <Text>Higher or Lower ?</Text>
        </View>
        {/* + - */}
        {/* <View>LOG ROUNDS</View> */}
    </View>
    )

}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    }, 
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.accent500,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.accent500,
        padding: 12,
    }
})