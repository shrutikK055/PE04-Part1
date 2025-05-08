import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileCard = ({ expanded }) => {
  return (
    <View style={[styles.card, expanded && styles.expandedCard]}>
      <View style={styles.iconContainer}>
        <Image
          style={styles.icon}
          source={{
            uri: 'https://img.icons8.com/ios-filled/100/000000/user.png',
          }}
        />
      </View>
      <Text style={styles.name}>John Doe</Text>
      {expanded && (
        <>
          <Text style={styles.title}>React Native Developer</Text>
          <Text style={styles.description}>
            John is a really great JavaScript developer. He loves using JS to build
            React Native applications for iOS and Android.
          </Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#3483eb',
    padding: 10,
    margin: 10,
    borderRadius: 12,
    alignItems: 'center',
    width: 140,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
  },
  expandedCard: {
    width: 300,
    padding: 20,
  },
  iconContainer: {
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 10,
    marginBottom: 10,
  },
  icon: {
    width: 40,
    height: 40,
    tintColor: '#000',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  description: {
    fontSize: 13,
    color: '#000',
    textAlign: 'center',
  },
});

export default ProfileCard;
