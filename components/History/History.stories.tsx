import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { History } from '.';
import CenterView from '../stories/CenterView';
import AddHistoryItem from './AddHistoryItem';
import AddHistoryList from './AddHistoryList';

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('default', () => (
    <History
      title="하은선생님의 클라이밍교실"
      startedtAt={new Date('2022-04-18T12:00:00')}
      endedAt={new Date('2022-04-18T14:20:00')}
    />
  ));

storiesOf('AddHistory', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('default', () => (
    <AddHistoryItem title="메모" hint="메모 및 #태그를 입력하세요" />
  ));

storiesOf('AddHistoryList', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('default', () => (
    <AddHistoryList
      contents={[
        { title: '카테고리', hint: '미분류' },
        { title: '날짜', hint: '날짜를 입력하세요' },
        {
          title: '메모',
          hint: '메모 및 #태그를 입력하세요',
        },
      ]}
    />
  ));
