import React from 'react';
import AddHistoryItem from './AddHistoryItem';

interface Props {
  contents: { title: string; hint: string; text?: string }[];
}

const AddHistoryList = ({ contents }: Props) => {
  return contents.map(item => (
    <AddHistoryItem title={item.title} hint={item.hint} />
  ));
};

export default AddHistoryList;
