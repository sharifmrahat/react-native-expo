import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Button, StatusBar } from 'react-native';

export default function App() {
  console.log(StatusBar)
  return (
    <SafeAreaView style={styles.container}>
     <View className="flex-1 flex-col mb-20 bg-gray-200 border-t-4 border-t-red-800">
     <Text className="text-red-700 text-3xl font-bold text-center">Hello World</Text>
     </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:StatusBar.currentHeight
  },
  textContainer: {
    marginVertical: 20,
    padding: 20,
    textAlign: 'justify'
  }
});
