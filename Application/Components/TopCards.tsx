import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

// Array of colors for the cards
const colors = ['yellow', 'blue', 'green'];

const TopCards = () => {
    return (
        <View>
            <Text style={styles.titleText}>Top Cards</Text>
            <View style={styles.cardContainer}>
                {colors.map((color, index) => (
                    <View key={index} style={[styles.colorCards, { backgroundColor: color }]}>
                        <Text style={styles.cardText}>{color.charAt(0).toUpperCase() + color.slice(1)}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
}

export default TopCards;

const styles = StyleSheet.create({
    titleText: {
        fontSize: 18,
        margin: 8,
    },
    cardContainer: {
        flexDirection: 'row', // Horizontal layout for cards
        justifyContent: 'space-evenly', // Space cards evenly
        marginBottom: 16, // Space below TopCards section
    },
    colorCards: {
        width: 100,
        height: 100,
        margin: 8,
        borderRadius: 4,
        alignItems: 'center', // Center the text vertically
        justifyContent: 'center', // Center the text horizontally
    },
    cardText: {
        fontSize: 18,
        color: '#fff',
    },
});
