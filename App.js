import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';

export default function App() {
  return (
    <View className="flex flex-col my-20 bg-gray-500">
     <Text className="text-red-700">Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    marginVertical: 20,
    padding: 20,
    textAlign: 'justify'
  }
});
