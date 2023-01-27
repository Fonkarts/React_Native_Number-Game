import { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native"
import NumberContainer from '../components/game/NumberContainer'
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from '../components/ui/Title'
import Colors from '../utils/Colors'

function generateRandomBetween(min,  max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if(rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1
let maxBoundary = 100

function GameScreen({userNumber}) {

    const initialGuess = generateRandomBetween(minBoundary, maxBoundary, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)

    function nextGuessHandler(direction) {
        if(
            (direction === 'lower' && currentGuess < userNumber)
            ||
            (direction === 'higher' && currentGuess > userNumber) 
        ) {
            Alert.alert(
                "Please don't lie ;)", 
                "You know tha it's wrong...",
                [{ text: "Sorry !", style:"cancel" }]
            )
            return
        }
        if (direction === 'lower') {
            maxBoundary = currentGuess -1;
        } else if (direction === 'higher') {
            minBoundary = currentGuess +1;
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
        setCurrentGuess(newRndNumber);
    }

    return (
    <View style={styles.screen}>
        <Title>Opponent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View>
            <Text>Higher or Lower ?</Text>
        </View>
        <View>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>+</PrimaryButton>
        </View>
        {/* <View>LOG ROUNDS</View> */}
    </View>
    )

}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 70,
        paddingBottom: 30
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