import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from '../components/PrimaryButton'

function StartGameScreen() {
    return <View style={styles.inputContainer}>
        <TextInput 
            style={styles.numberInput} 
            maxLength={2} 
            keyboardType="number-pad"
        />
        <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
                <PrimaryButton>Reset</PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
                <PrimaryButton>Confirm</PrimaryButton>
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: "#3b021f",
        borderRadius: 8,
        // elevation -> box-shadow for android
        elevation: 4,
        // shadow**** -> box-shadow for Ios
        shadowColor: '#333',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    numberInput: {
        height: 50,
        width: 50,
        textAlign: 'center',
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    }
})

export default StartGameScreen;

/* 
TEXTINPUT have interesting properties when it comes to 
write something into it -> "autoCapitalize" and "autoCorrect".
*/