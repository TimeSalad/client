import React from 'react';
import { View } from 'react-native';
import AddHistoryItem from './AddHistoryItem';

interface Props {
  contents: { title: string; hint: string; text?: string }[];
}

const AddHistoryList = ({ contents }: Props) => {
  return (
    <View>
      {contents.map(item => (
        <AddHistoryItem title={item.title} hint={item.hint} />
      ))}
    </View>
  );
};

export default AddHistoryList;
