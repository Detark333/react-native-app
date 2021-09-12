import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

export const Input = ({
  onSave,
  onChooseAll,
  onCancelAll,
  onViewAll,
  orientation,
}) => {
  const [text, setText] = useState('');
  const onPressButton = () => {
    onSave(text);
    setText('');
  };
  return (
    <>
      <View
        style={
          orientation === 'portrait'
            ? styles.containerInput
            : stylesLandscape.containerInput
        }>
        <TextInput
          style={
            orientation === 'portrait' ? styles.input : stylesLandscape.input
          }
          onChangeText={setText}
          value={text}
        />
        <Button
          title={orientation === 'portrait' ? 'Сохранить' : 'Save'}
          onPress={onPressButton}
        />
      </View>
      <Button
        title={orientation === 'portrait' ? 'Вывести все' : 'Output all'}
        onPress={onViewAll}
      />
      <View
        style={
          orientation === 'portrait'
            ? styles.containerButtons
            : stylesLandscape.containerButtons
        }>
        <Button
          title={orientation === 'portrait' ? 'Выбрать все' : 'Set all'}
          onPress={onChooseAll}
        />
        <Button
          title={orientation === 'portrait' ? 'Отменить все' : 'Cancel all'}
          onPress={onCancelAll}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  containerInput: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '60%',
  },
});

const stylesLandscape = StyleSheet.create({
  containerInput: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '60%',
  },
});
