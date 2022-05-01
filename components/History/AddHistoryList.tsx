import React from 'react';
import AddHistoryItem from './AddHistoryItem';

interface Props {
  contents: {title: string; hint: string; text?: string}[];
}

// const AddHistoryListContents = [
//   {title: '카테고리', hint: '미분류'},
//   {title: '날짜', hint: '날짜를 입력하세요'},
//   {
//     title: '메모',
//     hint: '메모 및 #태그를 입력하세요',
//   },
// ];

const AddHistoryList = ({contents}: Props) => {
  return contents.map(item => (
    <AddHistoryItem title={item.title} hint={item.hint} />
  ));
};

export default AddHistoryList;
