import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const MindfulYouPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/artify_illustration.png')} 
          style={styles.image}
        />
      </View>

      <Text style={styles.title}>Mindful</Text>
      <Text style={styles.subtitle}>YOU</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>CLICK FOR NEXT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  },
  imageContainer: {
    width: '80%',
    height: '30%',
    marginBottom: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontFamily:'Rosarvio',
    fontSize: 32,
    fontWeight: '600',
    textAlign: 'center',
    color: '#000',
  },
  subtitle: {
    fontFamily:'Rosarvio',
    fontSize: 32,
    fontWeight: '400',
    textAlign: 'center',
    color: '#000',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#A084E8',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default MindfulYouPage;
