/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { List } from './screens/List';

const ScrollStyle = {
  padding: 20,
};
const App: () => Node = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView style={ScrollStyle}>
        <List />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
