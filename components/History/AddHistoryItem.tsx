import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';

interface Props {
  title: string;
  hint: string;
  text?: string;
}

const AddHistoryItem = ({ title, hint, text }: Props) => {
  const [input, onChangeInput] = useState(text);
  return (
    <View style={styles.block}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        value={input}
        onChangeText={onChangeInput}
        style={styles.input}
        placeholder={hint}
        multiline={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    display: 'flex',
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    padding: 20,
  },
  title: {
    width: 100,
    height: 40,
    paddingTop: 13,
  },
  input: {
    height: 40,
    paddingTop: 12,
  },
});

export default AddHistoryItem;
