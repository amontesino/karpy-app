import { PropsWithChildren } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = PropsWithChildren<{
    emoji: string
}>;

export default function Task( { children, emoji } : Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.emoji}>{emoji}</Text>
            <Text>{children}</Text>
            <Pressable style={styles.button}>
                <Text>✔️</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'red',
        borderRadius: '2em',
        width: '90%',
        height: '5em',
        margin: '0.5em',
    },
    emoji: {
        fontSize: 50
    },
    button: {
        position: 'absolute',
        right: 0
    }
})