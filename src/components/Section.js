import React from 'react';
import { StyleSheet, Switch, Text, useColorScheme, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const Section = ({
  title,
  isEnabled,
  toggleSwitch,
  orientation,
}): Node => {
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          orientation === 'portrait'
            ? styles.sectionTitle
            : stylesLandscape.sectionTitle,
          {
            color: orientation !== 'portrait' ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Switch
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

const stylesLandscape = StyleSheet.create({
  sectionContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    color: 'green',
    backgroundColor: 'green',
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
