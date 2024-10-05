import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import HapticFeedback from 'react-native-haptic-feedback';
import Torch from 'react-native-torch';
import { PermissionsAndroid, Platform } from 'react-native';

// Load the beep sound
const playSound = () => {
  try {
    SoundPlayer.playSoundFile('beep', 'mp3'); // Play the sound file (without extension)
  } catch (e) {
    console.log(`Cannot play the sound file`, e);
  }
};

const ImageCard = () => {
  const [isTorchOn, setIsTorchOn] = useState(false);
  const [intervalId, setIntervalId] = useState(null); // State to store the interval ID

  // Effect to handle sound playback when torch state changes
  useEffect(() => {
    if (isTorchOn) {
      // Start playing sound in a loop
      const id = setInterval(() => {
        playSound();
      }, 1000); // Play sound every second (1000 milliseconds)
      setIntervalId(id);
    } else {
      // Clear the interval when torch is off
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(null);
      }
    }
    
    // Cleanup function to clear interval on component unmount
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isTorchOn]); // Dependency array includes isTorchOn

  // Handle flashlight toggle, haptic feedback, and sound playback
  const handleImagePress = async () => {
    try {
      // Trigger strong haptic feedback
      HapticFeedback.trigger('impactHeavy', {
        enableVibrateFallback: true,
        ignoreAndroidSystemSettings: false,
      });

      // Check if we need to ask for permission for Android (Android 6.0 and higher)
      if (Platform.OS === 'android' && Platform.Version >= 23) {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          Alert.alert('Permission Denied', 'Camera permission is required to use the flashlight.');
          return;
        }
      }

      // Toggle the torch on or off
      Torch.switchState(!isTorchOn);
      setIsTorchOn(!isTorchOn);
      
    } catch (error) {
      console.log('Error toggling flashlight:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Flashlight & Haptic Feedback</Text>
      <TouchableOpacity onPress={handleImagePress}>
        <View style={styles.imgCard}>
          <Image
            source={{
              uri: 'https://example.com/image.jpg', // Replace with actual image URI
            }}
            style={styles.image}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 24,
    marginBottom: 20,
  },
  imgCard: {
    width: 200,
    height: 200,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#ddd',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ImageCard;
