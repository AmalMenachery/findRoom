import React from 'react';
import {StyleSheet, View} from 'react-native';
import Home from './src/modules/home';

import {SafeAreaView} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaViewStyle}>
      <View style={styles.container}>
        <Home />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  safeAreaViewStyle: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
