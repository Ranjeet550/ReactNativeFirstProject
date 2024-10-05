import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

// Array of colors for the scroll cards
const colors = ['red', 'blue', 'green', 'purple', 'orange', 'purple'];

const ScrollCards = () => {
    return (
        <View>
            <Text style={styles.titleText}>Scroll Cards</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {colors.map((color, index) => (
                    <View key={index} style={[styles.scrollCard, { backgroundColor: color }]}>
                        <Text style={styles.cardText}>{color.charAt(0).toUpperCase() + color.slice(1)}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

export default ScrollCards;

const styles = StyleSheet.create({
    titleText: {
        margin: 8,
        fontWeight: 'bold',
        fontSize: 18, // Added fontSize for consistency
    },
    scrollCard: {
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
