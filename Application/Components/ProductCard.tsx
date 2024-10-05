import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const ProductCard = () => {
    const [selectedSize, setSelectedSize] = useState('M'); // Default selected size

    const sizes = ['S', 'M', 'L'];
    const colors = ['#FF4C4C', '#0080FF', '#00CC66', '#FFDD44'];

    return (
        <View style={styles.cardcenter}>
            <View style={styles.container}>
                {/* Image Section */}
                <Image
                    source={{ uri: 'https://via.placeholder.com/300x400' }}
                    style={styles.productImage}
                />

                {/* Color Options */}
                <View style={styles.colorOptions}>
                    {colors.map((color, index) => (
                        <View key={index} style={[styles.colorCircle, { backgroundColor: color }]} />
                    ))}
                </View>

                {/* Product Name and Price */}
                <Text style={styles.productName}>HALTER NECK TOP</Text>
                <Text style={styles.productPrice}>$132.00</Text>

                {/* Size Options */}
                <View style={styles.sizeOptions}>
                    {sizes.map((size) => (
                        <TouchableOpacity
                            key={size}
                            style={[
                                styles.sizeButton,
                                selectedSize === size && styles.selectedSizeButton
                            ]}
                            onPress={() => setSelectedSize(size)}
                        >
                            <Text style={[
                                styles.sizeText,
                                selectedSize === size && styles.selectedSizeText
                            ]}>{size}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Description */}
                <Text style={styles.productDescription}>
                    Embroidered cropped top. Short sleeves.
                </Text>

                {/* Add to Cart Button */}
                <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addButtonText}>ADD TO CART</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        borderRadius: 8,
        backgroundColor: '#fff',
        width: 350,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    productImage: {
        width: '100%',
        height: 250,
        resizeMode: 'cover',
        borderRadius: 8,
    },
    colorOptions: {
        flexDirection: 'row',
        marginVertical: 16,
        justifyContent: 'center',
    },
    colorCircle: {
        width: 24,
        height: 24,
        borderRadius: 12,
        marginHorizontal: 8,
    },
    productName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 4,
    },
    productPrice: {
        fontSize: 16,
        color: '#888',
        marginBottom: 12,
    },
    sizeOptions: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 16,
    },
    sizeButton: {
        borderWidth: 1,
        borderColor: '#888',
        borderRadius: 4,
        paddingHorizontal: 12,
        paddingVertical: 6,
        marginHorizontal: 4,
    },
    selectedSizeButton: {
        backgroundColor: '#333',
        borderColor: '#333',
    },
    sizeText: {
        fontSize: 16,
        color: '#888',
    },
    selectedSizeText: {
        color: '#fff',
    },
    productDescription: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        marginBottom: 16,
    },
    addButton: {
        backgroundColor: '#000',
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 4,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    cardcenter:{
        flex:1,
        alignItems:'center',
    }
});

export default ProductCard;
