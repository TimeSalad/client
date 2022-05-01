import React from 'react';
import {useState} from 'react';
import {StyleSheet, View, TextInput, Text} from 'react-native';

interface Props {
  title: string;
  hint: string;
  text?: string;
}

const AddHistoryItem = ({title, hint, text}: Props) => {
  const [input, onChangeInput] = useState(text);
  return (
    <View style={styles.block}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        value={input}
        onChangeText={onChangeInput}
        style={styles.input}
        placeholder={hint}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  // Todo : 스타일 설정
  block: {
    paddingTop: 8,
    paddingBottom: 16,
  },
  title: {},
  input: {},
});

export default AddHistoryItem;
