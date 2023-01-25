import { View, Text, Pressable, StyleSheet } from 'react-native';

function PrimaryButton({ children }) {

    const pressHandler = () => {
        console.log("press")
    }

    return (
    <View style={styles.buttonOuterContainer}>
        <Pressable 
            onPress={pressHandler} 
            style={({pressed}) => pressed ? 
            [styles.buttonInnerContainer, styles.pressed] 
            : 
            styles.buttonInnerContainer}
            android_ripple={{color: 'white'}}
        >   
            <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
    </View>
    )
}

export default PrimaryButton

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: '#72063c',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75
    }
})